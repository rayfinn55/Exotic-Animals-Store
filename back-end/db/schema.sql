DROP DATABASE IF EXISTS animal_shop;
CREATE DATABASE animal_shop;

\c animal_shop

CREATE TABLE animalCatalog (
    id SERIAL PRIMARY KEY, 
    animal_name Text,
    class TEXT,
    location TEXT,
    description TEXT,
    price INT,
    stock BOOLEAN
);
