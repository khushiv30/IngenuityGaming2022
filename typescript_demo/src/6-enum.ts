// enum is used to create constants 
// default enum : 0

enum directions{north,east,west,south} 
console.log(directions.east);    //1


enum directions2{north=1,east,west,south} 
console.log(directions2.east);    //2

enum directions3{north=22,east,west,south} 
console.log(directions3.east);    //23

enum directions5{north="Noth",east="East",west="West",south="South"}; 
console.log(directions5.east);    // East 