const studentModel = require('../models/userModel/studentModel');
const teacherModel = require('../models/userModel/teacherModel');


exports.registerUser = async (req, res, next) => {
    try {
        const { role, ...userData } = req.body;

        if (role === 'teacher') {
            const teacher = await teacherModel.create(userData);
            return res.status(201).json({
                success: true,
                user: teacher,
            });
        } else if (role === 'student') {
            const student = await studentModel.create(userData);
            return res.status(201).json({
                success: true,
                user: student,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Invalid role specified',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
