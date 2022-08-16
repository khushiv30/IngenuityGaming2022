// function parts 
// 1. Function Definition 
// 2. Function calling 
// 3. Function Arguments (optional)
// 4. Return Values (optional)

// Function Versions 
// 1. Function Without Arguments and without return 

function myFunction1() {            // function definition
    console.log("This is function");
    console.log("It will perform some tasks");
}

myFunction1();               // function calling , ; is not important



// 2. Function with arguments and without return 

function myFunction2(a, b) {
    console.log("Function with Data");
    console.log("Result = " + (a + b));
}

myFunction2(5, 10);

// 3. Function with arguments and without return

function myFunction3(a, b) {
    return a + b;
}

var result = myFunction3(20, 20);
console.log("Result = " + result);
console.log("Data Recieved = " + myFunction3(30, 25));
console.log("Data Recieved = " + myFunction3("Hello", "World"));


function sayHi(message) {
    if (message) return message;
    // else return;           -else 1
    else return "No data is recieved";    // -else 2
}

console.log(sayHi("Hello"));
// console.log(sayHi());    //this will show undefined     -else 1
console.log(sayHi());




// Correct Way for next function 

function sayHi(message) {
    if (!message) return;
    else return message;
}

console.log(sayHi("Hello"));
// console.log(sayHi());    //this will show undefined     -else 1
console.log(sayHi());




function add(a, b) {
    return a + b;
}

console.log("Sum of Numbers = " + add(2, 23));
console.log("Sum of numbers = " + add(5));



function add2(a, b = 0) {
    return a + b;
}
console.log("Sum of Numbers = " + add2(2, 23));
console.log("Sum of numbers = " + add2(5));



function sum() {
    console.log(arguments.length);      // This shows number of arguments passed and not the sum
}

sum(1, 2);
sum(1, 2, 3);
sum(1, 3, 5, 7, 9);

// Comments 



// We can also craete function using Constructor

var myFunction4 = new Function("a", "b", "return a+b");
console.log("Function using constructor : " + myFunction4(5, 10));

// In Javascript , the purpose of Function Constructor is 



// Function Expression : It means storing function definition inside a variable is called funtion expression  It is also k/a Anonymous Function.
// A simple statement that ends with a ; is called an expression 

var a = function () {
    console.log("This ios a function expression");
    return "Hello Friends";
};      //this function is stored inside a variable and has no name 

// To call this function ..... 
console.log(a());



// Self-Invoking Function 

(function () {
    console.log("This is an anonymous function and it's called itself");
})();



// Function hoisting

sayHello(5, 10);
function sayHello(a, b) {
    console.log("Result = " + (a + b));
}




// Hoisting on function expression is not allowed as shown below

// adds(5, 10);

// var adds = function () {
//     return a + b;
// };



// In javascript function overriding is allowed but not overloading 






// Javascript Scope : Visibility of code

// There are 3 types of scope :
// 1. Block Scope 
// 2. Function scope
// 3. Global scope

// 1. Block Scope : ES5 there is no block scope , it's available in ES6(lets and const)

// function Scope1() {
//     {
//         var a = 10;
//         console.log(a);
//     }
//     // console.log(a);
// }

// Scope1();
// console.log(a);   //yahaan error aa rha hai 



function Scope1(){
    var a=10;
    console.log("Inside Scope1");
    console.log(a);

    function Scope2(){
        console.log("Inside Scope2");
        console.log(a);
    }
    Scope2();
}
Scope1();
console.log("Outside scope1");



var c=30;               // This is global data or variable 
function Scope1(){
    var a=10;
    console.log("Inside Scope1");
    console.log(a);
    console.log(c);

    function Scope2(){
        var a=20;             // abb ye pehle andar wale a ko lega
        console.log("Inside Scope2");
        console.log(a);
        console.log(c);
    }
    Scope2();
}
Scope1();
console.log("Outside scope1");
console.log(c);






// function checkvar(){
//     data=20;
//     console.log(data);
// }
// checkvar();
// console.log(data);      // jb kisi variable ko without using var bnate hein .... toh woh global consider hoga ..... so ES6 intoduced let keyword





// function checkvar(){
//     let data=20;
//     console.log(data);
// }
// checkvar();
// console.log(data);  







function add3(a,b){
    return a+b;
}

var sum=add3;      
// Reference of add3 function is also stored in sum , so we can call the function using add3() as well as sum()
console.log(sum(5,10));
console.log(add3(5,10));





// Passing function to a function

// function avg(a,b,sum2){
//     return sum2(a,b)/2;
// }
// function add4(a,b){
//     return a+b;
// }
// var sum2=add4;
// var result4=avg(5,10,sum2);
// console.log("Final result = "+ result4);




// Passing function as argument

function avg(a,b,x){
    return x(a,b)/2;
}
function add4(a,b){
    return a+b;
}
var sum2=add4;
var result4=avg(5,10,sum2);
console.log("Final result = "+ result4);



// Function to create objects

function Person(){
    // properties
    this.name="Khushi";
    this.age=21;

    // methods
    this.details=function(){
        return "Name = "+ this.name + " Age = " + this.age;
    };
}

var object1=new Person();
console.log(object1.name);
object1.name="Sachin";
console.log(object1.details());






