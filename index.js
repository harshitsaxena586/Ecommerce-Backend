const express = require('express');
const port = process.env.PORT
const app = express();
var router = express.Router()
var cors = require('cors')
const bodyParser = require('body-parser')
const users = require("./Routes/users.js")
const products = require("./Routes/Products.js")
const createSession=require("./Routes/create-checkout-session")
const cart = require("./Routes/cart.js");

app.use(cors())
app.use(bodyParser.json())

const { initializeUserbase } = require('./IntialiseDB/UserbaseDB.js');
initializeUserbase()

app.use("/cart", cart)

app.use("/products", products)

app.use("/users", users)

app.use("/create-checkout-session",createSession)

app.get('/', (req, res) => {
  res.send('hello  backend app !')
});

app.listen(port || 3000, () => {
  console.log('server started');
});