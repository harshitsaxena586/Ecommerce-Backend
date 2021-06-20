const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({ userId: String, itemsInCart: [] });

const Cart = new mongoose.model("cart", CartSchema);

module.exports = { Cart };
