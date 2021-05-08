const mongoose = require('mongoose');

function initializeUserbase() {
    // Connecting to DB
    mongoose.connect("mongodb+srv://harshit:hellomongo@cluster0.igfzi.mongodb.net/Userbase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
      .then(() => console.log("Userbase successfully connected"))
      .catch(error => console.error("Userbase connection failed...", error))
  } 

  module.exports = { initializeUserbase }

