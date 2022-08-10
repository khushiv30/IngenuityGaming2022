// Javascript operators

// Arithmetic
// +,-,*,/,%,++,--

var a=20,
b=20;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
console.log("Result = "+c);
console.log("Result = "+d);
console.log("Result = "+e);
console.log("Result = "+f);
console.log("Result = "+g);


// Conditional/Relational operators
// <,>,<=,>=,==,===,!=,!==
// Results in true and false

(a=10),(b=20),(c=30);
console.log(a<b);    //true
console.log(a<=b);   //true
console.log(a>b);    //false
console.log(a>=b);   //false
console.log(a!=b);   //true

a="20";
// Comparison Operator : Compares the value
console.log(a==b);     //true 
// Strict Comparison Operator : Compares value as well as data type 
console.log(a===b);     //false

console.log(a!=b);      //false
console.log(a!==b);     //true

//Logical Operators
var result=(a<b) && (a!=b);
console.log("Logical And : "+result);     //false

var result2="hello" && (a==b);
console.log("Answer Now : "+result2);    //true

var result3="hello" || a!=b;
console.log("Logical Or : "+result3);      //hello

var result4=(a!=b) || "hello";
console.log(result4);

console.log("Logical Not : "+!result4);

// Assignment Opeartor
// =,+=,-=,/+,*=,%=

b=55;
console.log((a=b));
console.log((a+=b));

// ternary Operator

result5=(a!=b) ? "Hi! This is true" : "Hi! This is false";
console.log(result5);     //Hi! This is true

