// Optional: Copying Nested Arrays

const savedGroups = [['HTML', 'CSS'], ['JavaScript']];
const shallowGroups = [...savedGroups];

shallowGroups[0][0] = 'Accessibility';

console.log(savedGroups); // [['Accessibility', 'CSS'], ['JavaScript']]
console.log(shallowGroups); // [['Accessibility', 'CSS'], ['JavaScript']]

const deepGroups = structuredClone(savedGroups);
deepGroups[0][1] = 'Responsive Design';

console.log(savedGroups); // [['Accessibility', 'CSS'], ['JavaScript']]
console.log(deepGroups); // [['Accessibility', 'Responsive Design'], ['JavaScript']]
