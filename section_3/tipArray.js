// let bill = 430;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value = ${
//     bill + tip
//   }`
// );

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(tips);

console.log(total);
