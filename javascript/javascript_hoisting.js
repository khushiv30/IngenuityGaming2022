// Javascript Hoisting will make declaration to be automatically placed at the top 
//NOte : Only declaration is hoisting , not the initialization

x=10;
console.log(x);
var x;

// ye iss se ooper wale se koi prblm nhi hai 

console.log(x);
var x=10;

// ye undefined dega ... ye prblm hai