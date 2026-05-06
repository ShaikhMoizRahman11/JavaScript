// ===============================
// 📘 EVENTS IN JAVASCRIPT
// ===============================

// Event = "Something that happens in browser"
// Example:
// - Click
// - Typing (input)
// - Pressing key (keyboard)


// ===============================
// 1️⃣ CLICK EVENT (onclick)
// ===============================

// Select button
let btn = document.getElementById("btn");

// Using onclick (basic method)
btn.onclick = function () {
    document.getElementById("para").innerText = "Button clicked!";
    document.getElementById("para").style.color="white";
    document.getElementById("para").style.backgroundColor="violet";
};



// ===============================
// 2️⃣ CLICK EVENT (addEventListener)
// ===============================

// Better and modern way

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
    document.getElementById("para").style.color = "blue";
    document.getElementById("para").style.backgroundColor="yellow";
    document.getElementById("para").style.border="5px solid black";
});



// ===============================
// 3️⃣ INPUT EVENT
// ===============================

// Runs when user types in input box

let inputBox = document.getElementById("name");


inputBox.addEventListener("input", function () {

    let value = inputBox.value;

    document.getElementById("output").innerText = "You typed: " + value;
});



// ===============================
// 4️⃣ KEYBOARD EVENT
// ===============================

// Detect key press

document.addEventListener("keydown", function (event) {

    // event.key gives which key is pressed
    document.getElementById("key").innerText = "Key pressed: " + event.key;
});



// ===============================
// 🧠 TEACHING NOTES
// ===============================

/*
1. onclick → simple, but not preferred for big projects

2. addEventListener → best practice
   - can add multiple events
   - cleaner code

3. input event → used in forms, search bars

4. keydown → detects keyboard keys

👉 Events make websites interactive
👉 Without events → no user interaction
*/