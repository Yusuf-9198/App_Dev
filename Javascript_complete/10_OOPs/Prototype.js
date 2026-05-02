function multipleBy5(num){
    return num*5;
}
multipleBy5(4)
// function bhi Object hai
multipleBy5.power = 2
console.log(multipleBy5(6));
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {}

function createUser(username, score){
    this.username = username
    this.score = score 
}

createUser.prototype.increase = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

// const kaif = createUser("kaiF", 23) // nhi chale ga because new keyword nhi lekha hai
const kaif = new createUser("kaiF", 23)
const saif = createUser("saif", 234)
kaif.printMe() //score is 23