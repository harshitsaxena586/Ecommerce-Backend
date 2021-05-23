const mongoose = require('mongoose');

const CartSchema  = new mongoose.Schema({userName:String,itemsInCart:[]}) 

const Cart = new  mongoose.model("cart",CartSchema)

module.exports ={Cart}