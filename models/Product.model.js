const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({name:String,img:String,highlights:String,description:String,price:Number,shipping:Number,inStock:Boolean,type:String}) 

const Product = new  mongoose.model("product",ProductSchema)

module.exports ={Product}