// Worked examples: Reading from the End with at()
// Run this file by itself; examples run in lesson order.

const workshops = ['Web Design', 'JavaScript', 'Data Analysis'];

console.log(workshops.at(0)); // Web Design
console.log(workshops.at(1)); // JavaScript

console.log(workshops.at(-1)); // Data Analysis
console.log(workshops.at(-2)); // JavaScript

console.log(workshops[-1]); // undefined
console.log(workshops.at(20)); // undefined
