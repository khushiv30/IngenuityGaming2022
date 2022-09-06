// // abstract class ka object nhi bna skte hein 
// // abstract class may contain abstract methods 

// abstract class Person{
//     // class Properties
//     empCode:number
//     empName:string
//     constructor(protected code:number,protected name:string){
//         console.log("Constructor called");
//         this.empCode=code;
//         this.empName=name;
//     }


//     // class Methods

//     // dispDetail():void{
//     //     console.log(`code: ${this.empCode} Name ; ${this.empName}`);

//     // }

//     // dispDetail=():void=>console.log(`Code : ${this.empCode} Name : ${this.empName}`)
//    abstract dispDetail():void;

// // let emp1=new Person(101,"khushi");
// // emp1.empCode=102;
// // emp1.dispDetail()




// // Access Modifiers 
// // 1. public : can be accessed outside
// // 2. private :  can be accessed only inside class
// // 3. protected : can be accessed inside or inherited class 


// class Employee extends Person
// {
//     private empsal:number;
//     constructor(code:number,name:string,salary:number)
//     {
//         super(code,name);
//         this.empsal=salary;
//     }
//     dispSalary():void {
//         // super.dispDetail();
//         console.log(`Salary : ${this.empsal}`);
//     }

//     //Abstract Method Implementation 
//     dispDetail():void{
//         console.log(`Code ${this.empCode} Name : ${this.empName}`);
//     };
// }


// let employee1 = new Employee(105,"karan",45000);
// employee1.dispDetail();
// employee1.dispSalary();



//////////////////////////////////////////////////////////////////////////////////////////////////


// Anshika ka Code 


/////////////////////////////////////////////////////////////////////////////////////////////////

abstract class Person{
    //properties
        //method 1
    // empCode: number;
    // private empName: string;
    // constructor(code:number, name:string){
    //     console.log("constructor called");
    //     this.empCode=code;
    //     this.empName=name;
    // }



       //method 2
    // constructor(private empCode:number, private empName:string){
    //     console.log("constructor called");
    //     this.empCode=empCode;
    //     this.empName=empName;
    // }

       //method 3
    constructor(protected empCode:number, protected empName:string){
        console.log("constructor called");
        this.empCode=empCode;
        this.empName=empName;
    }



    //class methods
    // protected dispDetails():void{
    //     console.log(`code: ${this.empCode} Name: ${this.empName}`);
    // }
    //  dispDetails=():void=>console.log(`code: ${this.empCode} Name: ${this.empName}`);
     abstract dispDetails():void;
}

// let emp1= new Person(101,"Rahul");

// WE NEVER CREATES A OBJECTS OR AN INSTANCE OF AN ABSTRACT CLASS
// emp1.empCode=102;
// emp1.empName="anshika"   not access because of private property
// emp1.dispDetails();

//Access Specifier / Modifiers
    // 1.public:  can access outside
    // 2.private: can be access online inside the class
    // 3.protected: can access inside  or iherited class




class Employee extends Person{
    private empSal!: number;
    constructor(code:number, names:string, salary:number){
        super(code,names);
        this.empSal= salary;
    }
    dispSalary():void{
        // super.dispDetails();
        console.log(`Salary: ${this.empSal}`);
    }
    dispDetails():void{
        console.log(`code: ${this.empCode} Name: ${this.empName}`)
    }
}

let emp2= new Employee(105,"Anshika",200000);
emp2.dispSalary();
emp2.dispDetails();