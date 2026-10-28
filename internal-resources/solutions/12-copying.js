// Copying Arrays

const savedSkills = ['HTML', 'CSS'];
const draftSkills = [...savedSkills];
draftSkills.push('JavaScript');

const firstSkill = savedSkills.slice(0, 1);

console.log(savedSkills); // ['HTML', 'CSS']
console.log(draftSkills); // ['HTML', 'CSS', 'JavaScript']
console.log(firstSkill); // ['HTML']
