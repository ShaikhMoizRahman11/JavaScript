let box = document.getElementById("box");

let message = document.getElementById("message");


// Mouse Over Event

box.addEventListener("mouseover", function(){

    box.style.backgroundColor = "orange";

    box.innerText = "Mouse Over";

});



// Mouse Out Event

box.addEventListener("mouseout", function(){

    box.style.backgroundColor = "lightblue";

    box.innerText = "Mouse Out";

});



// Double Click Event

let dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", function(){

    message.innerText = "Button Double Clicked";

});



// Mouse Down Event

let mouseBtn = document.getElementById("mouseBtn");

mouseBtn.addEventListener("mousedown", function(){

    mouseBtn.innerText = "Mouse Down";
    mouseBtn.style.backgroundColor="black";
    mouseBtn.style.color="white";

});



// Mouse Up Event

mouseBtn.addEventListener("mouseup", function(){

    mouseBtn.innerText = "Mouse Up";
    mouseBtn.style.backgroundColor="aquamarine";
    mouseBtn.style.color="red";

});



// Focus Event

let focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", function(){

    focusInput.style.backgroundColor = "yellow";

});



// Blur Event

focusInput.addEventListener("blur", function(){

    focusInput.style.backgroundColor = "black";

});