// Worked examples: Using Indexes Across Arrays
// Run this file by itself; examples run in lesson order.

const attendeeNames = ['Sara', 'Ali', 'Noor'];
const attendanceStatuses = ['present', 'absent', 'present'];

const selectedIndex = 1;

console.log(attendeeNames[selectedIndex]); // Ali
console.log(attendanceStatuses[selectedIndex]); // absent

attendeeNames.forEach((attendeeName, index) => {
  const attendanceStatus = attendanceStatuses[index];
  console.log(`${attendeeName}: ${attendanceStatus}`);
});

const taskNames = ['Check stock', 'Send invoice', 'Book delivery'];
const priorityIndexes = [2, 0];

const firstPriorityIndex = priorityIndexes[0];
const firstPriorityTask = taskNames[firstPriorityIndex];

console.log(firstPriorityIndex); // 2
console.log(firstPriorityTask); // Book delivery

for (const taskIndex of priorityIndexes) {
  console.log(taskNames[taskIndex]);
}
