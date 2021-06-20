const express = require("express");
var router = express.Router();
const { Cart } = require("../models/Cart.model.js");
const { Product } = require("../models/Product.model.js");

const checkCartExists = async (req, res, next) => {
  const { userId } = req;
  const cart = await Cart.findOne({ userId: userId });
  if (cart) {
    req.cart = cart;
    next();
  } else {
    newCart = new Cart({ userId: userId });
    savedCart = await newCart.save();
    req.cart = savedCart;
    next();
  }
};

router.use(checkCartExists);

router
  .route("/")
  .get((req, res) => {
    const { cart } = req;
    res.json({ succes: true, cart });
  })
  .post(async (req, res) => {
    let { cart } = req;
    const addedItem = req.body;
    cart.itemsInCart = cart.itemsInCart.concat(addedItem);
    await cart.save();
    res.json({ succes: true, message: "Cart updated" });
  });

router
  .route("/del")
  .get((req, res) => {
    res.json({ succes: true, message: "Cart delete api" });
  })
  .post(async (req, res) => {
    let { cart } = req;
    const { itemId } = req.body;
    cart.itemsInCart = cart.itemsInCart.filter(
      ({ item }) => item._id != itemId
    );
    try {
      await cart.save();
      res.json({ succes: true });
    } catch (error) {
      res.json({ succes: false, msg: "failed to update cart", error: error });
    }
  });

module.exports = router;
