"use strict"; // treat all JS code as newer version
// Using "use strict"; is a professional practice. 
// It prevents you from using undeclared variables and makes your code more secure.
/* How? 
userName = "Yusuf"; // Works! JS creates a global variable automatically.
01.
userName = "Yusuf"; // Works! JS creates a global variable automatically.

"use strict";
userName = "Yusuf"; // ReferenceError: userName is not defined.

02. Sometimes JavaScript fails to do something but doesn't tell you. 
    Strict mode throws an error so you know exactly what went wrong.

03. In normal JavaScript, if a function isn't part of an object, the this keyword points to the window (global object). 
   This is a security risk because a script could accidentally modify your entire browser environment.

In Strict Mode: this remains undefined in global functions. This protects the global scope from accidental changes.

04. "use strict";
let x = 3.14;
delete x; // Error: Delete of an unqualified identifier in strict mode.
 */
// alert(5+7) // not use as it is(in NodeJs) but used in differnt way

// also read from (https://developer.mozilla.org/en-US/docs/Web/JavaScript)

/* DataTypes:
01. number-> 2 to power 53
02. bigint 
03. string => ""
04. boolean => true/false
05 null => standalone value , we can also asign null value 
06. undefined => abhi value defined nhi hoi hai!
06. symbol => unique

07. object 
*/
let age= 43;
console.log(typeof(age)) //[also]console.log(typeof age )// type batata hai 
console.log(typeof(undefined)) // undefined 
console.log(typeof(null))   // object

/* Types of DataTypes

01. Primitive { IT USE stack(copy of value ) MEMORY TYPE}
   string, number , boolean, null , undefined, symbole ,Bigint

02. Non primitive(refernce type){ IT USE heap MEMORY TYPE}
   Array , Objects , Functions*/

/*
const id =Symbol('123')
const id2 =Symbol('123')
console.log(id===id2) // false
*/

const friends =["yusuf" , "kaif", "farhan"];
let myobj ={
    name : "me",
    age : 34
}
const myfunc = function(){
    console.log("hello everyone")
}
console.log(typeof myfunc) // Object Function

// for more knowleadge
// https://262.ecma-international.org/5.1/#sec-11.4.3