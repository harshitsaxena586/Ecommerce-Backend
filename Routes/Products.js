const bodyParser = require('body-parser')
const express = require('express')
var router = express.Router()
const cors = require("cors")
const { Product } = require('../models/Product.model')

router.use(cors())

router.use(bodyParser.json())

router.route("/")
.get(async(req,res)=>{
  const products= await Product.find({})
  res.json({success:true,products})
})
.post((req,res)=>{
  
})

module.exports = router

