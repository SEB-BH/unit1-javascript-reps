// Worked examples: Copying Arrays
// Run this file by itself; examples run in lesson order.

const originalTasks = ['Plan', 'Build', 'Test'];
const sharedTasks = originalTasks;

sharedTasks[0] = 'Design';

console.log(originalTasks[0]); // Design
console.log(sharedTasks[0]); // Design
console.log(originalTasks === sharedTasks); // true

const savedTasks = ['Plan', 'Build', 'Test'];
const draftTasks = [...savedTasks];

draftTasks[0] = 'Review';

console.log(savedTasks); // ['Plan', 'Build', 'Test']
console.log(draftTasks); // ['Review', 'Build', 'Test']
console.log(savedTasks === draftTasks); // false

const anotherDraft = savedTasks.slice();

console.log(anotherDraft); // ['Plan', 'Build', 'Test']
console.log(anotherDraft === savedTasks); // false

const firstTwoTasks = savedTasks.slice(0, 2);

console.log(firstTwoTasks); // ['Plan', 'Build']
console.log(savedTasks); // ['Plan', 'Build', 'Test']

const remainingTasks = savedTasks.slice(1);

console.log(remainingTasks); // ['Build', 'Test']

const projectTasks = ['Kickoff', ...savedTasks, 'Launch'];

console.log(projectTasks);
// ['Kickoff', 'Plan', 'Build', 'Test', 'Launch']
