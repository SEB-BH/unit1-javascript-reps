// Selecting a Random Item

const dailyTasks = [
  'Review a pull request',
  'Update documentation',
  'Fix a small bug',
  'Write a small test'
];

const randomIndex = Math.floor(Math.random() * dailyTasks.length);
const selectedTask = dailyTasks[randomIndex];

console.log(randomIndex, selectedTask);
