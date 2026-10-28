// Looping Through Arrays

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
