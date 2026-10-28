// Worked examples: Copying Nested Arrays
// Run this file by itself; examples run in lesson order.

const savedSkills = ['HTML', 'CSS'];
const draftSkills = [...savedSkills];

draftSkills[0] = 'JavaScript';

console.log(savedSkills); // ['HTML', 'CSS']
console.log(draftSkills); // ['JavaScript', 'CSS']

const originalTeams = [
  ['Sara', 'Noor'],
  ['Ali', 'Lina']
];

const shallowTeams = [...originalTeams];

console.log(shallowTeams === originalTeams); // false
console.log(shallowTeams[0] === originalTeams[0]); // true

shallowTeams[0][0] = 'Mariam';

console.log(originalTeams[0][0]); // Mariam
console.log(shallowTeams[0][0]); // Mariam

const independentTeams = structuredClone(originalTeams);

independentTeams[0][1] = 'Huda';

console.log(originalTeams[0]); // ['Mariam', 'Noor']
console.log(independentTeams[0]); // ['Mariam', 'Huda']
console.log(independentTeams[0] === originalTeams[0]); // false

const jsonTeams = JSON.parse(JSON.stringify(originalTeams));

console.log(jsonTeams[0]); // ['Mariam', 'Noor']
