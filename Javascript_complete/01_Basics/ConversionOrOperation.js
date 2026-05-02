let score1 = "333"
let score2 = "33abc"
let score3 = null
let score4 = undefined

console.log(typeof score1 ) // String
console.log(typeof score2 ) // String

let value1 = Number(score1) // Number() convert into Number 
let value2 = Number(score2) // type is number 
let value3 = Number(score3)
let value4 = Number(score4)

console.log(typeof value1 ) // number -> 333
console.log(typeof value2) // *  type is number but NaN(Not a Number )
// In JavaScript, "Not a Number" is technically a numeric data type.

console.log(value2) // NaN
console.log(value3) // 0
console.log(value4) // NaN
/* true => 1 , false => 0
  Number("yusuf")=> NaN */
  
let bool = 1
let isboolean = Boolean(bool)
console.log(isboolean) 
/* 1 => true , [0, null , undefined , NaN] =>false 
   "" => False , " AnyThing" => true */

//String() => convert into string
// 33 => 33(string)