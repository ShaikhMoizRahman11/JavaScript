// JavaScript Numbers & Math Lecture

// --------------------------------------------------
// 1. NUMBER TYPES
// JavaScript uses one main number type for both integers and decimals.
// --------------------------------------------------
let wholeNumber = 42;      // Integer / whole number
let decimalNumber = 3.14;  // Decimal number

// console.log("1. Number Types");
// console.log("Whole number:", wholeNumber);
// console.log("Decimal number:", decimalNumber);
// console.log("-----------------------------------");

// --------------------------------------------------
// 2. BASIC MATH OPERATIONS
// + addition
// - subtraction
// * multiplication
// / division
// % remainder
// ** power
// --------------------------------------------------
// let a = 10;
// let b = 3;

// console.log("2. Basic Math Operations");
// console.log("Addition:", a + b);         // 13
// console.log("Subtraction:", a - b);      // 7
// console.log("Multiplication:", a * b);   // 30
// console.log("Division:", a / b);         // 3.333...
// console.log("Remainder:", a % b);        // 1
// console.log("Power:", a ** 2);           // 100
// console.log("-----------------------------------");

// --------------------------------------------------
// 3. STRING TO NUMBER CONVERSION
// parseInt() converts string to integer
// parseFloat() converts string to decimal
// Number() also converts string to number
// --------------------------------------------------
let num1 = "25";
let num2 = "7.5";
num1=parseInt(25);
num2=parseFloat(7.5);

console.log("3. String to Number Conversion");
// console.log("parseInt:", parseInt(num1));      // 25
console.log(typeof(num1));
console.log(typeof(num2));
// console.log("parseFloat:", parseFloat(num2));  // 7.5
// console.log("Number:", Number(num1));          // 25
// console.log("-----------------------------------");

// --------------------------------------------------
// 4. IMPORTANT MATH METHODS
// Math.round() = nearest integer
// Math.floor() = round down
// Math.ceil() = round up
// Math.abs() = positive value
// --------------------------------------------------
let value = 4.7;

// console.log(Math.round(5.7));
console.log(Math.floor(6.9));

console.log(Math.ceil(6.0256));
console.log(Math.abs(-96));


// console.log("4. Important Math Methods");
// console.log("Math.round(4.7):", Math.round(value)); // 5
// console.log("Math.floor(4.7):", Math.floor(value)); // 4
// console.log("Math.ceil(4.7):", Math.ceil(value));   // 5
// console.log("Math.abs(-12):", Math.abs(-12));       // 12
console.log("Math.PI:", Math.PI);                   // 3.14159...
// console.log("-----------------------------------");

// --------------------------------------------------
// 5. MINIMUM AND MAXIMUM
// Math.max() gives largest number
// Math.min() gives smallest number
// --------------------------------------------------
console.log("5. Min and Max");
console.log("Maximum:", Math.max(10, 50, 20, 5)); // 50
console.log("Minimum:", Math.min(10, 50, 20, 5)); // 5
// console.log("-----------------------------------");

// --------------------------------------------------
// 6. POWER AND SQUARE ROOT
// Math.pow(base, exponent)
// Math.sqrt(number)
// --------------------------------------------------
// console.log("6. Power and Square Root");
console.log("Math.pow(4, 3):", Math.pow(4, 3)); // 8
console.log("2 ** 3:", 2 ** 3);                 // 8
console.log("Math.sqrt(25):", Math.sqrt(25));   // 5
// console.log("-----------------------------------");

// --------------------------------------------------
// 7. RANDOM NUMBERS
// Math.random() gives a number between 0 and 1
// To get custom range:
// Math.floor(Math.random() * max) + min
// --------------------------------------------------
// console.log("7. Random Numbers");
console.log("Random between 0 and 1:", Math.random());
console.log(Math.floor(Math.random()));

console.log("Random integer 0 to 9:", Math.floor(Math.random() * 100));
// console.log("Random integer 1 to 10:", Math.floor(Math.random() * 10) + 1);
// console.log("-----------------------------------");

// --------------------------------------------------
// 8. PRACTICAL EXAMPLE - CALCULATING TOTAL PRICE
// --------------------------------------------------
// let price = 100;
// let taxRate = 18; // in percent

// let taxAmount = (price * taxRate) / 100;
// let totalPrice = price + taxAmount;

// console.log("8. Practical Example - Total Price");
// console.log("Price:", price);
// console.log("Tax amount:", taxAmount);
// console.log("Total price:", totalPrice);
// console.log("-----------------------------------");

// --------------------------------------------------
// 9. PRACTICAL EXAMPLE - DICE ROLLER
// Random number between 1 and 6
// --------------------------------------------------
// let dice = Math.floor(Math.random() * 6) + 1;

// console.log("9. Dice Roller Example");
// console.log("Dice value:", dice);
// console.log("-----------------------------------");

// --------------------------------------------------
// 10. COMMON MISTAKE
// If one value is string, + may join them instead of adding
// --------------------------------------------------
// console.log("10. Common Mistake");
// console.log("'5' + 3 =", '5' + 3);                 // 53
// console.log("parseInt('5') + 3 =", parseInt('5') + 3); // 8
// console.log("-----------------------------------");

// --------------------------------------------------
// 11. MINI PRACTICE TASKS
// Uncomment and try one by one
// --------------------------------------------------

// Task 1: Add two numbers
// let x = 20;
// let y = 30;
// console.log("Sum:", x + y);

// Task 2: Find remainder
// console.log("Remainder:", 17 % 5);

// Task 3: Generate random number from 1 to 100
// console.log("Random 1 to 100:", Math.floor(Math.random() * 100) + 1);

// Task 4: Round decimal number
// let num = 8.76;
// console.log("Rounded:", Math.round(num));

