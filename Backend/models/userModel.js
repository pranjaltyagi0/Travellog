const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        minlength:6
    }
})
module.exports = mongoose.model('signupdata',userSchema)