// let btn = document.querySelector("button");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let body = document.querySelector("body")

let flag = 0;

// dark.addEventListener("click", function(){
//     if(flag === 0){
//         body.style.backgroundColor = "black";
//         dark.style.display = "none";
//         light.style.display = "block";
//         flag = 1;
//     } else{
//         body.style.backgroundColor = "white";
//         light.style.display = "none";
//         dark.style.display = "block";
//         flag = 0;
//     }
// })

dark.addEventListener("click", function(){
        // body.style.transition = "transform all 0.4s ease-in"
        body.style.backgroundColor = "black";
        dark.style.display = "none";
        light.style.display = "block";
});

light.addEventListener("click", function(){
    body.style.backgroundColor = "white";
    light.style.display = "none";
    dark.style.display = "block";
})