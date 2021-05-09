const express = require('express');
const port = process.env.PORT
const app = express();
var router = express.Router()
var cors = require('cors')

app.use(cors())

const { initializeUserbase } = require('./IntialiseDB/UserbaseDB.js');
initializeUserbase()

const cart = require("./Routes/cart.js");
app.use("/cart", cart)


const products = require("./Routes/Products.js")
app.use("/products", products)

const users = require("./Routes/users.js")
app.use("/users", users)

app.get('/', (req, res) => {
  res.send('hello  backend app !')
});

app.listen(port || 3000, () => {
  console.log('server started');
});