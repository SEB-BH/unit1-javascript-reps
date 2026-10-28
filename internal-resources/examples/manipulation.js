// Worked examples: Updating Arrays
// Run this file by itself; examples run in lesson order.

const tasks = ['Check stock', 'Send invoice', 'Book delivery'];

tasks[1] = 'Email invoice';

console.log(tasks);
// ['Check stock', 'Email invoice', 'Book delivery']

tasks[0] = 'Count stock'; // Allowed: change an item in the existing array.

// Do not run this line:
// tasks = ['Prepare report']; // TypeError: reassigning a const.

tasks.push('Prepare report');

console.log(tasks);
// ['Count stock', 'Email invoice', 'Book delivery', 'Prepare report']

const newLength = tasks.push('Review budget', 'Update calendar');

console.log(newLength); // 6
console.log(tasks.length); // 6

const removedTask = tasks.pop();

console.log(removedTask); // Update calendar
console.log(tasks);
// ['Count stock', 'Email invoice', 'Book delivery', 'Prepare report', 'Review budget']

const noTasks = [];
const removedFromEmpty = noTasks.pop();

console.log(removedFromEmpty); // undefined
console.log(noTasks); // []
