// "use strict"
        // JavaScript Statements/Commands/Instructions
        document.body.style.backgroundColor="pink";    //here it changes color

        // Output statement

        document.write("Hello World !");
        // window.alert("This is JavaScript");
        // alert("This is javascript");

        console.log("This is console to debug your code");

        var firstName="Khushi";

        var exactdist=40.7;

        var isOpened=false;

        var training ;

        var training1=null;

        console.log(firstName);
        console.log(exactdist);
        console.log(isOpened);
        console.log(training);
        console.log(training1);

        console.log(typeof training);

        firstName=5000;
        console.log(typeof firstName);   //type change ho gya 

        // Dynamic use of JavaScript
        function sayHi(value){
            if(value){
                console.log("This statement is correct");
            }
            else{
                console.log("This statement is incorrect");
            }
        }

        sayHi(true);
        sayHi(false);
        sayHi("True");


        lastDay="Monday";     //ooper "use strict likha hai uss wajah se error de rha .... wrna nahi de rha tha"
        console.log(lastDay);

        // alert("Thsi is notifiaction");
        // var isOk = confirm("Are you sure to go further");
        // console.log(isOk);
        var fullName=prompt("Enter your FullName");
        console.log(fullName);