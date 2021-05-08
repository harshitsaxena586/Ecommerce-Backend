const mongoose = require('mongoose');
const { initializeUserbase } = require('../IntialiseDB/UserbaseDB');

// mongoose.connect('mongodb+srv://harshit:hellomongo@cluster0.igfzi.mongodb.net/Userbase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>console.log("succesfull mongoose connection"))
// .catch(error=>console.error(error))


const CartSchema  = new mongoose.Schema({userName:String,itemsInCart:[]}) 

const Cart = new  mongoose.model("cart",CartSchema)

module.exports ={Cart}