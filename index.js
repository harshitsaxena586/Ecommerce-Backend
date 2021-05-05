const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors")

const app = express();
var router = express.Router()
app.use(cors())

const users = require("./Routes/users.js")

app.use("/users", users)

const products = require("./Routes/Products.js")
app.use("/products", products)

const cart = require("./Routes/cart.js")
app.use("/cart", cart)

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('hello backend app!')
});

app.listen(3000, () => {
  console.log('server started');
});