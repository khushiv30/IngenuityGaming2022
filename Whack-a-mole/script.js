var h1=document.querySelector('h1');
var mole=document.querySelector('#mole');
var dirt=document.querySelector('#mud');
var startbtn=document.querySelector('#start');
var alldirt=document.querySelectorAll('.dirt');
var allmoles=document.querySelectorAll('.mole');
var points=document.querySelector('.points');
var pointsNum=document.querySelector('#currentPoint');
var won=document.getElementById("won");
var lost=document.getElementById("lost");
var time= document.querySelectorAll(".seetime");

// var audio = new Audio('../Whack-a-mole/all-time.wav');
// audio.play();


// Generating Random Number :
// Math.floor(Math.random() * (maximum – minimum + 1)) + minimum
var currtime=60;
var counter=0;

// var tym=20000;
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
    
    for(var i=0;i<time.length;i++){
        time[i].style.visibility="visible";
    }
    
    
    let timerid = setInterval(()=>{
        
        document.getElementById('curtime').innerText=currtime--;
        if(currtime<1){
            for(var i=0;i<time.length;i++){
                time[i].style.visibility="hidden";
            }
        }
        var randomNum=Math.floor(Math.random()*6);
        allmoles[randomNum].style.visibility="visible";
        setTimeout(() => {
            
            for(var i=0;i<allmoles.length;i++){
            allmoles[i].style.visibility="hidden";
            }

        }, 900);
        var audio = new Audio('../Whack-a-mole/mixkit-winning-a-coin-video-game-2069.wav');
            audio.play();
    },1000);

    setTimeout(() => {
        clearInterval(timerid);
        for(var i=0;i<6;i++){
            allmoles[i].style.visibility="hidden";
        }  
        if(counter>0){
            won.innerHTML="<h3>YOU WON</h3>"
            won.style.visibility="visible";  
            pointsNum.style.visibility="hidden";  
        }
        else{
            won.innerHTML="<h3>YOU LOST</h3>"
            // lost.style.visibility="visible";
            won.style.visibility="visible";
            pointsNum.style.visibility="hidden";
            
        }
        for(var i=0;i<6;i++){
            alldirt[i].style.visibility="hidden";
        }
        // for(var i=0;i<6;i++){
        //     allmoles[i].style.visibility="hidden";
        // }            
        h1.style.visibility="hidden";
        points.style.visibility="hidden";
        time.style.visibility="hidden";
        // pointsNum.style.visibility="hidden";
    },60000);


}

function incr(){
    counter++;
    // console.log(counter);
    document.getElementById("currentPoint").innerHTML=counter;
}




// var highscore=0;
// if(counter>highscore){
//     // highscore=counter;

// }
// else{
//     // highscore=highscore;
// }




// var tym=120000;
// setTimeout(timer,tym);

// function timer(){
//     if(tym==120000){
//         console.log("time over");
//         if(counter>highscore){
//             won.style.visibility="visible";
//             h1.style.visibility="hidden";
//         }
//         else{
//             lost.style.visibility="visible";
//             h1.style.visibility="hidden";
//         }
//     }
// }

// function mytym(){

// }



