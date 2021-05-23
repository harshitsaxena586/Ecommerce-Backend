const express = require('express')
var router = express.Router()
const {User} = require("../models/User.model.js")
const {Cart} = require("../models/Cart.model.js")


const authHandler= async (req,res,next)=>{
  const clientCredentials = req.body
  try {
    const [authUser] = await User.find({userName:clientCredentials.username})
console.log(clientCredentials)
console.log(authUser)
  if (authUser.password===clientCredentials.password){
    res.json({success:true,message:"welcome user "})
  }
  } catch (error) {
    console.log(error)
  }
  (res.status(401).json({succes:false,message:"wrong Password"})) 
  next()
}


router.route("/s")
.post(async(req,res)=>{
  const clientCredentials = req.body
  const NewUser = new User(clientCredentials)
  const savedUser = await NewUser.save()
  res.json({success:true,savedUser,})
  console.log(clientCredentials)
  const NewUserCart = new Cart({userName:clientCredentials.userName})
  const savedCart = await NewUserCart.save()
})


router.use("/",authHandler)

router.route("/")
.post((req,res)=>{
})


module.exports = router

