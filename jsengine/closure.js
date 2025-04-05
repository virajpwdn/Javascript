// let a = function (){
//     let count = 0;
//     let x = function (){
//         count++;
//         return count;
//     }
//     return x;
// }

// const counter1 = a();
// console.log(a());
// console.log(counter1());
// console.log(counter1());
// console.log(a);

// create a function, that takes argument and return function, return function should add that number to any input

// let b = function hola(a,b){
//     let c = 20;
//     let e = 40;
//     let d = function hey(c,d) {
//         console.log(a,b,c,d);
//     }

//     let greeter = function greeting(){
//         let greet = function name(name){
//             console.log(`Hello ${name}`);
//         }
//         return greet;
//     }
//     return d;
// }

// b();

// after 3 times it should say 1,2,3 then it should say rate limit no more API call;
// let a = function(){
//     let count = 0;
//     if(count >= 3) console.log("No more API call");
//     let print = function(){
//         console.log(count++);
//         // return count;
//     }
//     return print();
// }

// Toggle switch
// let toggle = function(){
//     let tog = 1;
//     if(tog == 1){
//         console.log("On");
//         tog = 0;
//     }else {
//         console.log("Off");
//         toggle = 1;
//     }
// }

// let toggle = (function () {
//     let tog = 1;

//     return function () {
//         if (tog === 1) {
//             console.log("On");
//             tog = 0;
//         } else {
//             console.log("Off");
//             tog = 1;
//         }
//     };
// })();
// toggle();
// toggle();

// let passwordChecker = function(){
//     let password = "Hello@123";
//     return function(checkPassword){
//         if(checkPassword != password){
//             console.log("You have entered wrong password");
//         }else {
//             console.log("Right password");
//         }
//     }
// }
// const check = passwordChecker();
// check("Hello@123");

// let timer = function () {
//   let counter = 0;
//   return function () {
//     if (counter == 0) {
//       console.log("Hello world");
//       counter = 1;
//     } else {
//       console.log("not allowed");
//       setTimeout(() => {
//         counter = 0;
//       }, 3000);
//     }
//   };
// };

// const timeCheck = timer();
// timeCheck();

// return fun 1 st time hello after that no output but after 3 sec it should print

// create a function which accepts callback fun, 3 times called with diff inputs now the inps are 3 now it should return callback

// let delay = function(){
//     let count = 3;
//     let print = function(c) {
//         if(c == 3){
//             return ()=>{
//                 console.log("Hello");
//             }
//         }
//         return;
//     }
// }
// let delayCount = delay();
// delayCount(3);

function collectInputs(callback) {
    let inputs = [];
    let count = 0;

    return function(input) {
        inputs.push(input);
        count++;

        if (count === 3) {
            return callback(...inputs);
        }

        return "Waiting for more inputs...";
    };
}

let a = collectInputs(console.log);
a("hey");
a("hey");
a("hey");