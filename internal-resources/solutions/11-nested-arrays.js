// Arrays Inside Arrays

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
