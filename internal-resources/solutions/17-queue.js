// Optional: Adding and Removing at the Start

const supportQueue = ['BH-201', 'BH-202'];
supportQueue.unshift('BH-200');
supportQueue.push('BH-203');

const activeCode = supportQueue.shift();

console.log(activeCode); // BH-200
console.log(supportQueue); // ['BH-201', 'BH-202', 'BH-203']
