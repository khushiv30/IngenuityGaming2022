// In JS functions are first class citizens
// 1.Functions can be assigned to a a variable
// 2.Functions can be used as an argument
// 3.Functions can also be used as a return statement

// callback : 
// 1. Functions can be used as a argument
// 2. A callback is a a function that is executed after another function has finished executing 

var students=[
    {name : "Sachin",Subject:"Java"},
    {name: "Khushi",Subject:"OOPs"},
    {name:"Rupali",Subject:"C++"},
];

function admitStudents(student,callback){
    setTimeout(() => {
        students.push(student);
        console.log("Student has been admitted");
        callback();
    }, 3000);
}

function displayStudent(){
    setTimeout(() => {
        var str="";
        students.forEach((student) => {
            str+=student.name+" ";
    });
    console.log(str);
    console.log("Students have been fetched");
    }, 1000);
}



var newStudent={name:"Rahul",Subject:"React"};
admitStudents(newStudent,displayStudent);
// displayStudent();