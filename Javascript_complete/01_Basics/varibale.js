/*JavaScript is a dynamically typed language, also Statically Typed languge
meaning variable types are assigned and
checked at runtime instead of compile time.
You can change the type of a variable at any 
time during program execution, which enables flexibility 
but can also lead to potential runtime errors if operations are 
attempted on unexpected types. */

console.log("hello"); 
const name = "yusuf"
let age = 45
var pass = "4563" /* prefer  not to use var
because of issue in block scope and functional scope  */
email = "yusuf@gmail.com" // kar skte hai pr na kar tu aacha hai
/*
 By writing email = "..." without let or const, 
 you are creating a property on the global object (the window in browsers). 
 This is exactly what "use strict"; (which we discussed earlier) would prevent.
 */
// name ="kaif" // not allow
let phoneNo // output-> undefined
age= 56
pass="8976"
email="mogh@gmmail.com"
console.log(name)
console.table([name,age, email,pass,phoneNo])


/*
Feature,          var,         let,           const
Scope,        Function Scope,Block Scope,  Block Scope
Re-assignable,    Yes,        Yes,              No
Re-declarable,    Yes,         No,              No
Hoisted,Yes (returns undefined),Yes (but causes Error),Yes (but causes Error)
*/