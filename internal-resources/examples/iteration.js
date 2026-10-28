// Worked examples: Looping Through Arrays
// Run this file by itself; examples run in lesson order.

const tasks = ['Check stock', 'Send invoice', 'Book delivery'];

for (let index = 0; index < tasks.length; index++) {
  console.log(tasks[index]);
}

for (let index = 0; index < tasks.length; index++) {
  console.log(index, tasks[index]);
}

for (let index = 0; index < tasks.length; index++) {
  console.log(`${index + 1}. ${tasks[index]}`);
}

for (const task of tasks) {
  console.log(task);
}
