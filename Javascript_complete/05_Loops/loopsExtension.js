const lang =["js","py","java","html"]
// for each loop  kya return karta? kuch nhi karta 
// const values = lang.forEach((item )=>{
//     console.log(item);
// })
// console.log(values); // undefined

// const values = lang.forEach((item )=>{
//     console.log(item);
//     return item
// }) // ab bhi nhi karega 
// console.log(values); // undefined

const nums =[1,2,3,4,5,6,7,8,9,10]
// 01. 
const newNums =nums.filter( (num) => num > 4) // It returns value
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
//02.
const newNums2 =nums.filter( (num) => {
    num > 4
})
// console.log(newNums2); // [] (arrow me padha hai)
//03.
const newNums3 =nums.filter( (num) => {
    return num > 4
}) 
// console.log(newNums3);
// sasme result using For Each Loop
const newNums4=[]
nums.forEach( (num) => {
    if(num>4){
        newNums4.push(num)
    }
})
// console.log(newNums4); // [ 5, 6, 7, 8, 9, 10 ]

// Exercise
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks);
  /*
   [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
   ]
   */

const mynumbers =[1,2,3,4,56,8,9,42]
// yournums=mynumbers.map((num)=> num + 10 ) // also run
// console.log(yournums); // [11,12,13,14,66,18,19,52]
const yournums = mynumbers // chaining*
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(yournums); //[ 41, 561, 81, 91, 421 ]






