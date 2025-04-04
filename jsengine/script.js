// var b = 100;
// {
//     let a = 10;
//     var b = 20;
//     const c = 30;

// }

// console.log(b);

let arr = [1,2,3,4,5];
let obj = {
    username: "macbook",
    brand: "Apple"
}


function abc(a,b){
    console.log(this);
    console.log(a);
    console.log(b);
}

abc.apply(obj, [10, 20]);