// Optional: More Practice with forEach()

const invoiceAmounts = [5, 8, 3];
let invoiceTotal = 0;

invoiceAmounts.forEach((invoiceAmount) => {
  invoiceTotal = invoiceTotal + invoiceAmount;
});

console.log(invoiceTotal); // 16
