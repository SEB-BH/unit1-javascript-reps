<h1>
  <span class="headline">Intro to JavaScript Arrays</span>
  <span class="subhead">Practice Answers</span>
</h1>

These are suggested instructor answers. Learners may use another clear approach that meets the requirements. Keep code answers separate from the initial student handout.

Each code block below is self-contained. Runnable copies are in `internal-resources/solutions`. Run one file at a time.

## Setup and Concepts

Setup should log `Ready to learn arrays.` after the message changes.

A suitable Concepts example is an array of delivery locations: `'Manama'`, `'Riffa'`, and `'Muharraq'`. A list keeps the related values together so a program can process them.

## Creating Arrays

Three arrays with clear names and suitable values.

```js
const cities = ['Manama', 'Muharraq', 'Riffa'];
const savedArticles = [];
const prices = [2.5, 8, 12.25];

console.log(cities);
console.log(savedArticles);
console.log(prices);
```

## Reading Values and Indexes

The out-of-range read returns undefined.

```js
const deliveryAreas = ['Manama', 'Riffa', 'Isa Town', 'Muharraq'];

console.log(deliveryAreas[1]); // Riffa
console.log(deliveryAreas.length); // 4
console.log(deliveryAreas[deliveryAreas.length - 1]); // Muharraq

const areaIndex = 2;
console.log(deliveryAreas[areaIndex]); // Isa Town
console.log(deliveryAreas[4]); // undefined
```

## Updating Arrays

The final list contains two books. pop() returns Working with Data.

```js
const books = [];
books.push('Learning JavaScript', 'Web Design Basics');
console.log(books[1]); // Web Design Basics

books[1] = 'Accessible Websites';
books.push('Working with Data');
const removedBook = books.pop();

console.log(books); // ['Learning JavaScript', 'Accessible Websites']
console.log(removedBook); // Working with Data
console.log(books.length); // 2
```

## Checking for Values

Run the guard twice to show that it prevents a duplicate.

```js
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
```

## Looping Through Arrays

Place the added count before both loops so they both process it.

```js
const stockCounts = [8, 3, 12, 1];
stockCounts.push(6);

for (let index = 0; index < stockCounts.length; index++) {
  console.log(index, stockCounts[index]);
}

for (const stockCount of stockCounts) {
  console.log(stockCount);

  if (stockCount < 5) {
    console.log('Low stock');
  }
}
```

## Finding Matches and Controlling Loops

Change 11 to 9 in the starting array and rerun to get false.

```js
const parcelWeights = [2, 4, 11, 3];
let hasHeavyParcel = false;

for (const parcelWeight of parcelWeights) {
  if (parcelWeight > 10) {
    hasHeavyParcel = true;
    break;
  }
}

console.log(hasHeavyParcel); // true

const deliveryNotes = ['Reception desk', '', 'Call on arrival'];

for (const deliveryNote of deliveryNotes) {
  if (deliveryNote === '') {
    continue;
  }
  console.log(deliveryNote);
}
```

## Using forEach()

The displayed number uses index + 1. The actual index remains unchanged.

```js
const departments = ['Design', 'Engineering', 'Support'];

departments.forEach((department) => {
  console.log(department);
});

departments.forEach((department, index) => {
  console.log(index, department);
  console.log(`${index + 1}. ${department}`);
});
```

## Using Indexes Across Arrays

Values in featuredIndexes become positions in productNames.

```js
const productNames = ['Notebook', 'Pen', 'Folder'];
const productPrices = [2.5, 0.5, 1.25];
const featuredIndexes = [0, 2];

productNames.forEach((productName, index) => {
  console.log(`${productName}: ${productPrices[index]} BHD`);
});

for (const productIndex of featuredIndexes) {
  console.log(productNames[productIndex]);
}
// Featured names: Notebook, then Folder.
```

## Turning an Array into Text

The string and original array are separate values.

```js
const skills = ['HTML', 'CSS', 'JavaScript'];
const skillsText = skills.join(' | ');

console.log(skillsText); // HTML | CSS | JavaScript
console.log(skills); // ['HTML', 'CSS', 'JavaScript']
```

## Selecting a Random Item

The fourth task is added in the starting declaration. Selection still uses length.

```js
const dailyTasks = [
  'Review a pull request',
  'Update documentation',
  'Fix a small bug',
  'Write a small test'
];

const randomIndex = Math.floor(Math.random() * dailyTasks.length);
const selectedTask = dailyTasks[randomIndex];

console.log(randomIndex, selectedTask);
```

## Arrays Inside Arrays

For each test, change the starting array values and rerun the whole file. This recalculates the three values and the boolean.

```js
const reviewStatuses = ['ready', '', 'ready', 'ready'];
const selectedChecks = [0, 2, 3];

const firstStatus = reviewStatuses[selectedChecks[0]];
const secondStatus = reviewStatuses[selectedChecks[1]];
const thirdStatus = reviewStatuses[selectedChecks[2]];

const hasMatchingStatuses =
  firstStatus !== '' &&
  firstStatus === secondStatus &&
  firstStatus === thirdStatus;

console.log(hasMatchingStatuses); // true

// Test 2 starting data: ['ready', '', 'waiting', 'ready'] -> false
// Test 3 starting data: ['', '', '', ''] -> false
```

## Copying Arrays

The saved array retains its two original strings.

```js
const savedSkills = ['HTML', 'CSS'];
const draftSkills = [...savedSkills];
draftSkills.push('JavaScript');

const firstSkill = savedSkills.slice(0, 1);

console.log(savedSkills); // ['HTML', 'CSS']
console.log(draftSkills); // ['HTML', 'CSS', 'JavaScript']
console.log(firstSkill); // ['HTML']
```

## Arrays as Application State

This is a self-contained answer to the short task after the worked example.

```js
const initialBookings = ['', '', '', '', '', ''];
let bookings = [...initialBookings];

const resetBookings = () => {
  bookings = [...initialBookings];
};

bookings[1] = 'Lina';
console.log(bookings[1]); // Lina
console.log(bookings.length); // 6

if (bookings[1] === '') {
  bookings[1] = 'Huda';
} else {
  console.log('This slot is already booked.');
}

console.log(bookings[1]); // Lina

resetBookings();

console.log(bookings); // ['', '', '', '', '', '']
console.log(bookings.length); // 6
```

## Final Practice: Parts A–C

Each step runs in order. Recalculate availability after filling the remaining slots.

```js
// Part A: Resource list.
const resources = [];
resources.push('JavaScript Guide', 'Web Accessibility Notes');
console.log(resources[1]); // Web Accessibility Notes

resources[1] = 'CSS Layout Notes';
resources.push('Browser Tools Guide');
const removedResource = resources.pop();

console.log(removedResource); // Browser Tools Guide

resources.forEach((resource, index) => {
  console.log(index, resource);
});

console.log(resources.join(' | '));
// JavaScript Guide | CSS Layout Notes

// Part B: Random review topic.
const topics = ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'Git'];
const randomIndex = Math.floor(Math.random() * topics.length);
console.log(randomIndex, topics[randomIndex]);

// Part C: Booking state.
const slotLabels = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const initialBookings = ['', '', '', '', '', ''];
let bookings = [...initialBookings];

bookings[0] = 'Sara';
bookings[2] = 'Ali';
bookings[5] = 'Noor';

console.log(bookings); // ['Sara', '', 'Ali', '', '', 'Noor']
console.log(bookings.length); // 6

const requestedIndex = 2;
if (bookings[requestedIndex] === '') {
  bookings[requestedIndex] = 'Lina';
} else {
  console.log('This slot is already booked.');
}

bookings.forEach((bookingName, index) => {
  if (bookingName === '') {
    console.log(`${slotLabels[index]}: Available`);
  } else {
    console.log(`${slotLabels[index]}: ${bookingName}`);
  }
});

console.log(bookings.includes('')); // true

bookings[1] = 'Lina';
bookings[3] = 'Huda';
bookings[4] = 'Mariam';

console.log(bookings.includes('')); // false

bookings = [...initialBookings];
console.log(bookings); // ['', '', '', '', '', '']
console.log(bookings.length); // 6

// A new booking leaves the starting template unchanged.
bookings[1] = 'Lina';
console.log(initialBookings); // ['', '', '', '', '', '']
```

## Final Practice: Part D

The first group's statuses are done, done, done. Change starting values and rerun for the other cases.

```js
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
```

## Optional: at()

Both ways to read the last file return README.md.

```js
const recentFiles = ['index.html', 'app.js', 'styles.css', 'README.md'];

console.log(recentFiles.at(-1)); // README.md
console.log(recentFiles.at(-2)); // styles.css
console.log(recentFiles[recentFiles.length - 1]); // README.md
```

## Optional: Adding and Removing at the Start

The first code is removed and stored in activeCode.

```js
const supportQueue = ['BH-201', 'BH-202'];
supportQueue.unshift('BH-200');
supportQueue.push('BH-203');

const activeCode = supportQueue.shift();

console.log(activeCode); // BH-200
console.log(supportQueue); // ['BH-201', 'BH-202', 'BH-203']
```

## Optional: More Practice with forEach()

The total is created outside the callback, then updated inside it.

```js
const invoiceAmounts = [5, 8, 3];
let invoiceTotal = 0;

invoiceAmounts.forEach((invoiceAmount) => {
  invoiceTotal = invoiceTotal + invoiceAmount;
});

console.log(invoiceTotal); // 16
```

## Optional: Copying Nested Arrays

The shallow copy shares inner arrays. The deep copy has separate inner arrays.

```js
const savedGroups = [['HTML', 'CSS'], ['JavaScript']];
const shallowGroups = [...savedGroups];

shallowGroups[0][0] = 'Accessibility';

console.log(savedGroups); // [['Accessibility', 'CSS'], ['JavaScript']]
console.log(shallowGroups); // [['Accessibility', 'CSS'], ['JavaScript']]

const deepGroups = structuredClone(savedGroups);
deepGroups[0][1] = 'Responsive Design';

console.log(savedGroups); // [['Accessibility', 'CSS'], ['JavaScript']]
console.log(deepGroups); // [['Accessibility', 'Responsive Design'], ['JavaScript']]
```

## Final explanations

- The booking array stores the current value for each of six fixed slots.
- A shared index connects a booking to its time label.
- An indexed update preserves the slot positions and array length.
- Copying the starting array allows a fresh reset while preserving the template.

For the stretch task, accept small functions that perform one clear job. Learners should be able to explain when each function is called and which state it changes.

[Back to instructor guide](./instructor-guide.md)
