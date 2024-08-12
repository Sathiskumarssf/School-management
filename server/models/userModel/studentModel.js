const mongoose = require ('mongoose');
const studentSchema= mongoose.Schema({
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
    studentNumber:{
        type:String,
        required:[false]
    },
    

    grade:{
        type:String,
        required:[true, "Please enter your student number"]
    },

    devition:{
        type:String,
        required:[true,"Please enter your phone number."]

    },
    
    role:{
        type: String,
        default:"Student"
    },
    gender:{
        type:String
    },
    dob:{
        type:String,
        required:[true,"Please enter your Date of Birth"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email."]
    },
    phone:{
        type:String,
        required:[true,"Please enter your phone number."]

    },
    address:{
        type:String,
        required:[true,"Please enter your address."]
    },
    
    fathersName:{
        type:String,
    },
    mothersName:{
        type:String,
    },
    // teacherId:{
    //     type:String,
    //     required:[false]
    // }

})

const studentModel = mongoose.model('Student',studentSchema);
module.exports = studentModel;