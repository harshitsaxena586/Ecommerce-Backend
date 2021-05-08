const bodyParser = require('body-parser')
const express = require('express')
var router = express.Router()
const cors = require("cors")
const { Product } = require('../models/Product.model')


// app.use(bodyParser.json())
const AllProducts = [{
  name: "Nvidia RTX 3080",
  img: "https://ik.imagekit.io/harshit/MainFrame_ivSzElzb1.png",
  description: "lorem ipusum",highlights:"lorem imspum",
  price: 64000,
  shipping:0,
  inStock: true,
  type: "graphics card"
},
{
  name: "Nvidia RTX 3070",
  img: "https://ik.imagekit.io/harshit/RTX_3070__KPu_TvMZ.png",
  description: "lorem ipusum",
  highlights:"8GB Memory ",
  price: 45000,
  shipping:0,
  inStock: true,
  type: "graphics card"
}, {
  name: "Nzxt H510 ",
  img: "https://ik.imagekit.io/harshit/NZXT_h510_jin4J2M4s.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 36000,
  shipping:500,
  inStock: true,
  type: "case"
}, {
  name: "Lian li O11 ",
  img: "https://ik.imagekit.io/harshit/Lian_li_o11_q34_HmCnD.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 15000,
  shipping:500,
  inStock: true,
  type: "case"
}, {
  name: "Thermal take ",
  img: "https://ik.imagekit.io/harshit/Thermeltake_case_9dLO2KcPU.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 26000,
  shipping:500,
  inStock: true,
  type: "case"
}, {
  name: "AMD Ryzen 5900X",
  img: "https://ik.imagekit.io/harshit/Ryzen_9_5900x_l-ZQKMRSC.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 60000,
  shipping:0,
  inStock: true,
  type: "proccessor"
},
{
  name: "NZXT Kraken X73",
  img: "https://ik.imagekit.io/harshit/Nzxt_Krake_x73__T3bXCQbEx.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 12000,
  shipping:0,
  inStock: true,
  type: "aio"
}, {
  name: "Samsung evo 970",
  img: "https://ik.imagekit.io/harshit/Samsung_Evo_J0WbL1QFl.png",
  description: "lorem ipusum",
  highlights:" 1Tb Nvme SSD",
  price: 10000,
  shipping:0,
  inStock: true,
  type: "storage"
}, {
  name: "Nvidia RTX 3090",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 120000,
  shipping:0,
  inStock: true,
  type: "graphics card"
}, {
  name: "Cooler master mesh td500",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"",
  price: 8550,
  shipping:500,
  inStock: true,
  type: "Cabinet"
}, {
  name: "AMD Ryzen 5800X",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 50000,
  shipping:0,
  inStock: true,
  type: "proccessor"
}, {
  name: "AMD Ryzen 3600X",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 18000,
  shipping:0,
  inStock: true,
  type: "proccessor"
}, {
  name: "Intel i9 10900k",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 39000,
  shipping:0,
  inStock: true,
  type: "proccessor"
}, {
  name: "Asus 3080 STRIX",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 85000,
  shipping:0,
  inStock: true,
  type: "graphics card"
},  {
  name: "Msi Forge 100R",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 6000,
  shipping:5000,
  inStock: true,
  type: "case"
}, {
  name: "Intel i5 10400f",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 12000,
  shipping:0,
  inStock: true,
  type: "processor"
}, {
  name: "Nvidia RTX 3080",
  img: "https://ik.imagekit.io/harshit/Coming_soon_b0ZDxYm8p.png",
  description: "lorem ipusum",
  highlights:"lorem imspum",
  price: 64000,
  shipping:0,
  inStock: true,
  type: "graphics card"
},

]

// AllProducts.map((item)=> {item = new Product(item) ,item.save().then((savedProd) => console.log(savedProd))})


// testProduct2.save().then((savedProd) => console.log(savedProd))

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

