let a = 10
const b=20 
var c= 30 
// console.log(a);
// console.log(b);
// console.log(c);
console.log("hello");


// {} -> scoop
if (true) {  // yahi scoop hai
    let a = 100
    const b = 201
    var c = 3002
    d =40
}
// console.log(a);  //erorr(if 1 line commented) // 10
// console.log(b); // erorr(if 2 line commented) // 20
// console.log(c); // 3002 (due to var ) [update]
// console.log(d); // 40(due to --)
// scoops are different in browsor console and vs code Node methode

// nested scoop 
function one(){
    const username = "yusuf"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // Erorr (because scoop of website is within two function only)
    
    two()
}
// one() // yusuf

if (true) {
    const username ="kaif"
    if (username === "kaif") {
        const website = " youtube" 
        // console.log(username + website);  //kaif youtube
    }
    // console.log(webste) // Erorr
}
// console.log(username); // Erorr

//************** intersting ************** */
// two way of intialling functions (hosting may be )
// 01.
console.log(addone(7)); // also run
function addone(num){
    return num + 1 
}
console.log(addone(6));
 //02.
// console.log(addtwo(5)); //erorr
const addtwo = function(num) {
    return num +5
}
console.log(addtwo(5));



