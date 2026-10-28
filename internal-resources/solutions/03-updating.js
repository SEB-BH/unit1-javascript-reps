// Updating Arrays

const books = [];
books.push('Learning JavaScript', 'Web Design Basics');
console.log(books[1]); // Web Design Basics

books[1] = 'Accessible Websites';
books.push('Working with Data');
const removedBook = books.pop();

console.log(books); // ['Learning JavaScript', 'Accessible Websites']
console.log(removedBook); // Working with Data
console.log(books.length); // 2
