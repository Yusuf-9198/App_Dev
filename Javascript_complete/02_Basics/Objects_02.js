const Appuser = new Object() // Singlton object
// console.log(Appuser);  // {} (Empty object)
Appuser.id="123yus"
Appuser.name="yusuf"
Appuser.isLogin=false 
// console.log(Appuser); //{ id: '123yus', name: 'yusuf', isLogin: false }

const user2 = { // nested object
    email : "vbnm.com",
    fullname:{
        firstname : "muhammad",
        surname :" beig"
    }
}
// console.log(user2); 
/*{
  email: 'vbnm.com',
  fullname: { firstname: 'muhammad', surname: ' beig' }
} */
// console.log(user2.fullname.surname); // beig

// const ob1 = { 1:"a" , 2: "b"}
// const ob2 = { 3:"c" , 4: "d"}
// // const ob3 = {ob1 , ob2} // nested object
// // console.log(ob3);  // { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'd' } }
// const ob3 = Object.assign(ob1,ob2)
// const ob4 = Object.assign({},ob1,ob2) // mdn read
// // good syntax ( {}->target , remaining all are source)
// console.log(ob1); // due to ob3 syntax ob1 also change and ob1==ob3==ob4
// //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(ob3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(ob4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//  const ob5 ={...ob1,...ob2} // MOST USED
//  console.log(ob5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 
const obArr =[  //Array of Objects
    {
        email :"bnm",
        id :2
    },
    {
        email :"bnm",
        id :2
    },
    {
        email :"bnm",
        id :2
    }

]
// console.log(obArr[1].email);// bnm

console.log(Object.keys(Appuser)); // return Array of Keys
console.log(Object.values(Appuser)); // return Array of values
console.log(Object.entries(Appuser)); // return nested Array of key,values pairs
//[ [ 'id', '123yus' ], [ 'name', 'yusuf' ], [ 'isLogin', false ] ]
console.log(Appuser.hasOwnProperty('isLogin')); // true // check properties present or not




