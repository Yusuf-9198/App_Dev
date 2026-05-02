// Javascript Execution Context
// {} -> global execution context
// function EC
// eval EC
// {} => memory Creation Phase  then execution phase 

let val1 = 10
let val2 = 5
function addnum(n,m){
    let total = n+m
    return total
}
let result1 = addnum(val1, val2) 
let result2 = addnum(10 ,2) 
/* 
01. gobal execution -> this : window
02. memory phase:
    val1-> undefined
    val2-> undefined
    addnum -> deffination
    result1 -> undefined
    result2 -> undefined
03. execcution phase 
    val1 <- 10
    val2 <- 5
    addnum -> (for result1){*(new variable enviroment + execution thread)
            => a. memory phase
                val1 -> undefined
                val2 -> undefined
                total -> undefined
               b. execcution phase
                num1 - >10
                num1 - >5
                total -> 15(value return to global exection )
    } (now * is delete after exicution)
     (same as result2 only value get change)
    

*/
// to see call stack go chrome -> inspect -> source -> call stack
// we can also write code there in form of files like .js


