const heroes = ["muhammad" , "Ali" , "Umar"]
const heroes2 = ["Usman" , "Abu Bakar"]
// heroes.push(heroes2) // Array ke andar Array 
// console.log(heroes); // [ 'muhammad', 'Ali', 'Umar', [ 'Usman', 'Abu Bakar' ] ]
// console.log(heroes[3][1]); // abu bakar

// heroes.concat(heroes2) // it returns new Array So ,
// const Arr=heroes.concat(heroes2)
// console.log(Arr); // [ 'muhammad', 'Ali', 'Umar', 'Usman', 'Abu Bakar' ]

// //  GOOD PRACTICE  ********
// const AllHeroes = [...heroes,...heroes2]
// console.log(AllHeroes); // [ 'muhammad', 'Ali', 'Umar', 'Usman', 'Abu Bakar' ]

// const arr2 = [ 1,2,23,[5,5,6,154,8] , [9,6,7,35,45],89,69]
// const arr3 = arr2.flat(Infinity)  // Returns a new array with all sub-array elements concatenated into 
// //                                  it recursively up to the specified depth.
//  console.log(arr3); 
 /*  output
  [
    1,  2, 23, 5, 5,  6,
  154,  8,  9, 6, 7, 35,
   45, 89, 69
]
   */

// console.log(Array.isArray(heroes)); // true
// console.log(Array.from("Yusuf")); // convert in to Array // [ 'Y', 'u', 's', 'u', 'f' ]
// console.log(Array.from({name: "Yusuf"})); // [] (We have to say , either make keys Array or value array)

let a = 10 
let c = 20 
let b = 50 
console.log(Array.of(a,b,c)); //Returns a new array from a set of elements. //[ 10, 50, 20 ]




 

