// Agr constructor se object banega , hamesha Singalton[Object.creat] hoga

// objecct literals

const mySym = Symbol("key1") // Symbol
const user = {
    name : "yusuf", // name -> "name"
    "fullname" : "mohd yusuf", // Ab ye .(dot) se excess nhi hoga
    age : 18,
    // mySym : "key2", // Abhi ye mySym -> Symbole nhi hai 
    [mySym] : "key2", // ab ye Symbole hai
    email : "mohd@gmail.com",
    marks : [23,24 ,25]
 }  
//   console.log(user.email);
// //   console.log(user.fullname); // erorr
//   console.log(user["fullname"]); // mohd yusuf 
//   console.log(user["email"]); // mohd@gmail.com
//   console.log(typeof user.mySym); // undefine
//   console.log(typeof user[mySym]); // String

//   user.email = "chagpt@gmail.com"
// Object.freeze(user) // Ab koi bhi value change nhi ho skti 
// user.age =45
// console.log(user.age); // 18 (unchange)
// console.log(user);
/*
{
  name: 'yusuf',
  fullname: 'mohd yusuf',
  age: 18,
  email: 'chagpt@gmail.com',
  marks: [ 23, 24, 25 ],
  [Symbol(key1)]: 'key2' // *** 
}
   */

// Adding functions

user.greeting = function(){
    console.log("hello");

}
user.greeting2 = function(){
    console.log(`hello , ${this.name}`);

}
console.log(user.greeting); // nothing
console.log(user.greeting()); //hello undefined
console.log(user.greeting2()); //hello , yusuf  undefined




