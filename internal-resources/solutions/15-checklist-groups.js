// Final Practice: Part D

const checklistStatuses = ['done', '', 'done', 'done', 'waiting', ''];
const checklistGroups = [
  [0, 2, 3],
  [1, 4, 5]
];

const group = checklistGroups[0];
const firstStatus = checklistStatuses[group[0]];
const secondStatus = checklistStatuses[group[1]];
const thirdStatus = checklistStatuses[group[2]];

const hasMatchingStatuses =
  firstStatus !== '' &&
  firstStatus === secondStatus &&
  firstStatus === thirdStatus;

console.log(hasMatchingStatuses); // true

// Changing one selected starting value to 'waiting' should produce false.
// Starting with three empty selected values should also produce false.
