//STACK(primitive[copy milta hai]) , HEAP(Non primitive )

let myname="yusuf"
let realname = myname
realname = "muhammad"
console.log(myname)//yusuf
console.log(realname) //muhammad

let userOne = {
    email :"yusut!nnjnj",
    age: 87
}
 
let userTwo =userOne
userTwo.email="king@yooyo"
console.log(userOne.email) //king@yooyo
console.log(userTwo.email)  //king@yooyo