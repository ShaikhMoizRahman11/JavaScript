// ===============================
// map() METHOD
// ===============================

// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Selecting button
let mapButton = document.getElementById("mapBtn");

// Adding click event
mapButton.addEventListener("click", function () {

    // map() changes every element
    let doubledNumbers = numbers.map(function (num) {

        return num * 2;

    });

    // Showing result on webpage
    document.getElementById("mapResult").innerText =
        "Doubled Numbers: " + doubledNumbers.join(", ");

});




// ===============================
// filter() METHOD
// ===============================

// Array of numbers
let evenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

// Selecting button
let filterButton = document.getElementById("filterBtn");

// Adding click event
filterButton.addEventListener("click", function () {

    // filter() selects elements based on condition
    let evenNumbers = evenNumbersArray.filter(function (num) {

        // Checking even condition
        return num % 2 === 0;

    });

    // Showing result
    document.getElementById("filterResult").innerText =
        "Even Numbers: " + evenNumbers.join(", ");
});




// ===============================
// STUDENT MARKS EXAMPLE
// ===============================

// Array of student marks
let marks = [35, 80, 45, 90, 60, 38, 72, 21];

// Selecting button
let studentButton = document.getElementById("studentBtn");

// Adding click event
studentButton.addEventListener("click", function () {

    // filter() for passed students
    let passedStudents = marks.filter(function (mark) {

        // Marks greater than 40
        return mark > 40;

    });

    // Showing result
    document.getElementById("studentResult").innerText =
        "Passed Students Marks: " + passedStudents.join(", ");

});




// ===============================
// EXTRA map() EXAMPLE
// ===============================

// Array of student names
let students = ["Ali", "Ahmed", "Sara"];

// map() adding "Student:" before every name
let updatedStudents = students.map(function (name) {

    return "Student: " + name;

});

// Console output
console.log(updatedStudents);




// ===============================
// EXTRA filter() EXAMPLE
// ===============================

// Array of prices
let prices = [500, 1200, 700, 2500, 900];

// filter() for prices below 1000
let lowPrices = prices.filter(function (price) {

    return price < 1000;

});

// Console output
console.log(lowPrices);