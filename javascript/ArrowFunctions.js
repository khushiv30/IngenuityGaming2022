// ES5 Based Function 

// var add=function(a,b){
//     return a+b;
// };
// console.log(add(5,10));



// ES6 Fat Arrow Function (Short Syntax)
// Variation-3

var add = (a,b) => a+b;
console.log(add(5,15));



// Variation-1
var sayHello =()=>console.log("This is arrow function of variation 1");
var sayHello =()=>{
    console.log("This is arrow function of variation 1");
    console.log("This is line 2");
};
sayHello();



// Variation-2

var sqr=(a)=>console.log("Result : "+a*a);
(sqr(5));




var myArr=[1,3,5,7];
myArr.forEach((a) => console.log(a*10));

console.log(myArr);