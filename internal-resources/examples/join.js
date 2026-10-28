// Worked examples: Turning an Array into Text
// Run this file by itself; examples run in lesson order.

const routeStops = ['Manama', 'Isa Town', 'Riffa'];
const defaultRouteText = routeStops.join();

console.log(defaultRouteText);
// Manama,Isa Town,Riffa

const routeText = routeStops.join(' → ');

console.log(routeText);
// Manama → Isa Town → Riffa

const nameLetters = ['S', 'a', 'r', 'a'];
const fullName = nameLetters.join('');

console.log(fullName); // Sara

console.log(routeStops);
// ['Manama', 'Isa Town', 'Riffa']

console.log(typeof routeText); // string
