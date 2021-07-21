// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const animalsController = require('./controllers/animalsController')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get('/', (req, res) => {
  res.send("Welcome to Exotic Animals!");
});

app.use('/animals', animalsController);


// EXPORT
module.exports = app;
