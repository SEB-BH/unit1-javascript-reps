// Worked examples: Selecting a Random Item
// Run this file by itself; examples run in lesson order.

const reviewTopics = ['HTML', 'CSS', 'JavaScript', 'Accessibility'];

const randomDecimal = Math.random();

console.log(randomDecimal);

const scaledNumber = randomDecimal * reviewTopics.length;

console.log(scaledNumber);

console.log(Math.floor(2.52)); // 2
console.log(Math.floor(0.8)); // 0

const exampleIndex = Math.floor(scaledNumber);

console.log(exampleIndex);

const exampleTopic = reviewTopics[exampleIndex];

console.log(exampleTopic);

const randomIndex = Math.floor(Math.random() * reviewTopics.length);
const selectedTopic = reviewTopics[randomIndex];

console.log(randomIndex, selectedTopic);

const availableTopics = [];

if (availableTopics.length > 0) {
  const topicIndex = Math.floor(Math.random() * availableTopics.length);
  console.log(availableTopics[topicIndex]);
} else {
  console.log('No topics are available.');
}
