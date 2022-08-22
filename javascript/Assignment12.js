// //Selector 

// var toInput = document.querySelector(".todo-input");
// var btn = document.querySelector("button");
// var todoList = document.querySelector(".todo-list");

// var i=0;

// btn.onclick = function createToDo(e) {
//     e.preventDefault();

// window.localStorage.setItem("my list "+i,toInput.value);
//     i++;

//     var newDiv = document.createElement("div");
//     newDiv.classList.add('todo');

//     var newLi = document.createElement("li");
//     newLi.classList.add("todo_item");
//     newLi.innerHTML = toInput.value;
//     // newDiv.appendChild(newLi);
//     var NewLi=e.target;
//     if(toInput.value==""){
//         alert("You cannot enter empty item");
//         newDiv.appendChild(!newLi);
//     }
//     else{
//         newDiv.appendChild(newLi);
//     }


//     var cmpltbtn = document.createElement("button");
//     cmpltbtn.classList.add("cmpltbtn");
//     cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
//     newDiv.appendChild(cmpltbtn);


//     var deltbtn = document.createElement("button");
//     deltbtn.classList.add("deltbtn");
//     deltbtn.innerHTML = '<i class="fa fa-trash"></i>';
//     newDiv.appendChild(deltbtn);


//     todoList.appendChild(newDiv);

//     toInput.value = "";

// };

// todoList.onclick = function checkbtn(e) {
//     var check = e.target;     //e.target btata hai kis cheez ko target kiya hua hai 
//     // console.log(check);

//     if (check.classList[0] == "deltbtn") {
//         // console.log("Delete button pressed");
//         var parentNode = check.parentElement;
//         // console.log(parentNode);
//         parentNode.remove();
//     }
//     else if (check.classList[0] == "cmpltbtn") {
//         // console.log("Complete button pressed");
//         var parentNode = check.parentElement;
//         parentNode.classList.add("check");
//     }
// };

// btn.onclick=storeData;

// function storeData(){
//     var data={
//         toInput:toInput.value,
//     };
//     localStorage.setItem("toInput",JSON.stringify(data));
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Selector 

var toInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList = document.querySelector(".todo-list");

var i=0;
// const arr=["sjbj"];
// console.log(arr);
btn.onclick = function createToDo(e) {
    e.preventDefault();
    // arr[i].push(toInput.value);
    window.localStorage.setItem("my list "+i,toInput.value);
    i++;
    // console.log(toInput.value);
    // var a=toInput.value;
    // arr[i].push(a);

    // console.log(arr[i].push(a));
    // window.localStorage.setItem("my list",arr[i].push(toInput.value));
    var newDiv = document.createElement("div");
    newDiv.classList.add('todo');

    var newLi = document.createElement("li");
    newLi.classList.add("todo_item");
    newLi.innerHTML = toInput.value;
    // newDiv.appendChild(newLi);
    var NewLi=e.target;
    if(toInput.value==""){
        alert("You cannot enter empty item");
        newDiv.appendChild(!newLi);
    }
    else{
        newDiv.appendChild(newLi);
    }
     

    // btn.onclick = storeData;

    //   function storeData() {
    //     var data = {
    //       toInput: toInput.value,
         
    //     };
    //     console.log(data);
    //     localStorage.setItem("toInput",JSON.stringify(data));
    //     alert("Data Stored in Local Storage");
    //   }
    


//     localStorage.setItem('name', 'Angular');
// 
//     let name = localStorage.getItem('name'); 
//     alert(`Hello ${ name }!`);
    

   

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);


    var deltbtn = document.createElement("button");
    deltbtn.classList.add("deltbtn");
    deltbtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);


    todoList.appendChild(newDiv);

    toInput.value = "";

};

todoList.onclick = function checkbtn(e) {
    var check = e.target;     //e.target btata hai kis cheez ko target kiya hua hai 
    // console.log(check);

    if (check.classList[0] == "deltbtn") {
        // console.log("Delete button pressed");
        var parentNode = check.parentElement;
        // console.log(parentNode);
        parentNode.remove();
    }
    else if (check.classList[0] == "cmpltbtn") {
        // console.log("Complete button pressed");
        var parentNode = check.parentElement;
        parentNode.classList.add("check");
    }
};