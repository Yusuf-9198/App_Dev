/*
js is a Synchronus and Single threaded type language
-> it means execute one line of code at a time, 
each operation waits for the oneto complete before executing

********javascript execution context *****
=>js hamare code do phase me run karyte hai, phele gobal execution context banta hai ,
aur "this" naamke variable me store ho jata hai, browser me this-> window object
01. Global EC
02. Funvtion EC
03. Eval EC (ek tareke ka global hi hota hai)

js code-> Gobal Execution(this) -> memory creation phase -> execution phase
*/
let val1 =10
let val2 =5
function addnum(num1,num2){
    let total = num1 +num2
    return total
}
let result1=addnum(val1,val2)
let result2 = addnum(10,2)
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
    

blocking code -> block the flow of programe -> Read file Sync
NON blocking code -> Does not block the flow of programe -> Read file Async
**** See image for more info ***











*/













