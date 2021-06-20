const express = require("express");
const port = process.env.PORT;
const app = express();
var router = express.Router();
var cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./Routes/users.js");
const products = require("./Routes/Products.js");
const createSession = require("./Routes/create-checkout-session");
const cart = require("./Routes/cart.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(bodyParser.json());

const { initializeUserbase } = require("./IntialiseDB/UserbaseDB.js");
initializeUserbase();

app.use("/products", products);

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("hello  backend app !");
});

const authTokenHandler = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    let decoded = await jwt.verify(token, process.env.secretKey);
    const { userName, id } = decoded;
    req.userName = userName;
    req.userId = id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth token invalid" });
  }
};

app.use(authTokenHandler);

app.use("/cart", cart);

app.get("/test", (req, res) => {
  res.json({ success: true });
});

app.use("/create-checkout-session", createSession);

app.listen(port || 4000, () => {
  console.log("server started");
});
