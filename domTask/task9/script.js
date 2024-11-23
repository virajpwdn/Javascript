let span = document.querySelector("span");
let btn = document.querySelector("button");
let inc = 0;


btn.addEventListener("click", function(){
    span.innerText = inc++;
})