const mongoose = require ('mongoose');
const teacherSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:[true,"Please enter"],
        trim:true,
        maxlength:[100," Name cannot exceed 50 characters."]
    },
    lastName: {
        type: String,
        required:[true,"Please enter"],
        trim:true,
        maxlength:[100,"Name cannot exceed 50 characters."]
    },
    // teacherId:{
    //     type:String,
    //     required:[true, "Please enter your teacher ID"]
    // },
    role:{
        type: String,
        default:"Teacher"
    },
    gender:{
        type:String
    },
    dob:{
        type:Date,
        required:[true,"Please enter your Date of Birth"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email."]
    },
    phone:{
        type:Number,
        required:[true,"Please enter your phone number."]

    },
    address:{
        type:String,
        required:[true,"Please enter your email address"]
    }

})

const teacherModel = mongoose.model('Teacher',teacherSchema);
module.exports = teacherModel;