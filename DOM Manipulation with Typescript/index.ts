// var heading = document.querySelector('h1');
// if(heading)
// heading.innerHTML="Khushi Varshney";
// console.log(heading);


                        //   OR 


// var heading = document.querySelector('h1')!;
// heading.innerHTML="Khushi Varshney";
// console.log(heading);


                        //   OR 

var heading = document.querySelector('h1') as HTMLHeadElement;
// let anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);
heading.innerText="DOM Manipultaion Using Typescript";

var input1= document.getElementById('num1') as HTMLInputElement;
var input2= document.getElementById('num2') as HTMLInputElement;

// console.log(input1.value,input2.value);
console.log(heading);


var form = document.querySelector('.myForm') as HTMLFormElement;
form.addEventListener('submit',function(e){
    e.preventDefault();

    let newP = document.createElement('p')
    // newP.innerText=(input1.valueAsNumber + +input2.valueAsNumber) as unknown as string;
    let result:number = input1.valueAsNumber + +input2.value;

    newP.innerText=<string><unknown>result;
    form.appendChild(newP);
});





// export{}

