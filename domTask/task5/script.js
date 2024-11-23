let btn = document.querySelector("button");
let circle = document.querySelector(".circle");


btn.addEventListener("click", function(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);
    
    circle.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    circle.innerHTML = `${color1}, ${color2}, ${color3}`
})

circle.addEventListener("mouseover", function(){
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);

    circle.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    circle.innerHTML = `${color1}, ${color2}, ${color3}`
})