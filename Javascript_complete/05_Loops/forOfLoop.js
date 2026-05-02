// for Of loop
// [{},{},{}] // Objects in Array

const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);  
// }

// It also run for steing
// const greeting ="hello , yusuf"
// for (const gree of greeting) {
//     console.log(gree);
// }

// Maps :is a Object holds key - value pairs and 
// remembers the original insertion order of the keys
// unique keys
const map = new Map()
map.set('IN', "India")
map.set('US', "America")
map.set('PAK', "PAkistan")
map.set('IN', "India") // it does not shown in map
// console.log(map);// Map(3) {
//  'IN' => 'India', 
// 'US' => 'America', 
// 'PAK' => 'PAkistan' 
//}
for (const key of map) {
    // console.log(key);
}
/* output
[ 'IN', 'India' ]
[ 'US', 'America' ]
[ 'PAK', 'PAkistan' ]*/
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}
/* output
IN :- India
US :- America
PAK :- PAkistan
 */

const myObj = {
    'gam1': "bgmi",
    'gam2': "freefire",
    'gam3' : "pubg"
}
// for (const game of myObj) { // objects are Not Itratable in for of loop
//     console.log(game);
// }
for (const key in myObj) { // for In Loop
    // console.log(key); // print all keys
    // console.log(`${key} is key of : ${myObj[key]}`); // print key along with value
}

const arr2 = ["gxva","djdsdxw","xbasgdyw","xxGUWSQI"] 
for (const key in arr2) {
    // console.log(arr2[key]);
}/*
gxva
djdsdxw
xbasgdyw
xxGUWSQI 
*/

// for (const key in map) { // MAp is not itratable so not run bu for in loop
//     console.log(key); 
// }

//* For Each Loop
const lang =["js","py","java","html"]
// lang.forEach(ele => { // call back  function (no name)
//     console.log(ele);
// });
// Also
// lang.forEach( function (val){
//     console.log(val);
// })
// Also
// function printMe(item){
//     console.log(item);   
// }
// lang.forEach(printMe)
 // FOR EACH HAVE MORE PARMETER
lang.forEach((ele , index , arr4) => { 
    console.log(ele ,index, arr4);
}); 
/**
 js 0 [ 'js', 'py', 'java', 'html' ]
py 1 [ 'js', 'py', 'java', 'html' ]
java 2 [ 'js', 'py', 'java', 'html' ]
html 3 [ 'js', 'py', 'java', 'html' ]
 */

const mycoding =[  // objects in array
    {
        lang :"java",
        extension :"java"
    },
    {
        lang :"python",
        extension :"py"
    },
    {
        lang :"javascrippt",
        extension :"js"
    }
]
mycoding.forEach((item )=>{
    console.log(item.lang);
})
















