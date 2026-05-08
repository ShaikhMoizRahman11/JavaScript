// Change Text
let textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", function() {
    document.getElementById("heading").innerText = "Text Changed!";
});


// Change Style
let styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function() {
    let heading = document.getElementById("heading");
    heading.style.color = "red";
    heading.style.backgroundColor = "yellow";
});


// Add Element
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.innerText = "New Item";
    document.getElementById("list").appendChild(li);
});


// Remove Element
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function() {
    let list = document.getElementById("list");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});


// Change Attribute
let imgBtn = document.getElementById("imgBtn");

imgBtn.addEventListener("click", function() {
    let img = document.getElementById("image");
    img.setAttribute("src", "monument2.jpg");
});

//Ol items
let olitem=document.querySelector("#list1");
let btn =document.querySelector("#btn");
let btn1=document.querySelector("#btn1");

let fruits=["Apple","Banana","Orange","Mango","kiwi","coconut"];
let index=0;

btn.addEventListener("click",function(){
    if(index<fruits.length){
 let li=document.createElement("li");
 li.innerText=fruits[index];
 olitem.appendChild(li);
 index++;
    }
    else{
        // alert("no more fruits to be added");
        btn.disabled=true;
    }
});

btn1.addEventListener("click",function(){
    if(olitem.lastChild){
        olitem.removeChild(olitem.lastChild);
    }
});