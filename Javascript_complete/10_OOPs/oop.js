const user = {
    username: "yusuf",
    loginCount: 4,
    SingedIn: true,

    getUserDetails: function(){
        console.log("Detiails");
        // console.log(`Username ${username}`);// it will give error 
        // beacuse console didnit know the which username
        console.log(`Username ${this.username}`); // it will run 
        console.log(this); // Give Full contece[object]
        
        
        
    }
}
// console.log(user.getUserDetails());
// console.log(this); // {} // but in browser give window(global object)

// new => ek hi object muiltiple instances banana
// const PromiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`hello ${this.username}`);
        
    }

    return this // default hota hai nhi lekhoge chalega
}
// const UserOne = User("yusuf", 3 , true)
// const UserTwo= User("beig", 5 , false) // username aur sab overwrite kardega if not usse New
const UserOne =new User("yusuf", 3 , true)
const UserTwo =new User("Beig", 5 , false)

console.log(UserOne); // User { username: 'yusuf', loginCount: 3, isLoggedIn: true }
console.log(UserTwo);
console.log(UserOne.constructor); // [Function: User] reference to themself
 // Also read for instance





