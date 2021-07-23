DROP DATABASE IF EXISTS deeho1lp4038pr;
CREATE DATABASE deeho1lp4038pr;

\c deeho1lp4038pr;

CREATE TABLE animal_catalog (
    id SERIAL PRIMARY KEY, 
    animal_name TEXT,
    class TEXT,
    location TEXT,
    description TEXT,
    price INT,
    stock BOOLEAN,
    img TEXT
);
