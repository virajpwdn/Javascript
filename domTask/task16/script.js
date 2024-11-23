let setSec = document.querySelector(".sec");
let setMin = document.querySelector(".minute");
let setHr = document.querySelector(".hour");

sec = 0;
min = 0;
hr = 2;

// for(let i=0; i<60; i++) {
//     if(sec <= 60){
//         sec++;
//     }
//     min++;
//     if(min >= 60){
//         hr++;
//     }
// }

function clockUpdate() {
    sec++;
    if(sec >= 60){
        sec = 0;
        min++;

        if(min>=60){
            min = 0;
            hr++;

            if(hr>=24){
                hr = 0;
            }
        }
    }
    setSec.innerText = `0${sec}`;
    setMin.innerText = `0${min}`;
    setHr.innerText = `0${hr}`;
}

setInterval(clockUpdate, 1000);
