// math.pi ki value 3.14... hoti hai me usy 4 karna chta hon
// kar skte hai tu kese aur nhi kar sakte tu why not?
Math.PI = 5
// console.log(Math.PI); // 3.14..  change nhi hoga

const Discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Discriptor);
// output
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const college = {
    name:" NIT",
    takingAdd: true,

    events : function(){
        console.log("BMI events");
        
    }
}
// console.log(college);
// console.log(Object.getOwnPropertyDescriptor(college)); // undefined
// because ye function property ka discription deta hai onbject ka nhi
// console.log(Object.getOwnPropertyDescriptor(college, 'name'));
// outpue
// { value: ' NIT', writable: true, enumerable: true, configurable: true }


Object.defineProperty(college,'name', {
    // writable: false,
    enumerable: false // iteration nhi hone dega
})
// console.log(Object.getOwnPropertyDescriptor(college, 'name'));
// output
// {
//   value: ' NIT',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }


// for(let [key, value] of college){
//     console.log(`${key}:${value}`); // Error: college(Object) is not iterable
    
// }

for(let [key, value] of Object.entries(college)){
    if(typeof  value!== 'function'){ // After adding a function in college object
        console.log(`${key}:${value}`); // ab chalega

    }
    
}
//output 
/*
[enumerable: true]
name: NIT
takingAdd:true

[enumerable: false]
takingAdd:true
*/