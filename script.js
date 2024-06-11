"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Скільки фільмів ти бачив?", "кількість");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ти бачив?", "кількість");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Malo");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log(Norm);
  } else if (personalMovieDB.count >= 30) {
    console.log("kinoman");
  } else {
    console.log("error");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр під номером${i}`);
  }
}
console.log(personalMovieDB);
