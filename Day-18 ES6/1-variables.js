// ES5 variables
var a=10;    //Glabal scope as well as local scope 


// ES6 variables:
// let,const
// block Scope

// {
//     b=20;
//     console.log(b);
// }
// console.log(b);


// Here c is a block variable : its accessibility is only the block
{
    let c=100;
    console.log(c);
}
// console.log(c);

const sessions=120;
console.log(sessions);
sessions++;
console.log(sessions);

