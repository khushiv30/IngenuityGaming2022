// let a:unknown = "1";
// let data: number = a;       // not allowed ... typescript strictly typed property



// Casting : Method-1

// let str : string = "22";
// let numVar:number = str as unknown as number
// console.log(numVar);


// Casting : Method-2 

let str : string = "22";
let numVar:number = <number><unknown>str
console.log(numVar);