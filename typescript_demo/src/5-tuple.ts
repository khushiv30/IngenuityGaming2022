let tuple:[number,string,number]=[123,"khu",234];
tuple.push(3453);
// tuple.push(true);  // Not assignable
console.log(tuple);


// Agar non-changeable bnana hai toh 
// let tuple:readonly [number,string,number]=[123,"khu",234];
// tuple.push(3453);    // ye push kaam hi nhi karega 
// console.log(tuple);

