class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, TechId){
        super(username) // ye  chalega
        // super(this.username) // nhi chalega 
        this.email= email
        this.TechId = TechId
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
// const Teacher1 = Teacher("Farhan", "xtyWGDY", "ert123") // Error
// Class constructor Teacher cannot be invoked without 'new' at Object.
    
const Teacher1 = new Teacher("Farhan", "xtyWGDY", "ert123")
Teacher1.addCourse() // "ok"
Teacher1.logMe() // Username is Farhan

const Person1 = new User("Yusuf")
// Person1.addCourse() // Does not have acesse
Person1.logMe()

console.log(Teacher1 == Person1); // false
console.log(Teacher1 instanceof Teacher); // True
console.log(Teacher1 instanceof User); // True
console.log(Teacher instanceof User); // false
console.log(Person1 instanceof User); // True
