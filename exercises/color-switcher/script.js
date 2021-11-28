console.log('connected');

// get body element
let body = document.querySelector("body");

// select each circle
let yellowCircle = document.getElementById("yellowButton");
let blueCircle = document.getElementById("blueButton");
let whiteCircle = document.getElementById("whiteButton");
let grayCircle = document.getElementById("grayButton");

let heading = document.querySelector("h1");

// add event and function that determines behavior
yellowCircle.addEventListener("click", turnPageYellow)
blueCircle.addEventListener("click", turnPageBlue)
whiteCircle.addEventListener("click", turnPageWhite)
grayCircle.addEventListener("click", turnPageGray)


// define the behavior
function turnPageYellow() {
    heading.style.color = "purple";
    console.log('turn me yellow');
    body.style.backgroundColor = "yellow"
}

function turnPageBlue() {
    heading.style.color = "orange";
    console.log('turn me blue')
    body.style.backgroundColor = "blue"
}

function turnPageWhite() {
    heading.style.color = "black";
    body.style.backgroundColor = "white"
}

function turnPageGray() {
     heading.style.color = "white";
    body.style.backgroundColor = "gray"
}