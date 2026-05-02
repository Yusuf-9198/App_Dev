// in javascript Arrays are mutable(may invcrease size ) 
// Array's elements may be belonges to differnet datatypes;

const arr = [0,1,2,3,4]
// console.log(arr[2])
// console.log(arr) // [ 0, 1, 2, 3, 4 ]

// Arrays methods

// arr.push(67)
// console.log(arr) //  [ 0, 1, 2, 3, 4 ,67]
// arr.pop()
// arr.pop()
// console.log(arr) //  [ 0, 1, 2, 3]
// arr.unshift(47) // adding at start
// console.log(arr) //  [ 47, 0, 1, 2, 3]
// arr.shift() // delete at start
// console.log(arr) //  [ 0, 1, 2, 3]

// console.log(arr.includes(45)) // false
console.log(arr.indexOf(4))  // 4

// const StrArr = arr.join() //Adds all the elements of an array into a string, 
// //                          separated by the specified separator string.
// console.log(arr)
// console.log(StrArr) // 0,1,2,3,4
// console.log(typeof StrArr) // String

// slice , splice

const arr2=arr.slice(1,3) 
/*
slice():

01. Creates a new array by extracting a section from an existing array.
02. Does not modify the original array.
03. Takes two arguments: start index (inclusive) and end index (exclusive).
04. Used for non-destructive reading or copying of array portions.
Example: arr.slice(1,4) returns a new array from index 1 up to 3, original array unchanged.
*/
console.log(arr2)  //[ 1, 2 ]
console.log(arr)  //[ 0, 1, 2, 3, 4 ]
const arr3=arr.splice(1,3)  
/*
splice():

01. Modifies the original array by adding, removing, or replacing elements.
02. Takes at least two arguments: start index and number of items to remove. Additional arguments are elements to be added.
03. Returns an array of removed elements.
04. Used for destructive updates like deletion or insertion in the array.
Example: arr.splice(2,1) removes one element at index 2 and changes the original array.
 */
console.log(arr3)  // [ 1, 2, 3 ]
console.log(arr)   // [ 0, 4 ]








