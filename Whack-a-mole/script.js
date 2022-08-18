var h1=document.querySelector('h1');
var mole=document.querySelector('#mole');
var dirt=document.querySelector('#mud');
var startbtn=document.querySelector('#start');
var alldirt=document.querySelectorAll('.dirt');
var allmoles=document.querySelectorAll('.mole');
var points=document.querySelector('.points');
var pointsNum=document.querySelector('#currentPoint');



// Generating Random Number :
// Math.floor(Math.random() * (maximum – minimum + 1)) + minimum
var counter=0;


function start(){
    // h1.style.visibility="hidden";
    startbtn.style.visibility="hidden";
    mole.style.visibility="hidden";
    dirt.style.visibility="hidden";
    for(var i=0;i<6;i++){
        alldirt[i].style.visibility="visible";
    }
    points.style.visibility="visible";
    pointsNum.style.visibility="visible";

    setInterval(()=>{
        var randomNum=Math.floor(Math.random()*6);
        allmoles[randomNum].style.visibility="visible";
        setTimeout(() => {
            allmoles[randomNum].style.visibility="hidden";
        }, 900);
    },1000);

}

function incr(){
    counter++;
    // console.log(counter);
    document.getElementById("currentPoint").innerHTML=counter;
}