const bodyParser = require('body-parser')
const express = require('express')
var router = express.Router()
const cors = require("cors")

// app.use(bodyParser.json())

router.use(cors())

router.use(bodyParser.json())
router.route("/")
.get((req,res)=>{
  res.json({succes:true,message:"prodcuts"})
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

