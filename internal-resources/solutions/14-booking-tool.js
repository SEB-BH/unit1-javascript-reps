// Final Practice: Parts A–C

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
