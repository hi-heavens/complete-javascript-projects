// let dolphins = 96 + 108 + 89;
// let koalas = 88 + 91 + 110;

// let dolphinsAverage = dolphins / 3;
// let koalasAverage = koalas / 3;

// if (dolphinsAverage < koalasAverage) {
//   console.log(
//     `The winner is Koalas with average score of ${koalasAverage}. Cheers!`
//   );
// } else if (dolphinsAverage === koalasAverage) {
//   console.log(`This is a draw. Wehdone!`);
// } else if (koalasAverage < dolphinsAverage) {
//   console.log(
//     `The winner is Dolphins with average score of ${dolphinsAverage}. Cheers!`
//   );
// }

let dolphins2 = 97 + 112 + 80;
let koalas2 = 109 + 95 + 50;
let minimumScore = 100;

let dolphinsAverage2 = dolphins2 / 3;
let koalasAverage2 = koalas2 / 3;

if (dolphinsAverage2 < koalasAverage2 && koalasAverage2 >= minimumScore) {
  console.log(
    `The winner is Koalas with average score of ${koalasAverage2}. Cheers!`
  );
} else if (
  koalasAverage2 < dolphinsAverage2 &&
  dolphinsAverage2 >= minimumScore
) {
  console.log(
    `The winner is Dolphins with average score of ${dolphinsAverage2}. Cheers!`
  );
} else if (
  koalasAverage2 === dolphinsAverage2 &&
  koalasAverage2 >= minimumScore &&
  dolphinsAverage2 >= minimumScore
) {
  console.log(`This is a draw. Wehdone!`);
} else {
  console.log(`No one wins the trophy! 😥`);
}
