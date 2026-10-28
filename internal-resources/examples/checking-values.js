// Worked examples: Checking for Values
// Run this file by itself; examples run in lesson order.

const registeredNames = ['Sara', 'Ali', 'Noor'];

console.log(registeredNames.includes('Ali')); // true
console.log(registeredNames.includes('Lina')); // false

console.log(registeredNames.includes('ali')); // false

const nameToCheck = 'Noor';

if (registeredNames.includes(nameToCheck)) {
  console.log('This name is already registered.');
}

const newName = 'Lina';

if (!registeredNames.includes(newName)) {
  registeredNames.push(newName);
}

console.log(registeredNames);
// ['Sara', 'Ali', 'Noor', 'Lina']

const bookings = ['Sara', '', 'Ali', ''];
const hasSpace = bookings.includes('');
const isFull = !bookings.includes('');

console.log(bookings.length); // 4
console.log(hasSpace); // true
console.log(isFull); // false
