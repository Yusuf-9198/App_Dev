// const user = {
//     username :" Kaif",
//     price : 999,

//     welcomeMess : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMess() //  Kaif , welcome to website
// /*console.log(this); => { username: ' Kaif', price: 999, welcomeMess: [Function: welcomeMess] } */ 

// user.username="farhan"
// user.welcomeMess() // Current contest(username) is change //  farhan , welcome to website
//           /*{ username: ' farhan', price: 999, welcomeMess: [Function: welcomeMess] }*/

// ************************************************************

// const user = {
//     username :" Kaif",
//     price : 999,

//     welcomeMess : function(){
//         console.log(`${this.username} , welcome to website`);
        
//     }
// }
// console.log(this); // {} // In Browser console => window 
// this is because in browser global object is window

function chai(){ 
    let username = "yoyo"
    console.log(this);
    
}
// chai() // output 
/**
 <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
 */

// function chai(){
//     let username = "yoyo"
//     console.log(this.username);
    
// }
// chai() // undefined
 // Also same result if we use other type of funcrion declaration
 
const chai2 = () =>{ // Arrow function
    let username = "kaif"
    console.log(this);
    
}
// chai()
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}*/

const Addnum= (num1 , num2)=>{ // explicitly
    return num1 + num2
}
console.log(Addnum(6,7));

// const Addnum2= (num1 , num2)=>  (num1 + num2) // inplicitly
// console.log(Addnum2(6,8));

// const obj3= (num1 , num2)=> {username : "ysuuf"} // () must
const obj3= (num1 , num2)=> ({username : "ysuuf"})
console.log(obj3(5,7)); // { username: 'ysuuf' }











