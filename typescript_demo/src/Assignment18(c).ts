// document.write("Perform Cumulative Sum using rest Operator on passing variable length to a function")

// let nos:(number | null) = (prompt("How many numbers will you enter : "));
// // nos=parseInt(nos);
// let numers:number[] = [];
// for (let i = 0; i < nos; i++) {
//     // prompt("Enter number "+(i+1) +" :");
//     (prompt("Enter number " + (i + 1) + " :"));
//     numers.push(i);
// }
// function add() {
//     var sum = 0;
//     for (var i = 0; i < a; i++) {
//         sum = sum + numers[i];
//     }
//     return sum;
// }
// // document.write("Sum of numbers is : " + parseInt(add()));
// // document.getElementById('get').innerHTML = add();
// document.write(`<h2>Sum generated is : ${add()} </h2>`);





document.write("<h1>Perform Cumulative Sum using rest Operator on passing variable length to a function</h1>")

function addFunc(...y: number[]) {
    let sum:number = 0;
    let enterValue:any = prompt("How many numbers will you enter?");
    let p:number = parseInt(enterValue);
    for (let i:number = 1; i <= p; i++) {
        let enterValueOfY:any = prompt(`Enter the values ${p} times`);
        y.push(parseInt(enterValueOfY));
        sum = sum + y[i];
    }
    console.log(y);
    return sum;
}
let func = addFunc(0);
document.write(`<h3> Sum of variables using rest operator : ${func} </h3>`)

document.body.style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,45,1) 100%)";
// document.body.style.color="darkgray";
document.body.style.minHeight = "100vh";
document.body.style.fontFamily = "cursive";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.body.style.fontSize = "20px";
document.body.style.overflow="hidden";