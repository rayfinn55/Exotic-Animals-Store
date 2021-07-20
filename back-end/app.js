// DEPENDENCIES
const express = require("express");
const cors = require("cors");
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

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).send('Page not found!')
});


// EXPORT
module.exports = app;
