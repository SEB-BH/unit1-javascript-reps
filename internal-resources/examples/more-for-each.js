// Worked examples: More Practice with forEach()
// Run this file by itself; examples run in lesson order.

const workshops = ['Web Design', 'Data Analysis'];
const resources = ['JavaScript Guide', 'CSS Notes'];

const logItem = (item) => {
  console.log(item);
};

workshops.forEach(logItem);
resources.forEach(logItem);

workshops.forEach(function (workshop) {
  console.log(workshop);
});

const orderPrices = [2, 4, 6];
let total = 0;

orderPrices.forEach((price) => {
  total = total + price;
});

console.log(total); // 12

orderPrices.forEach((price) => {
  let localTotal = 0;
  localTotal = localTotal + price;
  console.log(localTotal);
});
// Logs 2, then 4, then 6.

// Do not run this line:
// console.log(localTotal); // ReferenceError: localTotal is out of scope.

const methodResult = orderPrices.forEach((price) => {
  return price * 2;
});

console.log(methodResult); // undefined
console.log(orderPrices); // [2, 4, 6]

const productCodes = ['A', '', 'B'];

productCodes.forEach((code) => {
  if (code === '') {
    return;
  }

  console.log(code);
});
// Logs A, then B.
