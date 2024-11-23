// let box = document.querySelector(".box");

// box.addEventListener("click", function(){
//     let color1 = Math.floor(Math.random()*255);
//     let color2 = Math.floor(Math.random()*255);
//     let color3 = Math.floor(Math.random()*255);

//     box.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
// })

let teams = ["CSK", "MI", "RCB", "RR", "GT", "PB", "DC", "SRH", "KKR", "LSG"];

// let random = Math.floor(Math.random()*teams.length);
let btn = document.querySelector("button");
let span = document.querySelector("span");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*teams.length);
    span.innerText = teams[random];
})