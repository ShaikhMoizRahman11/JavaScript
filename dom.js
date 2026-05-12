/* DOM : It stands for Document Object Model
 It tells that the whole html file is treated as Document in JS which creates a tree
*/


// let ele=document.getElementById('para');
// ele.innerText="hello";

// document.getElementById('para').innerText="Hii there whatsup";
// let tgg=document.getElementsByTagName('h1');
// tgg[1].innerHTML="hii there";

// ===============================
// 📘 WHAT IS DOM?
// ===============================

// DOM = Document Object Model
// It represents HTML as a tree structure

/*
Example:

<html>
  <body>
    <p>Hello</p>
  </body>
</html>

JS sees it like:
document -> html -> body -> p

We use JavaScript to:
✔ Change text
✔ Change style
✔ Add/remove elements
✔ Handle user actions
*/


// ===============================
// 🎯 DOM MANIPULATION
// ===============================

// DOM Manipulation means:
// "Changing HTML using JavaScript"



// ===============================
// 📘 DOM BASICS - AUTO EXECUTION
// ===============================

// This code runs automatically when page loads



// ===============================
// 1️⃣ ID SELECTOR
// ===============================

let ele = document.getElementById("para");

ele.innerText = "Changed using ID selector";
ele.style.color = "red";



// ===============================
// 2️⃣ CLASS SELECTOR
// ===============================

let items = document.getElementsByClassName("text");
items[0].innerHTML="value changes using class selector";

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "Changed using class selector";
    items[i].style.color = "blue";
}



// ===============================
// 3️⃣ TAG SELECTOR
// ===============================

let headings = document.getElementsByTagName("h2");

for (let i = 0; i < headings.length; i++) {
    headings[i].innerHTML = "Updated using tag selector";
    headings[i].style.color = "green";
}



// ===============================
// 4️⃣ QUERY SELECTOR (MODERN)
// ===============================

// First matching element
let firstPara = document.querySelectorAll("#para");
firstPara.style.backgroundColor = "yellow";

// All matching elements
// let allText = document.querySelectorAll(".text");

// allText.forEach(function(item) {
//     item.style.border = "2px solid black";
// });



// ===============================
// 🧠 TEACHING NOTE
// ===============================

/*
Explain to students:

- Page loads → JS runs automatically
- No button / no click needed

Tomorrow:
👉 You will introduce EVENTS (onclick, addEventListener)
*/
/*  ===============================
    5 INNER HTML & INNER TEXT
    ===============================
    1. innerHTML
        It reads or sets HTML content (including tags)
        It understand plain text as well as html tags
*/
document.getElementById("demo").innerHTML = "<b>Hello</b>";

/*2. innerText
        It only works with plain text (ignores HTML tags)
        It doesnt understand html tags, It is used to add plain text only
*/
// document.getElementById("demo").innerText = "<b>Hello</b>";

// ===============================
// 🧠 IMPORTANT DIFFERENCE
// ===============================

/*
getElementById → single element

getElementsByClassName → multiple (HTMLCollection)

getElementsByTagName → multiple (HTMLCollection)

querySelector → first match

querySelectorAll → all matches (NodeList)

✔ Modern JS prefers querySelector & querySelectorAll
*/