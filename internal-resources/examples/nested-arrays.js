// Worked examples: Arrays Inside Arrays
// Run this file by itself; examples run in lesson order.

const teams = [
  ['Sara', 'Noor'],
  ['Ali', 'Lina']
];

console.log(teams.length); // 2 teams
console.log(teams[0]); // ['Sara', 'Noor']
console.log(teams[1]); // ['Ali', 'Lina']

const firstTeam = teams[0];
const secondMember = firstTeam[1];

console.log(secondMember); // Noor

console.log(teams[0][1]); // Noor

const inspectionStatuses = ['pass', '', 'pass', 'pass', 'fail', ''];

const checkGroups = [
  [0, 2, 3],
  [1, 4, 5]
];

const group = checkGroups[0];

console.log(group); // [0, 2, 3]

const firstCheckIndex = group[0];
const firstStatus = inspectionStatuses[firstCheckIndex];

console.log(firstCheckIndex); // 0
console.log(firstStatus); // pass

const secondStatus = inspectionStatuses[group[1]];
const thirdStatus = inspectionStatuses[group[2]];

console.log(secondStatus); // pass
console.log(thirdStatus); // pass

const hasMatchingStatuses =
  firstStatus !== '' &&
  firstStatus === secondStatus &&
  firstStatus === thirdStatus;

console.log(hasMatchingStatuses); // true
