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

module.exports = {
  getAllAnimals,
}