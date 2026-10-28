<h1>
  <span class="prefix"></span>
  <span class="headline">JavaScript basics practice: functions, arrays, objects, and control flow</span>
</h1>


Work through this activity in several sittings. The exercises build on each other, so complete them in order.

**How to work**

- Create an `app.js` file and add a comment identifying each exercise.
- Add new code below your previous work unless an exercise tells you to replace something.
- From exercise 2 onward, write standalone functions as **arrow functions**.
- Use arrow functions with curly braces. When a function should return a value, write `return` explicitly.
- Use `if`, `else if`, `else`, `for`, and `.forEach()` where requested. **Do not use `while` loops.**
- Keep the functions separate, even when their bodies look similar. Repeating the steps is part of this practice.
- Run your code regularly. Use `console.log()` to check returned values.

Several exercises change arrays or objects. The expected results assume you have completed the earlier changes.

---

**Part 1: Writing and calling functions**

1. Write a function declaration named `sayHello` with a parameter named `name`. It should print a greeting.

   ```js
   sayHello('Sara') // Hello, Sara!
   sayHello('Ali')  // Hello, Ali!
   ```

2. **Replace** your function declaration with an arrow function named `sayHello`. Keep the same parameter and behaviour.

   Use this structure:

   ```js
   const sayHello = (name) => {
       // Your code here
   }
   ```

   Run your two existing calls again.

3. Write an arrow function named `printDouble` that receives `number` and prints twice its value.

   ```js
   printDouble(3) // 6
   printDouble(5) // 10
   printDouble(0) // 0
   ```

4. Write an arrow function named `printSum` that receives `firstNumber` and `secondNumber` and prints their sum.

   ```js
   printSum(4, 7) // 11
   printSum(0, 9) // 9
   ```

5. Write an arrow function named `printFullName` that receives `firstName` and `lastName`. Print them with a space between them.

   ```js
   printFullName('Sara', 'Ahmed') // Sara Ahmed
   printFullName('Ali', 'Hassan') // Ali Hassan
   ```

   > **Printing and returning do different jobs.**
   >
   > `console.log()` displays something in the console.
   >
   > `return` sends a value back to the code that called the function. That code can save the value, print it, or use it in another calculation.

6. Write an arrow function named `makeGreeting` that receives `name` and **returns** a greeting. Keep `console.log()` outside the function.

   ```js
   console.log(makeGreeting('Sara')) // Hello, Sara!
   console.log(makeGreeting('Ali'))  // Hello, Ali!
   ```

7. Call `makeGreeting('Omar')`. Save its returned value in a variable named `greetingForOmar`. On the next line, print that variable.

   Expected output:

   ```text
   Hello, Omar!
   ```

8. Write an arrow function named `doubleNumber` that receives `number` and **returns** twice its value.

   ```js
   console.log(doubleNumber(3)) // 6
   console.log(doubleNumber(5)) // 10
   console.log(doubleNumber(0)) // 0
   ```

9. Write an arrow function named `addNumbers` that receives two numbers and returns their sum.

   ```js
   console.log(addNumbers(4, 7)) // 11
   console.log(addNumbers(0, 9)) // 9
   ```

10. Write an arrow function named `multiplyNumbers` that receives two numbers and returns their product.

    ```js
    console.log(multiplyNumbers(3, 4)) // 12
    console.log(multiplyNumbers(5, 0)) // 0
    ```

---

**Part 2: Returning values and making decisions**

11. Write `subtractNumbers(firstNumber, secondNumber)`. Return the first number minus the second number.

    ```js
    console.log(subtractNumbers(10, 3)) // 7
    console.log(subtractNumbers(3, 10)) // -7
    ```

12. Write `getRectangleArea(width, height)`. Return the width multiplied by the height.

    ```js
    console.log(getRectangleArea(5, 3)) // 15
    console.log(getRectangleArea(2, 8)) // 16
    ```

13. Write `getLineTotal(price, qty)`. Return the price multiplied by the quantity.

    Write the calculation inside this function, even though it resembles an earlier exercise.

    ```js
    console.log(getLineTotal(3, 4)) // 12
    console.log(getLineTotal(2, 0)) // 0
    ```

14. Add this code and run it:

    ```js
    const calculateTotal = (price, qty) => {
        price * qty
    }

    console.log(calculateTotal(3, 4))
    ```

    It prints `undefined`. Edit the function so that the same call prints `12`.

    > With the arrow-function structure we are using, writing a calculation inside `{}` does not automatically return its result.

15. Write `isPassing(score)`. Return the result of checking whether the score is at least `50`.

    ```js
    console.log(isPassing(49)) // false
    console.log(isPassing(50)) // true
    console.log(isPassing(80)) // true
    ```

16. Write `getResult(score)`. Use `if` and `else` to return:

    - `'Passed'` when the score is at least `50`.
    - `'Try again'` otherwise.

    Test it with `49`, `50`, and `80`.

17. Write `getStockMessage(stock)`. Assume the stock is zero or a positive number.

    | Stock | Return |
    |---|---|
    | Exactly `0` | `'Out of stock'` |
    | Greater than `0` but less than `5` | `'Low stock'` |
    | `5` or more | `'In stock'` |

    Use `if`, `else if`, and `else`. Test `0`, `1`, `4`, and `5`.

18. Write `getTicketMessage(hasTicket, isEventOpen)`. Use `&&`.

    Return `'You can enter'` when both arguments are `true`. Otherwise, return `'You cannot enter'`.

    Test all four combinations:

    ```js
    console.log(getTicketMessage(true, true))
    console.log(getTicketMessage(true, false))
    console.log(getTicketMessage(false, true))
    console.log(getTicketMessage(false, false))
    ```

19. Write `isApprovedPlanet(planet)`. Use `||`.

    Return `true` for `'Earth'` or `'Mars'`. Return `false` for other values.

    ```js
    console.log(isApprovedPlanet('Earth')) // true
    console.log(isApprovedPlanet('Mars'))  // true
    console.log(isApprovedPlanet('Venus')) // false
    ```

20. Write `getOrderMessage(orderTotal, hasAddress)`. Check these conditions **in this order**:

    | Condition | Return |
    |---|---|
    | The customer has no address | `'Add an address'` |
    | The total is below `10` | `'Minimum order is 10 BHD'` |
    | Otherwise | `'Ready for delivery'` |

    Test:

    ```js
    console.log(getOrderMessage(8, false)) // Add an address
    console.log(getOrderMessage(8, true))  // Minimum order is 10 BHD
    console.log(getOrderMessage(10, true)) // Ready for delivery
    console.log(getOrderMessage(20, true)) // Ready for delivery
    ```

    > More than one condition might be true. Checking for the missing address first makes that message take priority.

---

**Part 3: Reading and changing arrays**

Add this array once:

```js
const movies = ['Barbie', 'Interstellar', 'Harry Potter']
```

> An array’s first index is `0`. Its last index is always one less than its length.
>
> You can change the contents of an array declared with `const`.

21. Print the first movie using its index.

    Expected: `'Barbie'`.

22. Print the second movie and then the third movie. Use two separate `console.log()` statements.

23. Print the array’s length.

    Expected: `3`.

24. Print the last movie using `movies.length - 1` inside the square brackets.

25. Replace `'Interstellar'` with `'Spider-Man'` using its index. Print the array.

    Expected contents:

    ```js
    ['Barbie', 'Spider-Man', 'Harry Potter']
    ```

26. Use `.push()` to add `'Dune'`. Save the returned value in `lengthAfterDune`.

    Print `lengthAfterDune`, then print `movies`.

    The returned value should be `4`.

    > `.push()` changes the array and returns its **new length**.

27. Use one `.push()` call to add `'Inside Out'` and `'The Dark Knight'`.

    Print the array’s length. Expected: `6`.

28. Use `.pop()` to remove the last movie. Save its returned value in `removedMovie`.

    Print `removedMovie`, then print the array’s length.

    Expected: `'The Dark Knight'`, then `5`.

    > `.pop()` changes the array and returns the **item it removed**.

29. Use two separate statements to print:

    - Whether `movies` includes `'Dune'`: `true`.
    - Whether `movies` includes `'Frozen'`: `false`.

30. Use `.join(' | ')` to create a string from the movies. Save it in `movieString` and print it.

    Expected:

    ```text
    Barbie | Spider-Man | Harry Potter | Dune | Inside Out
    ```

---

**Part 4: Passing arrays into arrow functions**

Add another array:

```js
const weekendMovies = ['Dune', 'Frozen']
```

Use the function’s parameter inside each function. For example, a function receiving `movieList` should read `movieList`, so it can work with either array.

31. Write `getFirstMovie(movieList)`. Return the first movie.

    ```js
    console.log(getFirstMovie(movies))        // Barbie
    console.log(getFirstMovie(weekendMovies)) // Dune
    ```

32. Write `getSecondMovie(movieList)`. Return the second movie.

    ```js
    console.log(getSecondMovie(movies))        // Spider-Man
    console.log(getSecondMovie(weekendMovies)) // Frozen
    ```

33. Write `getLastMovie(movieList)`. Use the array’s length to return its last movie.

    ```js
    console.log(getLastMovie(movies))        // Inside Out
    console.log(getLastMovie(weekendMovies)) // Frozen
    ```

34. Write `countMovies(movieList)`. Return the array’s length.

    ```js
    console.log(countMovies(movies))        // 5
    console.log(countMovies(weekendMovies)) // 2
    console.log(countMovies([]))            // 0
    ```

35. Write `hasMovie(movieList, title)`. Return the result of using `.includes()`.

    ```js
    console.log(hasMovie(movies, 'Dune'))          // true
    console.log(hasMovie(movies, 'Frozen'))        // false
    console.log(hasMovie(weekendMovies, 'Frozen')) // true
    ```

36. Write `addMovie(movieList, title)`. Inside the function:

    - Push the title into the array.
    - On a separate line, return `movieList`.

    Call it once:

    ```js
    console.log(addMovie(movies, 'Moana'))
    ```

    The returned array should contain six movies, ending with `'Moana'`.

    > Here, we want the function to return the array. Returning the result of `.push()` would give us a number instead.

37. Write `removeLastMovie(movieList)`. Inside the function:

    - Use `.pop()` and save the removed movie in a variable.
    - Return that variable.

    ```js
    console.log(removeLastMovie(movies)) // Moana
    console.log(movies.length)           // 5
    ```

38. Write `describeMovieList(movieList)`. Return a sentence containing its length.

    ```js
    console.log(describeMovieList(movies)) // There are 5 movies.
    console.log(describeMovieList([]))     // There are 0 movies.
    ```

39. Write `addMovieOnce(movieList, title)`.

    Check whether the array already includes the title. Add it only when it is missing. Return the array after the check.

    Make these calls in order:

    ```js
    addMovieOnce(movies, 'Dune')
    console.log(movies.length) // 5

    addMovieOnce(movies, 'Frozen')
    console.log(movies.length) // 6

    addMovieOnce(movies, 'Frozen')
    console.log(movies.length) // 6
    ```

40. Write `getMovieMessage(movieList, title)`. Use `if` and `else`.

    ```js
    console.log(getMovieMessage(movies, 'Frozen'))
    // Frozen is on the list.

    console.log(getMovieMessage(movies, 'Avatar'))
    // Avatar is not on the list.
    ```

---

**Part 5: Repeating actions with loops**

Add this array:

```js
const stockCounts = [8, 3, 12, 1]
```

41. Use a `for` loop to print the numbers `1` through `5`.

42. Write another `for` loop to print `0` through `4`.

43. Use a `for` loop to print each value in `stockCounts`.

    Expected:

    ```text
    8
    3
    12
    1
    ```

44. Use another `for` loop to print each index and its stock value.

    Expected:

    ```text
    0: 8
    1: 3
    2: 12
    3: 1
    ```

45. Repeat exercise 43 using `.forEach()` and an arrow function.

    Start with:

    ```js
    stockCounts.forEach((stock) => {
        // Print the current stock value
    })
    ```

    > This arrow function is a **callback**: a function passed into another function.
    >
    > `.forEach()` calls it once for each item. Each time, `stock` receives the current item’s value.

46. Repeat exercise 44 using `.forEach()`.

    Give the callback two parameters: `stock` and `idx`.

47. Use `.forEach()` with `if` and `else` to print a message for every value:

    ```text
    8: Enough stock
    3: Low stock
    12: Enough stock
    1: Low stock
    ```

    A value below `5` is low stock.

48. Write an arrow function named `printStock(stockList)`. Put a `.forEach()` loop inside it that prints each value.

    Test both calls:

    ```js
    printStock(stockCounts)
    printStock([5, 2])
    ```

49. Write `printLowStock(stockList)`. Use `.forEach()` and an `if` statement to print only values below `5`.

    ```js
    printLowStock(stockCounts)
    // 3
    // 1

    printLowStock([5, 2])
    // 2
    ```

50. Use `.forEach()` to increase every value in `stockCounts` by `10`.

    Use the index to assign each new value back into the array. Print the array **after** the loop.

    Expected:

    ```js
    [18, 13, 22, 11]
    ```

    > Calculating `stock + 10` produces a number. To change the array, you must store that number at the current index.

---

**Part 6: Calculating and collecting results**

Use this fresh array for this section:

```js
const practiceStock = [8, 3, 12, 1]
```

51. Complete `getTotalStock(stockList)` so it returns the sum of all stock values.

    ```js
    const getTotalStock = (stockList) => {
        let total = 0

        stockList.forEach((stock) => {
            // Add the current stock value to total
        })

        // Return the completed total
    }
    ```

    Test:

    ```js
    console.log(getTotalStock(practiceStock)) // 24
    console.log(getTotalStock([]))            // 0
    ```

    > `total` is an **accumulator**: a variable that builds up a result.
    >
    > Create it before the loop, update it inside the loop, and return it after the loop.

52. Write `countLowStock(stockList)`.

    Start a counter at `0`. Increase it by `1` whenever a stock value is below `5`. Return the counter after the loop.

    ```js
    console.log(countLowStock(practiceStock)) // 2
    console.log(countLowStock([5, 8]))        // 0
    console.log(countLowStock([]))            // 0
    ```

53. Write `countAvailableStock(stockList)`. Count how many values are greater than `0`.

    ```js
    console.log(countAvailableStock(practiceStock)) // 4
    console.log(countAvailableStock([0, 3, 0, 5]))  // 2
    console.log(countAvailableStock([]))            // 0
    ```

54. Write `getLowStockTotal(stockList)`. Add together only the values below `5`.

    ```js
    console.log(getLowStockTotal(practiceStock)) // 4
    console.log(getLowStockTotal([5, 8]))        // 0
    console.log(getLowStockTotal([]))            // 0
    ```

    Notice the difference: exercise 52 counts qualifying values; this exercise adds those values together.

55. Add this array:

    ```js
    const restockCounts = [2, 5]
    ```

    Write `increaseStock(stockList, amount)`. Use `.forEach()` and indexes to increase each value by `amount`. Return the changed array.

    Run these calls in order:

    ```js
    console.log(increaseStock(restockCounts, 3)) // [5, 8]
    console.log(increaseStock(restockCounts, 1)) // [6, 9]
    ```

    The second call uses the values changed by the first call.

56. Add this array:

    ```js
    const warehouseStock = [2, 4]
    ```

    Write `multiplyStock(stockList, multiplier)`. Multiply each value by `multiplier`, assign it back at the same index, and return the array.

    ```js
    console.log(multiplyStock(warehouseStock, 3)) // [6, 12]
    ```

57. **Replace the body** of `getTotalStock` from exercise 51. Calculate the total using a `for` loop instead of `.forEach()`.

    Keep its name, parameter, and returned value the same. Run its existing tests again.

58. Add and run this function:

    ```js
    const calculateStockTotal = (stockList) => {
        let total = 0

        stockList.forEach((stock) => {
            total = total + stock
            return total
        })
    }

    console.log(calculateStockTotal(practiceStock))
    ```

    It prints `undefined`. Move the `return` statement so that the outer function returns the completed total.

    Expected: `24`.

    > The callback and `calculateStockTotal` are two separate functions. A `return` inside the callback returns from that callback. It does not return from the outer function.

59. Write `collectLowStock(stockList)`.

    Inside the function:

    - Create a new empty array.
    - Loop through `stockList`.
    - Push values below `5` into the new array.
    - Return the new array after the loop.

    Leave `stockList` unchanged.

    ```js
    console.log(collectLowStock(practiceStock)) // [3, 1]
    console.log(collectLowStock([5, 8]))        // []
    console.log(collectLowStock([]))            // []
    ```

60. Write `getStockMessages(stockList)`. Return a new array containing one message for each stock value.

    Use `.forEach()`, `if`, `else if`, `else`, and `.push()`.

    | Value | Message to push |
    |---|---|
    | `0` | `'Out of stock'` |
    | Greater than `0` but below `5` | `'Low stock'` |
    | `5` or more | `'In stock'` |

    ```js
    console.log(getStockMessages([0, 3, 8]))
    // ['Out of stock', 'Low stock', 'In stock']

    console.log(getStockMessages([]))
    // []
    ```

---

**Part 7: Reading and changing objects**

Add this object once:

```js
const product = {
    name: 'Notebook',
    price: 2,
    stock: 6,
}
```

61. Print the entire `product` object.

62. Use three separate `console.log()` statements to print its `name`, `price`, and `stock` using dot notation.

63. Print the product’s name using bracket notation.

    Then add:

    ```js
    const productProperty = 'stock'
    ```

    Use `productProperty` inside square brackets to print the stock.

    > `product[productProperty]` uses the value stored in the variable: `'stock'`.

64. Change the product’s name to `'Sketchbook'`. Print the updated name.

65. Change its price to `3`. Print the updated price.

66. Two products have been sold. Subtract `2` from `product.stock`, then print it.

    Expected: `4`.

67. Add a property named `isFeatured` with the value `true`. Print that property.

68. Add a property named `discountCode` with the value `'SAVE10'`. Print that property.

69. Delete `discountCode`. Print `product.discountCode` again.

    Expected: `undefined`.

70. Add a property named `tags` containing this array:

    ```js
    ['stationery', 'art']
    ```

    Print its first tag. Then push `'school'` into `product.tags` and print the tags array.

    Expected:

    ```js
    ['stationery', 'art', 'school']
    ```

---

**Part 8: Passing objects into arrow functions**

Continue using the `product` object you changed in Part 7.

71. Write `getProductName(productItem)`. Return its name.

    ```js
    console.log(getProductName(product)) // Sketchbook
    ```

72. Write `getProductPrice(productItem)`. Return its price.

    ```js
    console.log(getProductPrice(product)) // 3
    ```

73. Write `getInventoryValue(productItem)`. Return its price multiplied by its stock.

    ```js
    console.log(getInventoryValue(product)) // 12
    ```

74. Write `getProductSummary(productItem)`. Return a sentence using its name and price.

    ```js
    console.log(getProductSummary(product))
    // Sketchbook costs 3 BHD.
    ```

75. Write `setProductPrice(productItem, newPrice)`.

    Assign `newPrice` to the object’s `price` property. Return the object.

    Call it once, then check:

    ```js
    setProductPrice(product, 4)

    console.log(product.price)              // 4
    console.log(getInventoryValue(product)) // 16
    ```

    > Changing a property through `productItem` changes the object passed into the function.

76. Write `sellOne(productItem)`. Subtract `1` from its stock and return the updated stock number.

    Call it twice:

    ```js
    console.log(sellOne(product)) // 3
    console.log(sellOne(product)) // 2
    ```

77. **Edit** `sellOne` so it only subtracts stock when the current stock is greater than `0`.

    It should always return the stock number after the check.

    Add these calls below your earlier calls:

    ```js
    console.log(sellOne(product)) // 1
    console.log(sellOne(product)) // 0
    console.log(sellOne(product)) // 0
    ```

    The stock should never fall below zero.

78. Write `getProductStockMessage(productItem)`. Check its `stock` property and return the same messages used in exercise 17.

    ```js
    console.log(getProductStockMessage(product))
    // Out of stock

    console.log(getProductStockMessage({
        name: 'Pen',
        price: 1,
        stock: 3,
    }))
    // Low stock

    console.log(getProductStockMessage({
        name: 'Folder',
        price: 2,
        stock: 10,
    }))
    // In stock
    ```

79. Write `restockProduct(productItem, amount)`. Add `amount` to its current stock and return the updated stock number.

    ```js
    console.log(restockProduct(product, 5)) // 5
    console.log(product.stock)             // 5
    ```

80. Write `createProduct(name, price, stock)`. Return a new object containing those three properties.

    Write each property explicitly:

    ```js
    // Inside the returned object:
    name: name
    ```

    Create and print two products:

    ```js
    const pencil = createProduct('Pencil', 1, 10)
    const marker = createProduct('Marker', 2, 4)

    console.log(pencil)
    // { name: 'Pencil', price: 1, stock: 10 }

    console.log(marker)
    // { name: 'Marker', price: 2, stock: 4 }
    ```

---

**Part 9: Putting it together — shopping cart**

Add this object once:

```js
const cart = {
    storeName: 'Corner Market',
    customerName: 'Sam',
    items: [
        { name: 'Bread', price: 1, qty: 1 },
        { name: 'Milk', price: 2, qty: 2 },
    ],
}
```

81. Print `cart.storeName` and `cart.customerName` using separate statements.

82. Use six separate `console.log()` statements to print:

    - The first item’s name.
    - The first item’s price.
    - The first item’s quantity.
    - The second item’s name.
    - The second item’s price.
    - The second item’s quantity.

    > Follow the structure one step at a time:
    >
    > `cart.items` gets the array.
    >
    > `cart.items[0]` gets the first object.
    >
    > `cart.items[0].name` gets that object’s name.

83. Change the customer’s name to `'Ali'`. Change the milk quantity to `3`.

    Print both changed values.

84. Push this object into `cart.items`:

    ```js
    { name: 'Apples', price: 1, qty: 4 }
    ```

    Print `cart.items.length`. Expected: `3`.

85. Write an arrow function named `printCartItems(shoppingCart)`.

    Use `.forEach()` on its `items` array to print:

    ```text
    Bread: 1
    Milk: 3
    Apples: 4
    ```

    Test it with:

    ```js
    printCartItems(cart)
    ```

86. Write `getCartLineCount(shoppingCart)`. Return the length of its `items` array.

    ```js
    console.log(getCartLineCount(cart)) // 3
    ```

    > A cart line is one object in the array. That object’s quantity might be greater than one.

87. Write `getCartQuantity(shoppingCart)`. Use an accumulator and `.forEach()` to add all the `qty` values.

    ```js
    console.log(getCartQuantity(cart))          // 8
    console.log(getCartQuantity({ items: [] })) // 0
    ```

    Three cart lines currently represent eight individual units.

88. Write `getCartTotal(shoppingCart)`.

    Inside the function:

    - Create `total` with an initial value of `0`.
    - Loop through the items.
    - Inside the loop, calculate `lineTotal` using the item’s price and quantity.
    - Add `lineTotal` to `total`.
    - Return `total` after the loop.

    ```js
    console.log(getCartTotal(cart))          // 11
    console.log(getCartTotal({ items: [] })) // 0
    ```

    Your calculation should include:

    ```text
    Bread:  1 × 1 = 1
    Milk:   2 × 3 = 6
    Apples: 1 × 4 = 4
    Total: 11
    ```

89. Edit the original `cart` object to add two **methods**. Use the method syntax from lecture and complete these bodies:

    ```js
    addItem(item) {
        // Push item into cart.items
    },
    itemCount() {
        // Return cart.items.length
    },
    ```

    A method is a function stored in an object. In these methods, use `cart.items`, as we did in class.

    Add these calls at the bottom of your file:

    ```js
    cart.addItem({ name: 'Rice', price: 3, qty: 2 })

    console.log(cart.itemCount())       // 4
    console.log(getCartQuantity(cart))  // 10
    console.log(getCartTotal(cart))     // 17
    ```

    Remember the parentheses when calling `cart.itemCount()`.

90. Write an arrow function named `getCheckoutMessage(shoppingCart, hasAddress)`.

    Check these conditions **in order**:

    | Condition | Return |
    |---|---|
    | The items array is empty | `'Your cart is empty'` |
    | The customer has no address | `'Add an address'` |
    | The total is below `10` | `'Minimum order is 10 BHD'` |
    | Otherwise | `'Ready for delivery'` |

    A function can call another function. Use `getCartTotal(shoppingCart)` to get the number you need for the total check.

    Add these test objects:

    ```js
    const emptyCart = {
        items: [],
    }

    const smallCart = {
        items: [
            { name: 'Bread', price: 1, qty: 1 },
        ],
    }

    const minimumCart = {
        items: [
            { name: 'Rice', price: 5, qty: 2 },
        ],
    }
    ```

    Check all five calls:

    ```js
    console.log(getCheckoutMessage(emptyCart, false))
    // Your cart is empty

    console.log(getCheckoutMessage(cart, false))
    // Add an address

    console.log(getCheckoutMessage(smallCart, true))
    // Minimum order is 10 BHD

    console.log(getCheckoutMessage(minimumCart, true))
    // Ready for delivery

    console.log(getCheckoutMessage(cart, true))
    // Ready for delivery
    ```

**Before you finish:** Run the complete file from the beginning. Check that every exercise has its number in a comment, every requested function has been called, and the results match the expected values.
