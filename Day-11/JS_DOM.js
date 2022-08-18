// console.log(document.head);


// var x=document.title;


document.title="New Title";


// DOM References

console.log(document.title);

var x=document.getElementById('head-1');
console.log(x);

var y=document.getElementsByClassName("para");
console.log(y);

var z=document.getElementsByTagName('ul');
console.log(z);


var hh2=document.querySelector("#head-2");
console.log(hh2);               //points to only the first one


var h3=document.querySelector(".para");
console.log(h3);               // first para ko access karega .... lekin agar second ko krna hai toh .... h3(1) ese likhenge .... yahaan p 1 index hai


var para2=document.querySelectorAll(".para");
console.log(para2[1]);

var h2=document.getElementById('head-2');


// DOM Manipulation

x.style.backgroundColor="yellow";
x.innerText="New Heading";


// h2.style.display="none";


h2.style.visibility="hidden";


para2[1].style.fontfamily="arial";
para2[1].style.color="red";
para2[1].style.border="2px solid blue";




// var newLi=document.createElement("li");
// newLi.textContent="New Item";
// z.appendChild()




for(var i=0;i<y.length;i++){
    y[i].style.color="blue";
}            // hr para p lagaane k liye .... loop m lena padega 




