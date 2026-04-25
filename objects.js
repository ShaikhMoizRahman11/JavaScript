/*
============================================================
 JAVASCRIPT OBJECTS - COMPLETE LECTURE FILE
 Beginner to Advanced
============================================================

What is an object?
------------------
An object in JavaScript is a collection of data stored as key-value pairs.
In simple words, an object is used to store details about one thing.

Example:
A student has:
- name
- age
- course
- city

Instead of making many separate variables, we can store everything in one object.

Important idea:
- key   = property name
- value = property value

Objects are one of the most important topics in JavaScript because they are
used in real projects, APIs, forms, React apps, backend development, and JSON.
*/

console.log("================ JAVASCRIPT OBJECTS LECTURE ================");


/*
============================================================
1. CREATING AN OBJECT
============================================================

The easiest way to create an object is object literal syntax.
We use curly braces {}.
*/

const student = {
    name: "Tom",
    age: 22,
    course: "Full Stack",
    city: "New York"
};

// console.log("1. Basic Object:", student);


/*
Explanation:
- name, age, course, city are keys
- "Moiz", 22, "Full Stack", "Aurangabad" are values
*/


/*
============================================================
2. WHY OBJECTS ARE USEFUL
============================================================

Without object:
let name = "Tom";
let age = 22;
let city = "New York";

This becomes messy when data grows.

With object:
Everything is grouped together.
*/

const teacher = {
    name: "Ben",
    subject: "JavaScript",
    experience: 2
};

// console.log("2. Teacher Object:", teacher);


/*
============================================================
3. ACCESSING OBJECT VALUES
============================================================

There are 2 main ways:
1. Dot notation
2. Bracket notation
*/

const user = {
    username: "Jarvis123",
    email: "demo@gmail.com",
    isActive: true
};

// Dot notation
// console.log("3. Dot Notation:", user.username);

// Bracket notation
// console.log("3. Bracket Notation:", user["email"]);


/*
When to use dot notation?
- When key name is simple and known

When to use bracket notation?
- When key name comes from a variable
- When key has spaces or special characters
*/

const person = {
    "full name": "Jhon Snow",
    age: 22
};

console.log("Bracket notation with space key:", person["full name"]);


/*
============================================================
4. ACCESSING VALUE USING VARIABLE KEY
============================================================
*/

const product = {
    title: "Laptop",
    price: 45000,
    brand: "Dell"
};

let keyName = "price";
// console.log("4. Dynamic key access:", product[keyName]);
// console.log(keyName);



/*
============================================================
5. ADDING NEW PROPERTIES
============================================================

Objects are dynamic in JavaScript.
That means we can add new properties later.
*/

const employee = {
    name: "Aman",
    department: "IT"
};

employee.salary = 30000;
employee.city = "Pune";

console.log("5. After adding properties:", employee);


/*
============================================================
6. UPDATING EXISTING PROPERTIES
============================================================
*/
// employee.salary = 35000;
// employee.department = "Development";

const neww={
    name:"Tom",
    age:12,
    dept:"IT"
};
neww.name="jerry";
neww.age=32;
neww.dept="Plumber";
console.log(neww);


// console.log("6. After updating properties:", employee);


/*
============================================================
7. DELETING PROPERTIES
============================================================

We use delete keyword.
*/

delete employee.city;
// console.log("7. After deleting city:", employee);


/*
============================================================
8. OBJECT WITH DIFFERENT DATA TYPES
============================================================

An object can store:
- string
- number
- boolean
- array
- another object
- function
*/

const mobile = {
    brand: "Samsung",
    model: "S23",
    price: 70000,
    isAvailable: true,
    colors: ["Black", "Blue", "White"],
    warranty: {
        years: 1,
        type: "Manufacturer"
    }
};

// console.log("8. Object with multiple data types:", mobile);
// console.log("Mobile colors:", mobile.colors);
// console.log("Warranty years:", mobile.warranty.type);


/*
============================================================
9. NESTED OBJECTS
============================================================

An object inside another object is called nested object.
*/

const company = {
    name: "TechSoft",
    location: {
        city: "Hyderabad",
        state: "Telangana"
    },
    founder: {
        name: "Ravi",
        age: 35
    }
};

// console.log("9. Company city:", company.location.city);
// console.log("9. Founder name:", company.founder.name);


/*
============================================================
10. OBJECTS WITH ARRAYS
============================================================
*/

const classroom = {
    className: "Web Development",
    students: ["Ali", "Sara", "John", "Neha"],
    totalStudents: 4
};

// console.log("10. Students array:", classroom.students);
// console.log("First student:", classroom.students);


/*
============================================================
11. METHODS IN OBJECTS
============================================================

A function inside an object is called a method.
*/

// const calculator = {
//     num1: 10,
//     num2: 5,
//     add: function () {
//         return this.num1 + this.num2;
//     },
//     subtract: function () {
//         return this.num1 - this.num2;
//     }
// };

// console.log("11. Calculator add:", calculator.add());
// console.log("11. Calculator subtract:", calculator.subtract());


/*
============================================================
12. SHORT METHOD SYNTAX
============================================================

Instead of writing:
add: function() {}

We can write:
add() {}
*/

// const car = {
//     brand: "BMW",
//     start() {
//         console.log("12. Car started");
//     },
//     stop() {
//         console.log("12. Car stopped");
//     }
// };

// car.start();
// car.stop();


/*
============================================================
13. THIS KEYWORD
============================================================

Inside an object method, 'this' refers to the current object.
*/

// const student2 = {
//     name: "Zoya",
//     age: 21,
//     intro() {
//         console.log("13. My name is " + this.name + " and my age is " + this.age);
//     }
// };

// student2.intro();


/*
Why use this?
- Because it refers to the object's own values
- Makes code reusable and cleaner
*/


/*
============================================================
14. LOOPING THROUGH OBJECT USING for...in
============================================================

for...in loop is used to get keys from object.
*/

// const laptop = {
//     brand: "HP",
//     ram: "16GB",
//     storage: "512GB",
//     price: 55000
// };

// console.log("14. Looping through object:");
// for (let key in laptop) {
//     console.log(key, ":", laptop[key]);
// }


/*
============================================================
15. OBJECT.KEYS(), OBJECT.VALUES(), OBJECT.ENTRIES()
============================================================
*/

// console.log("15. Object keys:", Object.keys(laptop));
// console.log("15. Object values:", Object.values(laptop));
// console.log("15. Object entries:", Object.entries(laptop));


/*
============================================================
16. CHECKING PROPERTY EXISTS
============================================================

We can check using:
- in operator
- hasOwnProperty()
*/

// console.log("16. 'brand' in laptop:", "brand" in laptop);
// console.log("16. 'color' in laptop:", "color" in laptop);
// console.log("16. hasOwnProperty('ram'):", laptop.hasOwnProperty("ram"));


/*
============================================================
17. OBJECT REFERENCE BEHAVIOR
============================================================

Objects are reference types.
That means if we assign one object to another variable,
both variables point to same object.
*/

// const objA = {
//     name: "Original"
// };

// const objB = objA;
// objB.name = "Changed";

// console.log("17. objA:", objA);
// console.log("17. objB:", objB);


/*
Important:
Changing objB also changed objA.
Because both refer to same object in memory.
*/


/*
============================================================
18. COPYING OBJECT USING SPREAD OPERATOR
============================================================

To create a separate copy, use spread operator.
*/

// const originalUser = {
//     name: "Imran",
//     age: 25
// };

// const copiedUser = { ...originalUser };
// copiedUser.age = 30;

// console.log("18. Original user:", originalUser);
// console.log("18. Copied user:", copiedUser);


/*
============================================================
19. OBJECT DESTRUCTURING
============================================================

Destructuring means extracting object values into variables.
*/

// const course = {
//     title: "JavaScript",
//     duration: "3 Months",
//     fees: 5000
// };

// const { title, duration, fees } = course;

// console.log("19. Destructured title:", title);
// console.log("19. Destructured duration:", duration);
// console.log("19. Destructured fees:", fees);


/*
============================================================
20. RENAME VARIABLES IN DESTRUCTURING
============================================================
*/

// const userProfile = {
//     firstName: "Moiz",
//     lastName: "Rahman"
// };

// const { firstName: fName, lastName: lName } = userProfile;
// console.log("20. Renamed destructured values:", fName, lName);


/*
============================================================
21. DEFAULT VALUES IN DESTRUCTURING
============================================================
*/

// const settings = {
//     theme: "dark"
// };

// const { theme, fontSize = 16 } = settings;
// console.log("21. Theme:", theme);
// console.log("21. Default fontSize:", fontSize);


/*
============================================================
22. DYNAMIC PROPERTY NAMES
============================================================

We can create keys dynamically using square brackets.
*/

// let dynamicKey = "subject";

// const marks = {
//     name: "Ayaan",
//     [dynamicKey]: "JavaScript"
// };

// console.log("22. Dynamic property object:", marks);


/*
============================================================
23. OBJECT INSIDE ARRAY
============================================================

This is very common in real applications.
For example, list of students, employees, products.
*/

// const students = [
//     { id: 1, name: "Ali", course: "Java" },
//     { id: 2, name: "Sara", course: "React" },
//     { id: 3, name: "John", course: "Node" }
// ];

// console.log("23. Array of objects:", students);
// console.log("First student name:", students[0].name);
// console.log("Second student course:", students[1].course);


/*
============================================================
24. LOOPING THROUGH ARRAY OF OBJECTS
============================================================
*/

// console.log("24. Looping through array of objects:");
// students.forEach((student) => {
//     console.log(student.id, student.name, student.course);
// });


/*
============================================================
25. OBJECT ASSIGN()
============================================================

Object.assign() is another way to copy or merge objects.
*/

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObj = Object.assign({}, obj1, obj2);
// console.log("25. Merged object:", mergedObj);


/*
============================================================
26. OPTIONAL CHAINING
============================================================

Optional chaining is useful when nested object may not exist.
It prevents errors.
*/

// const employeeData = {
//     name: "Rohit",
//     address: {
//         city: "Mumbai"
//     }
// };

// console.log("26. Optional chaining existing:", employeeData.address?.city);
// console.log("26. Optional chaining missing:", employeeData.contact?.phone);


/*
============================================================
27. OBJECT FREEZE
============================================================

Object.freeze() prevents changes.
After freezing:
- cannot add
- cannot update
- cannot delete
*/

// const bankAccount = {
//     accNo: 12345,
//     holder: "Sameer"
// };

// Object.freeze(bankAccount);

// // These lines will not change the object after freeze
// bankAccount.holder = "Changed Name";
// bankAccount.balance = 5000;

// delete bankAccount.accNo;

// console.log("27. Frozen object:", bankAccount);


/*
============================================================
28. OBJECT SEAL
============================================================

Object.seal() allows update but does not allow add/delete.
*/

// const admin = {
//     username: "admin123",
//     role: "admin"
// };

// Object.seal(admin);
// admin.role = "super admin"; // allowed
// admin.city = "Pune";        // not allowed

// delete admin.username;       // not allowed

// console.log("28. Sealed object:", admin);


/*
============================================================
29. JSON AND OBJECTS
============================================================

JSON looks like JavaScript object, but it is a string format used for
sending data between frontend and backend.
*/

// const userObj = {
//     name: "Tina",
//     age: 24
// };

// const jsonData = JSON.stringify(userObj);
// console.log("29. Object to JSON:", jsonData);

// const backToObject = JSON.parse(jsonData);
// console.log("29. JSON to Object:", backToObject);


/*
============================================================
30. FACTORY FUNCTION
============================================================

A factory function returns objects.
Useful when we want to create many similar objects.
*/

// function createStudent(name, age, course) {
//     return {
//         name: name,
//         age: age,
//         course: course,
//         intro() {
//             console.log("30. I am " + this.name + " and I study " + this.course);
//         }
//     };
// }

// const s1 = createStudent("Aman", 21, "Java");
// const s2 = createStudent("Neha", 22, "React");

// console.log("30. Factory created student 1:", s1);
// console.log("30. Factory created student 2:", s2);
// s1.intro();
// s2.intro();


/*
============================================================
31. CONSTRUCTOR FUNCTION
============================================================

Before classes became popular, constructor functions were used to create objects.
By convention, constructor name starts with capital letter.
*/

// function Employee(name, position) {
//     this.name = name;
//     this.position = position;
// }

// const emp1 = new Employee("Karan", "Developer");
// const emp2 = new Employee("Pooja", "Tester");

// console.log("31. Constructor employee 1:", emp1);
// console.log("31. Constructor employee 2:", emp2);


/*
============================================================
32. CLASS BASED OBJECT CREATION
============================================================

Classes are modern and cleaner for creating many objects.
*/

// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log("32. " + this.name + " says " + this.sound);
//     }
// }

// const dog = new Animal("Dog", "Bark");
// const cat = new Animal("Cat", "Meow");

// dog.makeSound();
// cat.makeSound();


/*
============================================================
33. ADVANCED - NESTED DESTRUCTURING
============================================================
*/

// const employeeInfo = {
//     id: 101,
//     personal: {
//         fullName: "Shaikh Moiz",
//         city: "Aurangabad"
//     }
// };

// const {
//     personal: { fullName, city }
// } = employeeInfo;

// console.log("33. Nested destructuring fullName:", fullName);
// console.log("33. Nested destructuring city:", city);


/*
============================================================
34. ADVANCED - REST OPERATOR IN OBJECTS
============================================================

Rest operator collects remaining properties.
*/

// const book = {
//     title1: "JavaScript Basics",
//     author: "ABC",
//     price: 499,
//     pages: 300
// };

// const { title1: bookTitle, ...otherDetails } = book;
// console.log("34. Book title:", bookTitle);
// console.log("34. Other details:", otherDetails);


/*
============================================================
35. ADVANCED - SPREAD OPERATOR FOR MERGING OBJECTS
============================================================
*/

// const basicDetails = {
//     name: "Aisha",
//     age: 23
// };

// const professionalDetails = {
//     role: "Developer",
//     company: "ABC Tech"
// };

// const fullDetails = {
//     ...basicDetails,
//     ...professionalDetails
// };

// console.log("35. Spread merged object:", fullDetails);


/*
============================================================
36. COMMON MISTAKES
============================================================
*/

// Mistake 1: Using dot notation for variable key
// const data = {
//     subject: "JS"
// };

// let key1 = "subject";
// console.log("36. Correct dynamic access:", data[key1]); // correct
// // console.log(data.key1); // wrong if expecting "JS"

// // Mistake 2: Forgetting method call parentheses
// const demoObj = {
//     greet() {
//         return "Hello";
//     }
// };

// console.log("36. Method call with ():", demoObj.greet());
// console.log(demoObj.greet); // this would show function definition


/*
============================================================
37. REAL WORLD EXAMPLE - STUDENT MANAGEMENT OBJECT
============================================================
*/

// const studentManagement = {
//     students: [],

//     addStudent(name, course) {
//         this.students.push({ name, course });
//         console.log(name + " added successfully");
//     },

//     showStudents() {
//         console.log("37. All Students:");
//         this.students.forEach((student, index) => {
//             console.log(index + 1 + ".", student.name, "-", student.course);
//         });
//     }
// };

// studentManagement.addStudent("Ali", "Java");
// studentManagement.addStudent("Sara", "React");
// studentManagement.showStudents();


/*
============================================================
38. INTERVIEW STYLE QUESTIONS PRACTICE
============================================================
*/

// const interviewObj = {
//     name: "Test User",
//     age: 25,
//     city: "Delhi"
// };

// console.log("38. Keys:", Object.keys(interviewObj));
// console.log("38. Values:", Object.values(interviewObj));
// console.log("38. Entries:", Object.entries(interviewObj));


/*
============================================================
39. QUICK DIFFERENCE - OBJECT VS ARRAY
============================================================

Object:
- stores data in key-value pair
- access using key name

Array:
- stores ordered collection
- access using index number
*/

// const objExample = { name: "Moiz", city: "Aurangabad" };
// const arrExample = ["Moiz", "Aurangabad"];

// console.log("39. Object access:", objExample.name);
// console.log("39. Array access:", arrExample[0]);


/*
============================================================
40. FINAL SUMMARY
============================================================

Important points to remember:
1. Object stores data in key-value pairs
2. Use {} to create object
3. Access values using dot or bracket notation
4. Objects can store functions, arrays, and other objects
5. Function inside object is called method
6. 'this' refers to current object
7. Use for...in, Object.keys(), Object.values(), Object.entries() for looping
8. Objects are reference types
9. Use spread operator to copy object
10. JSON is often used to transfer object data
*/

// console.log("================ END OF OBJECTS LECTURE ================");