// Worked examples: Using forEach()
// Run this file by itself; examples run in lesson order.

const tasks = ['Check stock', 'Send invoice', 'Book delivery'];

const logTask = (task) => {
  console.log(task);
};

logTask('Prepare report');
// Prepare report

tasks.forEach(logTask);

tasks.forEach((task) => {
  console.log(task);
});

tasks.forEach((task, index) => {
  console.log(index, task);
});
