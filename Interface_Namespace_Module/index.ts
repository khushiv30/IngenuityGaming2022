///<reference path="Student.ts"/>
///<reference path="Teacher.ts"/>


let stu1:StudentNS.StudentInt = new StudentNS.Student("Khushi Varshney",232323);
stu1.dispDetails();




let t1 = new TeacherNS.Teacher("Pankaj",["Flutter","React","NodeJs"])
console.log(`Teacher name: ${t1.fullname} | Subjects: ${t1.subjects}`)