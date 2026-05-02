class user {
    constructor(email, password){
        this.email= email
        this.password = password
    }
    // har property ke liye getter or setter  banjate hai
    // agr getter defined kia tu setter bhi deinef karna must hai otherwise Error 
    get password(){
        return this._password.toUpperCase()

    }
    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email =value
    }
}

const yusuf = new user("dwuidcq.com", "abgy")
console.log(yusuf.password);
// output : abgy [without getter and setter]
// output: Error :  Maximum call stack size exceeded , // ERROR: This calls the setter again, forever. [with getter and setter]
// it is because constructor aur setter dono password to set karne ki koshish kar rahe hai.
// ab kese kar? => gatter aur setter ke variable ko change kardo
// passwor => _password

