// JavaScript Object : Objects is non-primitive data types

// Way-1 to create objects

var person ={
    name :"Pankaj",
    age : 30,
    city : {cityname :"Agra" , pincode :12346 },
    sector : [1,2,3,4,5],
    details : function(){ 
        return this.name+" from "+this.city.cityname;
    }
}

console.log(person);
console.log(person.name);
console.log(person.city.cityname);
// console.log("Sector : "+person.sector[i]);
console.log(person.details());

var student = new Object();
student.name="Manish";
student.age=22;
student["city"]="Mathura";