// Worked examples: Finding Matches and Controlling Loops
// Run this file by itself; examples run in lesson order.

const orderTotals = [12, 25, 8, 32, 17];
let hasLargeOrder = false;

for (let index = 0; index < orderTotals.length; index++) {
  const orderTotal = orderTotals[index];

  if (orderTotal >= 30) {
    hasLargeOrder = true;
    break;
  }
}

console.log(hasLargeOrder); // true

console.log(orderTotals.includes(30)); // false

const contactNames = ['Sara', '', 'Ali', 'Noor'];

for (const contactName of contactNames) {
  if (contactName === '') {
    continue;
  }

  console.log(contactName);
}
