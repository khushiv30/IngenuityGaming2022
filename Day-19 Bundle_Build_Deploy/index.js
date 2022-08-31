// import {message} from "./library.js";
// import {display} from "./library.js";
// import {Employee} from "./library.js";

// import {message,display,Employee} from "./library.js";

import * as Data from "./library.js";

import ImportantMsg from "./library.js";

console.log(Data.message);
var name = prompt("Enter Your Name");
var data=Data.display(name);
console.log(data);

let emp1 = new Data.Employee("Avneet",1,"Gaming Intern");
emp1.displayData();

ImportantMsg();