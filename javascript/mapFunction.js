var myArr=[1,3,5,7,10];
var newArr=myArr.map((i)=>i*10);
console.log(newArr);






var users=[
    {firstName : "Sara",lastName :"Khan"},
    {firstName :"Khushi",lastName:"Varshney"},
    {firstName :" karan",lastName:"Varshney"},
];


var fullName=users.map((u)=>{
    return u.firstName+" "+u.lastName;
});

console.log(fullName);

