let teams = [
    {
        team: "RCB",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg"
    },
    {
        team: "CSK",
        image: "https://i.pinimg.com/736x/9a/54/f5/9a54f50f4825e0386c37d70698771c9c.jpg"
    },
    {
        team: "MI",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg"
    },
    {
        team: "RR",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjcBEz7Zh6eRp-OCscbJO2LzyAn5MWfgLQfWRaUoRDNIF6FjWeNHxVnbv1augvfjTF_A&usqp=CAU"
    }
];

let btn = document.querySelector("button");
let img = document.querySelector("img");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*teams.length);
    let selected = teams[random];

    h1.innerText = selected.team;
    img.src = selected.image;
});