const express = require('express')
var router = express.Router()
const {Cart} = require("../models/Cart.model.js")
const { Product } = require('../models/Product.model.js')

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
    cart.itemsInCart= cart.itemsInCart.concat(addedItem)
    await cart.save()
    res.json({succes:true,message:"Cart updated"})
})

router.route("/:user/del")
.get((req,res)=>{
   res.json({succes:true,message:"Cart delete api"})
})
.post(async (req,res)=>{
  let {cart}=req
  const {itemId}=req.body
  cart.itemsInCart=cart.itemsInCart.filter(({item}) =>item._id!=itemId)
  await cart.save()
  res.json({succes:true})
})

module.exports = router

