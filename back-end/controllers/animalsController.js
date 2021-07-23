const express = require('express');
const animals = express.Router();
const { getAllAnimals, getAnimal, createNewAnimal, updateAnimal, deleteAnimal } = require('../queries/animals');
const { errorHandler, NewErrorMessage } = require('../helper');
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
      console.log(`Database: ${animal}`)
    }
  } catch (e) {
    res.status(404).json({ error: e})
  }
});

//UPDATE
animals.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const animal = await updateAnimal(req.body, id);
    if (animal['id']) {
      res.json(animal)
    } else {
      const msg = `animal not added to database: ${JSON.stringify(req.body)}`;
      throw new NewErrorMessage(msg);
    }
  } catch (e) {
    return next (e);
  }
});

//DELETE
animals.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteAnimal(id);
    if (deleted.id) {
      res.json(deleted);
    } else {
      const msg = `Animal not deleted from database: ${id}`;
      throw new NewErrorMessage(msg)
    }
  }catch (e) {
    next (e);
  }
});


//UPDATE
animals.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
		const updatedAnimal = await updateAnimal(id, req.body);
		if (updatedAnimal.id) {
			res.status(200).json(updatedAnimal);
		} else {
			const msg = `animal not added to database: ${JSON.stringify(req.body)}`;
			throw new NewErrorMessage(msg);
		}
  } catch (e) {
		return next(e);
  }
});

animals.use(errorHandler);


module.exports = animals