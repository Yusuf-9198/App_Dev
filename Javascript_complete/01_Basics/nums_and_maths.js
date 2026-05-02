// const score = 400
// const balance = new Number(34) // (100% number hai) 
// By using new Number(), you are creating a "Number Object" rather than a simple primitive
// console.log(balance) // [Number: 34]

// console.log(balance.toString()) // 34 (string hai)
// console.log(balance.toString().length) // 2
// console.log(balance.toFixed(3)) // 34.000(precision) [looks at digits after the decimal point.]
// While both(primitive and new Number()) allow you to use methods like .toFixed(), but
// the object version consumes slightly more memory in the Heap.


// const newNumber = 45.4344
// console.log(newNumber.toPrecision(3)) // 45.4(only 3 digit)
//       //(method) Number.toPrecision(precision?: number | undefined): string
//       //Returns a string containing a number represented either in exponential or 
//       // fixed-point notation with a specified number of digits.
        // looks at the total number of significant digits (before and after the decimal).
// const newNumber2 = 44635.4344
// console.log(newNumber2.toPrecision(3)) // 4.46e+4 (3 digit and remaing in terms of exponent )


// const anynum = 10000000
// console.log(anynum.toLocaleString()) /// 1,00,00,000
// console.log(anynum.toLocaleString('en-IN')) //1,00,00,000(indian standard)

// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE)  // 5e-324 [smallest positive number closest to zero]

// +++++++++++++++++++++ Maths +++++++++++++

// console.log(Math)  // Object [Math] {}
// console.log(Math.abs(-25)) // absolute value // 25
// console.log(Math.round(38.45)) // 38
// console.log(Math.ceil(4.3)) // 5
// console.log(Math.floor(4.3)) // 4
// console.log(Math.min(5,2.3,3,7.4,1)) // 1

// console.log(Math.random()) // random values between 0 and 1
// console.log((Math.random()*10) +1) // random values between 1 and 10


console.log(Math.floor((Math.random()*10) +1)) // random [Integer] values between 1 and 10

const min= 20 
const max= 40  
console.log(Math.floor((Math.random()*(max -min + 1)) + min )) // random [Integer] values between min and max





