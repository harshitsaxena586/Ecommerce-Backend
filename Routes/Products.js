const express = require("express");
var router = express.Router();
const { Product } = require("../models/Product.model");

router
  .route("/")
  .get(async (req, res) => {
    const products = await Product.find({});
    res.json({ success: true, products });
  })
  .post((req, res) => {});

module.exports = router;
