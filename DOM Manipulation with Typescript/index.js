// var heading = document.querySelector('h1');
// if(heading)
// heading.innerHTML="Khushi Varshney";
// console.log(heading);
//   OR 
// var heading = document.querySelector('h1')!;
// heading.innerHTML="Khushi Varshney";
// console.log(heading);
//   OR 
var heading = document.querySelector('h1');
// let anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href);
heading.innerText = "DOM Manipultaion Using Typescript";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
// console.log(input1.value,input2.value);
console.log(heading);
var form = document.querySelector('.myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newP = document.createElement('p');
    // newP.innerText=(input1.valueAsNumber + +input2.valueAsNumber) as unknown as string;
    var result = input1.valueAsNumber + +input2.value;
    newP.innerText = result;
    form.appendChild(newP);
});
// export{}
