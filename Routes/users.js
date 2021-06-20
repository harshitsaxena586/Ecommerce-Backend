const express = require("express");
var router = express.Router();
const { User } = require("../models/User.model.js");
const { Cart } = require("../models/Cart.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.route("/s").post(async (req, res) => {
  const { userName, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ userName, password: hashedPassword });
  await user.save();
  res.json({ success: true });
});

// router.use("/", authHandler);

router.route("/").post(async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName: userName });

  if (!user) {
    res.status(404).json({ error: "userName does not exist" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userName, id: user._id }, process.env.secretKey, {
      expiresIn: "10d",
    });
    res.json({ success: true, token, userId: user.id });
  } else {
    res.status(401).json({ error: "invalid password" });
  }
});

module.exports = router;
