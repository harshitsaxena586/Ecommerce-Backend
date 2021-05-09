require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors")
const port = process.env.PORT || 3000;
const app = express();
app.use(cors())

const { initializeUserbase } = require('./IntialiseDB/UserbaseDB.js');
initializeUserbase()

const users = require("./Routes/users.js")
app.use("/users", users)


const products = require("./Routes/products.js")
app.use("/products", products)

const cart = require("./Routes/cart.js");
app.use("/cart", cart)

app.get('/', (req, res) => {
  res.send('hello backend app!')
});

app.listen(port, () => {
  console.log('server started');
});