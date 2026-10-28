// Worked examples: Arrays as Application State
// Run this file by itself; examples run in lesson order.

const slotLabels = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const initialBookings = ['', '', '', '', '', ''];
let bookings = [...initialBookings];

bookings[0] = 'Noor';
bookings[2] = 'Sara';
bookings[5] = 'Ali';

console.log(bookings);
// ['Noor', '', 'Sara', '', '', 'Ali']
console.log(bookings.length); // 6

const requestedIndex = 2;
const requestedName = 'Lina';

if (bookings[requestedIndex] === '') {
  bookings[requestedIndex] = requestedName;
  console.log('Booking saved.');
} else {
  console.log('This slot is already booked.');
}

const hasAvailableSlot = bookings.includes('');
const isFullyBooked = !bookings.includes('');

console.log(hasAvailableSlot); // true
console.log(isFullyBooked); // false

bookings.forEach((bookingName, index) => {
  const slotLabel = slotLabels[index];

  if (bookingName === '') {
    console.log(`${slotLabel}: Available`);
  } else {
    console.log(`${slotLabel}: ${bookingName}`);
  }
});

const resetBookings = () => {
  bookings = [...initialBookings];
};

resetBookings();

console.log(bookings); // ['', '', '', '', '', '']
console.log(bookings.length); // 6
console.log(initialBookings); // ['', '', '', '', '', '']
