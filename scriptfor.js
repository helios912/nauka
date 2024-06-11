const numb = +prompt("число", "");
function returnNeighboringNumbers(num) {
  return console.log([num - 1, num, num + 1]);
}

returnNeighboringNumbers(5);
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
