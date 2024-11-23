let btn = document.querySelector("button");
let img = document.querySelector("img")

let flag = 0;

btn.addEventListener("click", function(){
    if(flag===0){
        img.style.bottom = "0"
        flag = 1;
    } else{
        img.style.bottom = "-500px"
        flag = 0;
    }
})