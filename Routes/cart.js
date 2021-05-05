const bodyParser = require('body-parser')
const express = require('express')
var router = express.Router()
const cors = require("cors")
const {Cart} = require("../models/Cart.model.js")



// app.use(bodyParser.json())

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
    console.log(cart.itemsInCart)
    cart.itemsInCart= cart.itemsInCart.concat(addedItem)
    await cart.save()
    res.json({succes:true,message:"Cart updated"})
})

router.route("/")
.get((req,res)=>{
  res.json({succes:true,message:"Cart",cart})
})
.post((req,res)=>{
  const test = req.body
  const {userCredntials}= test
  // const userPassword=userCredntials
  console.log(test.password)
  console.log(test.username)
  console.log(userCredntials)
  res.json(test)
})

module.exports = router

