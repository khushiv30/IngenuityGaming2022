//SElectors

var canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");

// canvas.width="200";


canvas.width=window.innerWidth;

//Filled the Rectangle
ctx.fillStyle="red";
ctx.fillRect(50,50,150,100);

//Stroke Rectangle
ctx.lineWidth=1
ctx.strokeStyle="blue";
ctx.strokeRect(250,50,150,100);

// Ronded Rectangle
ctx.fillStyle="orange";
ctx.roundRect(450,50,100,100,[10]);
ctx.fill();

ctx.clearRect(40,40,140,90);

//Clear Canvas Command
ctx.clearRect(0,0,canvas.width,canvas.height);     // remove kar deta hai sb


ctx.font="30px Arial";
ctx.fillStyle="green";
ctx.fillText("Hello World",200,200);

ctx.strokeStyle="purple";
ctx.strokeText("Hello World",300,200);


ctx.clearRect(0,0,canvas.width,canvas.height); 

//Draw Triangle
//Path

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(100,200);
// ctx.lineTo(50,50);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle="coral";
ctx.fill();


//Stroke Triangle
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.closePath();
ctx.stroke();

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height); 
}

//Filled Rectangle
ctx.beginPath();
ctx.rect(300,50,150,100)
ctx.fillStyle="blue";
ctx.fill();



//Draw Arc
ctx.beginPath();
ctx.arc(300,300,100,0,Math.PI*2);
ctx.fillStyle="teal";
ctx.fill();
// ctx.stroke();


// radian=(Math.PI)* 2     full circle
// radain=(Math.PI)        half circle


