function changeGreeting() {
    let heading = document.getElementById("greetings");
    heading.innerHTML = "Welcome to my house!";
    heading.style.color = "whitesmoke";

}

function sayHi() {
    let name = prompt("What is your name?");
    let heading = document.getElementById("name");
    heading.innerHTML = "I am " + name + "!";
    heading.style.color = "whitesmoke";

}


function showPhoto(emerald) {
    document.getElementById("mainPhoto").src = emerald;
}




function sayWater() {
    let name = prompt("how can we get water?");
    let heading = document.getElementById("water");
    document.getElementById("water").innerHTML = "We need a " + name + "!";
    document.getElementById("water").innerHTML = '<img src="water.png" alt="WATER BUCKET">';
    heading.style.color = "whitesmoke"; }


const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeBtn.addEventListener("click", function () {
    count++;
    likeCount.textContent = count;
});