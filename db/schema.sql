DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movie (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(50)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  review TEXT,
  FOREIGN KEY (movie_id)
  REFERENCES movie(id)
  ON DELETE SET NULL
);
