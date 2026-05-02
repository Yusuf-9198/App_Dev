const promiseOne = new Promise(function(reslove, reject ){
    // DO an Async task
    // DB calls , cryptocraphy , network
    setTimeout(function(){
        console.log("Async task is completed");
        // reslove() // agr ye na ho tu resolve or then connect nhi honge
        // aur Promise consume nhi print hoga
        reslove()
    },1000)
})
// consumtion of promises
promiseOne.then(function(){
    console.log("Promise consume");
    
}) // there is direct relation of resolve with then

//******************************************************** 
// another methode
new Promise(function(reslove, reject ){
    setTimeout(function(){
        console.log("Async task 2");
        reslove()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
    
})

//***************************************************** */
const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username:"chai" , email : "mohdyusuf@gmail.com"})

    },1000)

})

promiseThree.then(function(user){
    console.log(user);
    

})

//***************************************** */
const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if(!error){
        reslove({username:"chai" , email : "yusuf@gmail.com"})

        }else{
            reject('ERROR : Something wrong')
        }


    },1000)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);  
}).finally(()=>console.log("Finally Promise happen")
)

// *********************************************
// const promiseFive = new Promise(function(reslove, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//         reslove({username:"muhammad" , email : "yusuf@gmail.com"})

//         }else{
//             reject('ERROR : Abe Saale!')
//         }


//     },1000)

// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
    
// }
// consumePromiseFive()
 /* This error originated either by throwing inside of 
 an async function without a catch block, or by rejecting a promise which 
 was not handled with .catch(). The promise rejected with 
 the reason "ERROR : Abe Saale!".*/

// **************************
const promiseSix = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if(!error){
        reslove({username:"kaif" , email : "yusuf@gmail.com"})

        }else{
            reject('ERROR : Abe Saale! , kya kar raha hai')
        }


    },1000)

})

async function consumePromiseSix(){
    try {
        const response = await promiseSix
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
        // peacefull error handle hoga
    }
}
consumePromiseSix()

// **********************

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() // String to JSON file conversion
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// ***********************************

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.