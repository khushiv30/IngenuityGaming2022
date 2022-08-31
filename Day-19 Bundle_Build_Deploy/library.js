export default function(){
    console.log("This is an important information");
}

let message="This is module concept";

let display = (name)=>{
    return `Hi ! ${name} Welcome to Ingenuity Gaming !`;
};

class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    displayData(){
        console.log(`Employee Name : ${this.name}\nEmployee Id : ${this.id}\nEmployee Designation : ${this.designation}`);
    }
}

export{message,display,Employee};


