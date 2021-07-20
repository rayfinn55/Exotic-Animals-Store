const express = require('express');
const animals = express.Router();
const { getAllAnimals } = require('../queries/animals');

// INDEX
animals.get('/', async (req, res) => {
  const allAnimals = await getAllAnimals()
  console.log(allAnimals)
  console.log('hey')
  res.json(allAnimals)
});
console.log('hey')
console.log(getAllAnimals)
console.log(animals)
// SHOW


module.exports = animals