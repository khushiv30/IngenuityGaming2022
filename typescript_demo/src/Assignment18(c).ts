let nos:(number | null) = (prompt("How many numbers will you enter : "));
// nos=parseInt(nos);
let numers:number[] = [];
for (let i = 0; i < nos; i++) {
    // prompt("Enter number "+(i+1) +" :");
    (prompt("Enter number " + (i + 1) + " :"));
    numers.push(i);
}
function add() {
    var sum = 0;
    for (var i = 0; i < a; i++) {
        sum = sum + numers[i];
    }
    return sum;
}
// document.write("Sum of numbers is : " + parseInt(add()));
// document.getElementById('get').innerHTML = add();
document.write(`<h2>Sum generated is : ${add()} </h2>`);