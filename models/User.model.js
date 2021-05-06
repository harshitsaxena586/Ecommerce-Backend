const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshit:hellomongo@cluster0.igfzi.mongodb.net/Userbase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("succesfull mongoose connection"))
.catch(error=>console.error(error))



const UserSchema  = new mongoose.Schema({userName:String,password:String}) 

const User = new  mongoose.model("user",UserSchema)

module.exports ={User}