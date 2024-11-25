let img = document.querySelector("img");
let h = document.querySelector("i");

img.addEventListener('dblclick', ()=>{
    console.log("hello");
    h.style.transform = 'translate(-50%,-50%) scale(2)';

    setTimeout(() => {
        h.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 1000);
})