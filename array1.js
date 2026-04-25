//An Array is list of value stored in a single variable
let a=["Cat","Dog","Cow","Donkey","Camel","Horse"]
let b=[9,2,3,4,1,54,6,72,83,7];;
let e=["cat","dog","cat","eagle","hen","cat"];

//Finding an element in Array
// console.log(b.find(v=>v===83));
// console.log(a.find(c=>c==="Cow"));

//Combining values of two arrays
let c=[1,2,3,4];
let d=[3,4,5,6];
// console.log(c.concat(d));
// console.log(c);

// //Slice & Splice method
// let smallanimals=a.slice(0,2);
// console.log(smallanimals);
// console.log(a);

// let smallanimals=a.splice(0,2)
// console.log(smallanimals);
// console.log(a);

//Splice (start, deleteCount, newItems)
// let newanimals=a.splice(2,1,"Elephant");
// console.log(newanimals);
// console.log(a);

//Join 
// console.log(a.join("-"));

//Sorting in Array
// console.log(a.sort());
// console.log(a);

// console.log(b.sort());
// console.log(b);

//Custom Sorting
// console.log(b.sort((a,b)=>a-b));
// b.sort((a,b)=>{
//     a-b;
// })

//Reveresing an Array
// console.log(b.reverse());

// console.log(e.find(c=>c==="cat"));

e.forEach((element,index) => {
    if(element=="cat"){
        console.log(`cat found at: ${index}`);
    }
});

// for(let el of a){
//     console.log(el);
// }




