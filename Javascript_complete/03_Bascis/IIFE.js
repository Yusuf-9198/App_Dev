// Immediately Invoked Function Expression:-
/*  It is a function that runs immediately right after it is defined. 
    The function is wrapped in parentheses to make it an expression,
    and then it is followed by another pair of parentheses to call the function immediately.
    This technique helps keep variables and code inside the function private, 
    avoiding pollution of the global scope and potential conflicts with other code.*/

(function chai(){
    console.log(`DB conected`);
})(); // immediately exicute hoga
// if there is not ";" it give erorr for second function
( () =>{
    console.log(`Db connected two`);
})();
// Also
( (something) =>{
    console.log(`Db connected two ${something}`);
})("ysuf");


