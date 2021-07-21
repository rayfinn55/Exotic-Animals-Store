const express = require('express');
const animals = express.Router();
const { getAllAnimals } = require('../queries/animals.js');


// INDEX
animals.get('/', async (req, res) => {
  try {
    const allAnimals = await getAllAnimals()
    res.json(allAnimals)
  } catch (c) {
    console.log('Error in animalsController: ', c)
  }
});


// SHOW



module.exports = animals