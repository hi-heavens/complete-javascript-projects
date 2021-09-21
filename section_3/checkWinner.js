// Calculate the average of 3 numbers
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const avgOfDolphins = calcAverage(44, 23, 71);
const avgOfKoalas = calcAverage(65, 54, 49);

// Check the winner between 2 scores if the first score is 2ce more than the first
// If not, no team wins
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins! 😑");
  }
};

checkWinner(avgOfDolphins, avgOfKoalas);

// Testing with the second Test parameters
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
