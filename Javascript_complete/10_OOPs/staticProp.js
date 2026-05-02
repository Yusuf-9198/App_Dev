class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static createId(){
        // return `123${this.username.trime()}lkj` // Error de raha hai
        return `123${this.username}987`
    }
    // Static jo haina us property to object ko access nhi karne deta, infact child to bhi access nhi karnedeta
}
const sara = new User("Sara")
// console.log(sara.createId()); // 123Sara987 // without static createId()
// console.log(sara.createId()); // Error :- sara.createId is not a function // with static createId()