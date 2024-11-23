let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    console.log("hello");
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.style.height = "200px";
    });
});