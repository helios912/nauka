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

for (let i = 0; i < 2; i++) {
  const a = prompt("Останній фільм ти бачив?", "Леон");
  const b = prompt("Оцінка фільма?", "1-5");
  if (a != null && b != null && a != " " && b != " " && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log(error);
    i--;
  }
}
if (personalMovieDB.count < 10) {
  console.log("Malo");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log(Norm);
} else if (personalMovieDB.count >= 30) {
  console.log("kinoman");
} else {
  console.log("error");
}

console.log(personalMovieDB);
