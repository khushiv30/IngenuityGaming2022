class Training{
    constructor(trainingName,trainingDuration,trainingStatus){
        this.trainingName=trainingName;
        this.trainingDuration=trainingDuration;
        this.trainingStatus=trainingStatus;
    }
    displayDetails(){
        console.log (`Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Status: ${this.trainingStatus}`);
    }
}

class InCampus extends Training
{
    constructor(trainingName,trainingDuration,trainingStatus,d)
    {
        super(trainingName,trainingDuration,trainingStatus);
        this.rollno=d;
    }
    // Function Overriding 
    displayDetails(){
        console.log("Child Class Function");
        super.displayDetails();    
    }
}

let Student1 = new InCampus("Flutter",40,"Online",1011);
Student1.displayDetails();