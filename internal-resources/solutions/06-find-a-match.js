// Finding Matches and Controlling Loops

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
