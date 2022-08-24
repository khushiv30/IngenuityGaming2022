// console.log("This is statement-1");
// console.log("This is statement-2");
// console.log("This is statement-3");

////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("This is statement-1");
// var r=0;
// for(var i=0;i<=10000000000;i++) r+=1;
// console.log(r);
// console.log("This is statement-2");

// setTimeout has asynchronous behaviour

///////////////////////////////////////////////////////////////////////////////////////////////////////////

setTimeout(() => {
var r=0;
for(var i=0;i<=10000000000;i++) r+=1;
console.log(r);
});
console.log("This is statement-1");
console.log("This is statement-2");
console.log("This is statement-3");
console.log("This is statement-4");

