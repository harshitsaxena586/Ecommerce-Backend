const express = require("express");
var router = express.Router();

const { Cart } = require("../models/Cart.model.js");

router.route("/").get(async (req, res) => {
  let userId = req.query.userId;
  let cart = await Cart.findOne({ userId });
  cart.itemsInCart = [];
  await cart.save();
  res.redirect("https://jainwin-pc-store.vercel.app/");
});
module.exports = router;
