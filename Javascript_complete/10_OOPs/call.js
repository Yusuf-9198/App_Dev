function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUsername(username) // refernce hoa hai call nhi hoa is liye username set nhi
    // SetUsername.call(username) // call hoga but jo ye sab varible hai call stack ke hatte hi gayab ho ja rahe hai
    SetUsername.call(this, username) // ye this createUser to refernce karega 
    // ab called function apne this ko nhi createUser ke this refernce karega
    this.email = email
    this.password = password
}
const meYusuf = new createUser("yusuf", "modysu@gmai.com", "123")
console.log(meYusuf); 
// createUser { email: 'modysu@gmai.com', password: '123' } but where is username?

