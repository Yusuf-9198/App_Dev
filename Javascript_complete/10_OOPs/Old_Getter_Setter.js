//function based 
/*
function User(email, password){
    this._password = password,
    this._email = email

    Object.defineProperty(this, 'email' , {
        set: function(value){
            this._email = value
        },
        get: function(){
            return this._email.toUpperCase()
        }
        
    })
    Object.defineProperty(this, 'password' , {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const kaif = new User("hccbadc.com", "ghyGW")
console.log(kaif.email);
*/

// Object based
const User = {
    _email: "yusuf.com",
    _password: "ybeig",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const tea = Object.create(User) // by default
console.log(tea.email); // YUSUF.COM


