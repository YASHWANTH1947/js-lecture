
//can find the element with specific id
const myElement = document.getElementById("demo");
//all elements can be treated as objects
myElement.style.color = "red";


//query selector
document.querySelector(".example");
//in this ,you can use every type of css selector as an argument

//querySelectorAll returns a nodeList
//nodeList is not an arry but it contains forEach loop
const lst= document.querySelectorAll("p");
lst[0].style.backgroundColor = "red"; 
lst.forEach((val)=>{
    val.style.color="white";
})


//getElementByClassName gives html collection , this doent even contain forEach loop
const collection = document.getElementsByClassName("example");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}
//converting to array
const arr=Array.from(collection);
arr.forEach((val)=>{
    val.style.color="white";
})