// Worked examples: Adding and Removing at the Start
// Run this file by itself; examples run in lesson order.

const waitingNames = ['Sara', 'Ali'];

const queueLength = waitingNames.unshift('Noor');

console.log(waitingNames); // ['Noor', 'Sara', 'Ali']
console.log(queueLength); // 3

const nextName = waitingNames.shift();

console.log(nextName); // Noor
console.log(waitingNames); // ['Sara', 'Ali']
