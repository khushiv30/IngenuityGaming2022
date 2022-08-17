// setTimeout Function

// setTimeout(callback , timer);




// setTimeout(callback,3000);

function callback(){
    console.log("Hello Friends");
}



setTimeout(()=>{
    console.log("Hello Hello");
},5000);





var myInterval = setInterval(callback,2000);
clearInterval(myInterval);