// Rest Operator : Packing of data

function display(...data){
    console.log(data);
}

function display(x,y,...data){
    console.log(data);
    console.log(x+" "+y);
}

display(1,2,3,4,5,6,7,8,9,10);

