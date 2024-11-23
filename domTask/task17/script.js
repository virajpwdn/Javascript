let img = document.querySelectorAll(".images img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal img");
console.log(img);
let body = document.querySelector("body");

img.forEach(image =>{
    image.addEventListener("click", function(){
        modal.style.display = "flex";
        modalImg.src = image.src;
    })
})

modal.addEventListener("click", function(){
    modal.style.display = "none";
})