"use strict";
document.write("<h1>Perform Cumulative Sum using rest Operator on passing variable length to a function</h1>");
function addFunc(...y) {
    let sum = 0;
    let enterValue = prompt("How many numbers will you enter?");
    let p = parseInt(enterValue);
    for (let i = 1; i <= p; i++) {
        let enterValueOfY = prompt(`Enter the values ${p} times`);
        y.push(parseInt(enterValueOfY));
        sum = sum + y[i];
    }
    console.log(y);
    return sum;
}
let func = addFunc(0);
document.write(`<h3> Sum of variables using rest operator : ${func} </h3>`);
document.body.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,45,1) 100%)";
document.body.style.minHeight = "100vh";
document.body.style.fontFamily = "cursive";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.body.style.fontSize = "20px";
document.body.style.overflow = "hidden";
