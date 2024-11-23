let btn = document.querySelector("button");
let container = document.querySelector(".container");
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

let boxHeight = document.querySelector(".box").offsetHeight;
let boxWidth = document.querySelector(".box").offsetWidth;

let maxX = containerWidth - boxWidth;
let maxY = containerHeight -boxHeight;

let box = document.querySelector(".box");

btn.addEventListener("click", function(){
    let random1 = Math.floor(Math.random()*maxX);
    let random2 = Math.floor(Math.random()*maxY);
    box.style.right = random1+"px";
    box.style.bottom = random2+"px";
})