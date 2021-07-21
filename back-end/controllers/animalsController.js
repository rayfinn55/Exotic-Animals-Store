const express = require('express');
const animals = express.Router();
const { getAllAnimals, getAnimal, createNewAnimal } = require('../queries/animals');
log = console.log

// INDEX
animals.get('/', async (req, res) => {
  const allAnimals = await getAllAnimals();
  res.json(allAnimals);
});

// SHOW
animals.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await getAnimal(id);
    if (animal['id']) {
      res.json(animal);
    } else {
      throw `No animal found at index ${id}`
    }
  } catch (e) {
    res.status(404).send({ error: 'Resource not found', message: e })
  }
});

// CREATE
animals.post('/', async (req, res) => {
  try {
    const animal = await createNewAnimal(req.body);
    if (animal['id']) {
      res.json(animal);
    } else {
      log(`Database: ${animal}`)
    }
  } catch (e) {
    res.status(404).json({ error: e})
  }
});



module.exports = animals