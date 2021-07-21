// DEPENDENCIES
const db = require('../db/dbConfig.js');

const getAllAnimals = async () => {
  try {
    const allAnimals = await db.any('SELECT * FROM animal_catalog');
    return allAnimals
  } catch (e) {
    return e
  }
};

// SHOW
const getAnimal = async (id) => {
  try {
    const oneAnimal = await db.one('SELECT * FROM animal_catalog WHERE id=$1', id);
    return oneAnimal
  } catch (e) {
    return e
  }
};

// CREATE
const createNewAnimal = async (animal) => {
  try {
    const newAnimal = await db.one('INSERT INTO animal_catalog (animal_name, class, location, description, price, stock) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
    [animal.animal_name, animal.class, animal.location, animal.description, animal.price, animal.stock]);
      return newAnimal
  } catch (e) {
    return e
  }
}

module.exports = {
  getAllAnimals,
  getAnimal,
  createNewAnimal,
}