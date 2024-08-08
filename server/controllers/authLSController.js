


const jwt = require('jsonwebtoken');
const LSModal = require('../models/LSModals/LSModal');
require('dotenv').config();




//SignUp/// http://localhost:5000/api/v1/signup

exports.signUp = async(req,res)=>{
    const{ role,username, email, password}=req.body;
    try {
       const LSuser = new LSModal ({ username, email, password,role}); 
       await LSuser.save(); 
        // You can uncomment the following lines if you want to include token generation
        const token = jwt.sign({ id: LSuser._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",

         });
           res.status(201).json({ token, message: "User saved" });
         
        
    } catch (error) {
          res.status(400).json({ error: error.message });
    }
};
//Login /// http://localhost:5000/api/v1/login
exports.Login=async(req,res)=>{
    const{ email, password}=req.body;
    try {
        const LSuser =await LSModal.findOne({email});
        if(!LSuser || !(LSuser.comparePassword(password))){
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ id: LSuser._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",

         });
       res.status(201).json({ token, message: "User login" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const additionalFilters = req.body;

    const query = { email, ...additionalFilters };

    const result = await LSModal.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch" });
  }
};