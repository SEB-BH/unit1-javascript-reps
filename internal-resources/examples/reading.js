// Worked examples: Reading Values and Indexes
// Run this file by itself; examples run in lesson order.

const workshops = ['Web Design', 'JavaScript', 'Data Analysis'];

console.log(workshops[0]); // Web Design
console.log(workshops[1]); // JavaScript
console.log(workshops[2]); // Data Analysis

const secondWorkshop = workshops[1];

console.log(secondWorkshop); // JavaScript

const selectedIndex = 2;
const selectedWorkshop = workshops[selectedIndex];

console.log(selectedWorkshop); // Data Analysis

console.log(workshops.length); // 3

const lastIndex = workshops.length - 1;
const lastWorkshop = workshops[lastIndex];

console.log(lastIndex); // 2
console.log(lastWorkshop); // Data Analysis

console.log(workshops[workshops.length - 1]); // Data Analysis

console.log(workshops[3]); // undefined

const emptyList = [];
console.log(emptyList.length); // 0
console.log(emptyList[0]); // undefined
