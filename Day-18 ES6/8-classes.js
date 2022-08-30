// ES6

class Training{
    // constructor
    constructor(trainingName,trainingDuration,trainingStatus){
        this.trainingName=trainingName;
        this.trainingDuration=trainingDuration;
        this.trainingStatus=trainingStatus;
    }

    // Member Functions 
    displayDetails(){
        return `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingDuration}\nTraining Status: ${this.trainingStatus}`;
    }
}

// Objects Creation 
let IngenuityGaming = new Training("Development Basics",120,"Offline");
let Dell = new Training("ReactJS",40,"Online");

// Method Calling
console.log(IngenuityGaming.displayDetails());
console.log(Dell.displayDetails());