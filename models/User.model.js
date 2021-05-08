const mongoose = require('mongoose');

const UserSchema  = new mongoose.Schema({userName:String,password:String}) 

const User = new  mongoose.model("user",UserSchema)

module.exports ={User}