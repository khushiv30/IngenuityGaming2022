// var ages=[32,43,16,40];
// var result = ages.filter(()=>{
//    return age>18; 
// });




var ages=[32,43,16,40];
var result = ages.filter(filterAge);

function filterAge(age){
    return age>18;
}

console.log(result);




// Example -2 

// let cities=[
//     {name:"Country1",population:3455467},
//     {name:"Country2",population:2455467},
//     {name:"Country3",population:1455467},
//     {name:"Country4",population:7455467},
//     {name:"Country5",population:6455467},
// ];

// var bigCities=[];

// for(var i=0;i<cities.length;i++){
//     if(cities[i].population>3000000){
//         bigCities.push(cities[i]);
//     }
// }
// console.log(bigCities);





// Method-2 for Example -2

// let cities=[
//     {name:"Country1",population:3455467},
//     {name:"Country2",population:2455467},
//     {name:"Country3",population:1455467},
//     {name:"Country4",population:7455467},
//     {name:"Country5",population:6455467},
// ];
// var bigCities=cities.filter((city)=>city.population>3000000);
// console.log(bigCities);




// Applying sorting on above example  :

// let cities=[
//     {name:"Country1",population:3455467},
//     {name:"Country2",population:2455467},
//     {name:"Country3",population:1455467},
//     {name:"Country4",population:7455467},
//     {name:"Country5",population:6455467},
// ];
// var bigCities=cities.filter((city)=>city.population>3000000).sort().reverse();
// console.log(bigCities);



let cities=[
    {name:"Country1",population:3455467},
    {name:"Country2",population:2455467},
    {name:"Country3",population:1455467},
    {name:"Country4",population:7455467},
    {name:"Country5",population:6455467},
];
var bigCities=cities.filter((city)=>city.population>3000000).sort().reverse();       // sorted according to name
console.log(bigCities);