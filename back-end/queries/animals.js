// DEPENDENCIES
const db = require('../db/dbConfig');

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
    const newAnimal = await db.one('INSERT INTO animal_catalog (animal_name, class, location, description, price, stock) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
    [animal.animal_name, animal.class, animal.location, animal.description, animal.price, animal.stock, animal.img]);
      return newAnimal
  } catch (e) {
    return e
  }
}

//DELETE
const deleteAnimal = async(id) => {
  try {
    return await db.one('DELETE FROM animal_catalog WHERE id=$1 RETURNING *', id);
  } catch (e) {
    return e
  }
};

//UPDATE
const updateAnimal = async (id, animal) => {
  try {
    const updatedAnimal = await db.one(
      'UPDATE animal_catalog SET animal_name=$1, class=$2, location=$3, description=$4, price=$5, stock=$6, img=$7 WHERE id=$8 RETURNING *',
    [animal.animal_name, animal.class, animal.location, animal.description, animal.price, animal.stock, animal.img, id]);
    return updatedAnimal
  } catch (e) {
    return e
  }
};


module.exports = {
  getAllAnimals,
  getAnimal,
  createNewAnimal,
  deleteAnimal,
  updateAnimal
};