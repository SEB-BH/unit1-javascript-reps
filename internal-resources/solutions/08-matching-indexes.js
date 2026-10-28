// Using Indexes Across Arrays

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
