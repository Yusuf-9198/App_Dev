// const name ="yusuf"
// console.log(name + " beig") 
// console.log(`my name is ${name} , i am 20 years old `) //More prefered
//  // string as object :- Treating a string as an object to access its properties and methods.
 const gamename= new String("Mirzaking")
//  console.log(gamename) // [String: 'Mirzaking']
// Now String as Object so that gamename (like 0: "M", 1: "i", etc.). key:value pairs
//  console.log(gamename[0]) //M
//  console.log(gamename.__proto__) // {} => empty object
/*
When i log gamename.__proto__ in a browser console, 
i will see all the methods (like toUpperCase, trim, etc.) that JavaScript gives to strings.
1. Non-Enumerable Properties:-
In JavaScript, properties have "hidden" settings. One of these settings is called enumerable.
- Most built-in methods (like .trim() or .slice()) have enumerable: false.
- When you log an object, the console often only shows properties where enumerable is true. Since the methods are hidden, the object looks empty: {}.
 */


//  console.log(gamename.length) // 9
//  console.log(gamename.toUpperCase()) // MIRZAKING
//  console.log(gamename.charAt(4)) // a
//  console.log(gamename.indexOf('a')) // 4


// const newString =gamename.substring(1,6)
// console.log(newString)   //irzak
// const newString2 =gamename.slice(1,3)
// console.log(newString2)//ir
// .slice() is more powerful than .substring() because it can accept negative numbers to count from the end of the string.
// InFact .sustring() also except negative vlaue but Treats -4 as 0


// const newString3="   stringWithSpaces  "
// console.log(newString3)  //  stringWithSpaces
// console.log(newString3.trim()) //stringWithSpaces

// const url = "https://frkmfmkjknkn@1322NJNF" 
// console.log(url.includes('@132' )) //true
// console.log(url.replace('@132' , '%777')) //https://frkmfmkjknkn%7772NJNF

const surname = "mohd-yusuf-beig"
console.log(surname.split('-'))  // .split(<split based on>) //[ 'mohd', 'yusuf', 'beig' ]

