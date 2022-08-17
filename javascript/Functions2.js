// var obj = {
//     firstName : "Sachin",
//     lastName : "Yadav",
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     },
// };

// console.log(obj.fullName());





// var person1={
//     firstName: "Sara",
//     lastName : "Khan",
// };

// console.log(obj.fullName.call(person1));





var person={
    fullName : function(city,country){
        return this.firstName+" "+this.lastName +" "+city+" "+country;    
    },
};

var person1={
    firstName:"Sara",
    lastName:"Khan",
};

console.log(person.fullName.call(person1,"Mumbai","India"));




// Apply Method 

var person2={
    firstName:"Mohit",
    lastName:"Sharma",
};
console.log(person.fullName.apply(person2,["Delhi","India"]));




//Bind Method 



