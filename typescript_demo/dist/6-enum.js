"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log(directions.east);
var directions2;
(function (directions2) {
    directions2[directions2["north"] = 1] = "north";
    directions2[directions2["east"] = 2] = "east";
    directions2[directions2["west"] = 3] = "west";
    directions2[directions2["south"] = 4] = "south";
})(directions2 || (directions2 = {}));
console.log(directions2.east);
var directions3;
(function (directions3) {
    directions3[directions3["north"] = 22] = "north";
    directions3[directions3["east"] = 23] = "east";
    directions3[directions3["west"] = 24] = "west";
    directions3[directions3["south"] = 25] = "south";
})(directions3 || (directions3 = {}));
console.log(directions3.east);
var directions5;
(function (directions5) {
    directions5["north"] = "Noth";
    directions5["east"] = "East";
    directions5["west"] = "West";
    directions5["south"] = "South";
})(directions5 || (directions5 = {}));
;
console.log(directions5.east);
