let arr1:number[] = [1,2,3,4,5];
arr1.push(11)
console.log(arr1);

let arr2:string[]=[];
arr2[0]="khushi";
arr2[1]="anshika";
arr2[2]="astha";
arr2[3]="pranav";
console.log(arr2);


// Traversing an array 
arr2.forEach((i)=>console.log(i));


// Making an array of mixed data type 

let arr3:(number|string|boolean)[]=[1,2,3,4,5,"abc","khushi","pdghve"];
arr3.push(true);
arr3.push(45);
console.log(arr3);


// making an Array that cannot be updated 
let arr4: readonly number[]=[1,2,3,4,5];
// arr4.push(6) not allowed due to read only 





// Assignment 
let AssignmentArray:number[] = [1,2,3,4,5,6,7];
// output : 5,10,15,20,25,30,35 
