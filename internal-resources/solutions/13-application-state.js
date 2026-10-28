// Arrays as Application State

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
