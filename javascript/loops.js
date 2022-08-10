// Loops in javascriptb

// 1.initialization
// 2.conditions to stop the loop 
// 3.Increment/Decrement to move the loop next iteration 


// 1.while loop 

var i=1;
while(i<=10){
    console.log("This is javascript loop : " + i);
    i++;
}


// 2.Do while loop : Iterate over condition atleast once

var j=1;
{
    console.log("This is javascript so while loop");
    j++;
}
while(j<1);


// 3.For loop

for(var k=1;k<=10;k+=2){
    console.log("Odd : "+k);
}

var k=1;
for(;;){
    if(k>10){
        break;
    }
    console.log("Odd : "+k);
    k+=2;
}


for(var p=1;p<=10;p++){
    if(p==7) break;    //loop wahin bnd kar deta hai 
    console.log(p);
}

for(var p=1;p<=10;p++){
    if(p==7) continue;    // skip krta hai 
    console.log(p);
}




