use movie_db;

SELECT * FROM movie;

SELECT * FROM reviews;

-- -- takes out extra id and renames headings as appropriate
SELECT movie.id, movie.movie_name AS movie, reviews.review AS review
FROM reviews 
JOIN movie
ON reviews.movie_id = movie.id;

-- INSERT INTO movie (movie_name) VALUES ('Deadpool');

-- SELECT * FROM movie;

-- UPDATE reviews SET review=('So Fucking Funny') WHERE movie_id=3;

-- SELECT * FROM reviews;

-- DELETE FROM movie WHERE id=1;

-- SELECT * FROM movie;