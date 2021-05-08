const bodyParser = require('body-parser')
const express = require('express')
var router = express.Router()
const cors = require("cors")
const {Cart} = require("../models/Cart.model.js")
const { Product } = require('../models/Product.model.js')

router.use(cors())
router.use(bodyParser.json())

router.param("user",async (req,res,next,username)=>{
    const  clientUserName=username
    const[found]= await Cart.find({userName:clientUserName})
    const id=(found._id)
    const clientCart= await Cart.findById(id)
    req.cart=clientCart

    next()
  })

router.route("/:user")
.get((req,res)=>{
    const {cart}=req
    res.json({succes:true,cart})
})
.post(async(req,res)=>{
    let {cart}=req
    const addedItem=req.body
    console.log(addedItem)
    cart.itemsInCart= cart.itemsInCart.concat(addedItem)
    await cart.save()
    res.json({succes:true,message:"Cart updated"})
})

router.route("/:user/del")
.get((req,res)=>{
  const {cart}=req
  res.json({succes:true,message:"Cart delete api",cart})
})
.post(async (req,res)=>{
  const itemId=req.body
  const itemToDelete= await Product.findById(itemId._id)
  itemToDelete.remove()
  res.json({succes:true})
})

module.exports = router

