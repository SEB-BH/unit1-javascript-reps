// Checking for Values

const savedCodes = ['BH-101', 'BH-204'];
const codeToSave = 'BH-305';

console.log(savedCodes.includes('BH-204')); // true

if (!savedCodes.includes(codeToSave)) {
  savedCodes.push(codeToSave);
}

if (!savedCodes.includes(codeToSave)) {
  savedCodes.push(codeToSave);
}

console.log(savedCodes); // ['BH-101', 'BH-204', 'BH-305']

const appointmentSlots = ['', 'Sara', ''];
console.log(appointmentSlots.includes('')); // true
