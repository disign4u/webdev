"use strict";
// Get the things on the page
const svgPath = document.body.querySelector("svg path");
const btn = document.getElementById("go");
const circle = document.body.querySelector(".circle");

const timing = {
    duration: 1000,
    easing: "linear",
    fill: "both"
};

// Get the length of the path and set up the dash so it starts 'full'
const lineLength = svgPath.getTotalLength();
svgPath.style.strokeDasharray = lineLength + " " + lineLength;
svgPath.style.strokeDashoffset = "0";

const svgPath2 = document.getElementById("pfad1");
const circle2 = document.getElementById("b1");
// Get the length of the path and set up the dash so it starts 'full'
const lineLength2 = svgPath2.getTotalLength();
svgPath2.style.strokeDasharray = lineLength2 + " " + lineLength2;
svgPath2.style.strokeDashoffset = "0";


// Use WAAPI to set things off
btn.addEventListener("click", () => {
    
    svgPath2.animate(
        [{
                strokeDashoffset: "0"
            }, {
                strokeDashoffset: `-${lineLength}`
            }
        ],
        timing
    );
});

