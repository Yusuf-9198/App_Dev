/*
let myName = "Mohd  "
// console.log(myName.trim().length);  // 4
// console.log(myName.length); // 6
// but i want correct length using this or using trueLength and without using trime()
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Lenght Is : ${this.trim().length}`);
}
myName.trueLength() // 4 
"muhad ".trueLength() // 5

let myFriends = ["kaif", "Farhan"]

let friendsSurname = {
    kaif: "beig",
    Farhan: "baig" ,
    getSurname: function(){
        console.log(`Kaif's surname is ${this.kaif}`);
        
    }

}

Object.prototype.beig = function(){
    console.log(`self made prototype for all `);
}

Array.prototype.baig = function(){
    console.log(`self made prototype for Array only`);
    
}

// friendsSurname.beig() // chalega  "OK"
// friendsSurname.baig() // nhi chalega  
// myFriends.beig() // ye bhi chalega 
// myFriends.baig() // chalega

*/

//Inheritance

const parent ={
    name:"parents",
    email: "abc@gmail.com"
}

const childOne ={
    Playing: true
}

const childTwo ={
    isSleeping: false
}

const childThree ={
    studing:"only at night",
    studyHr: 23,
    __proto__:childTwo

}
childOne.__proto__ = parent

//morden approach
Object.setPrototypeOf(childTwo, childOne)









