"use strict";

const numberOfFilms = +prompt("Скільки фільмів ти бачив?", "кількість");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const a = prompt("Останній фільм ти бачив?", "Леон");
const b = prompt("Оцінка фільма?", "1-5");
const c = prompt("Останній фільм ти бачив?", "Леон");
const d = prompt("Оцінка фільма?", "1-5");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
