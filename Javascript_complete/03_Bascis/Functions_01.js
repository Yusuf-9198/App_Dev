// function sayName (){
//     console.log("B");
//     console.log("e");
//     console.log("i");
//     console.log("g");
    
// }
// sayName() 

function add(num1, num2){
    console.log(num1 +num2); 
}
// add() // NaN
// add(2,4) // 6
// add(2,"4") // 24(string)
// add(2,null) // 2
// const result = add(4,6) // return nhi kar raha hai , only print 
// console.log("result" , result); // result undefined

function add2(num1, num2){
    return (num1 +num2); 
}
// const result = add2(4,7)
// console.log("result  ",result)  // 11 

function isLogin(Username){
    return `${Username} just logged in !`
}
// console.log(isLogin("yusuf")); //yusuf just logged in !
// console.log(isLogin()); //undefined just logged in !

function isLogin2(Username ="user"){ // Default value is user
    return `${Username} just logged in !`
} 
// console.log(isLogin2()); //user just logged in !
// console.log(isLogin2("kaif")); //kaif just logged in !

function calCartPrice(num1){
    return num1
}
// console.log(calCartPrice(23,45,67,21)); // 23 (only take first argument )

function calCartPrice2(...num1){
    return num1 // return as Array
}
// console.log(calCartPrice2(23,45,67,21)); //  [ 23, 45, 67, 21 ]

function calCartPrice3(val1,val2,...num1){
    return num1 // return as Array
}
// console.log(calCartPrice3(23,45,67,21)); //  [ 67, 21 ]

const obj1 ={
    name : "kaif",
    price : 234
}
const obj2 ={
    name : "kaif",
    prices : 234
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}
handleObject(obj1) //Username is kaif and price is 234
handleObject(obj2) //Username is kaif and price is undefined
handleObject({
    naam : "ali",
    price : 1123
}) //Username is ali and price is 1123

const mynewArray = [200,300,400,500]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(mynewArray));





