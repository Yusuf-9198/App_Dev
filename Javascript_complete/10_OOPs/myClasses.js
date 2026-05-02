// All things after ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}a1b2c3`

    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("kaif", "hfbawyeu@ddfahi", "12354")
console.log(user1.encryptPassword()); // 12354a1b2c3
console.log(user1.changeUsername()); // KAIF


// behind the scene
function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }
const user2 = new User("Yusuf", "hfbawyeu@ddfahi", "191984")
console.log(user2.encryptPassword()); // 191984abc
console.log(user2.changeUsername()); // YUSUF
