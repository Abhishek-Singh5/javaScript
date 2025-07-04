// falsy values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
//  "0", "false", " ", [], {}, function(){}

const userEmail = [];
// if(userEmail){
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
    
// }

// if(userEmail.length === 0){
//     console.log("Array is Empty");
    
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
    
}




// Nullish Coalescing Operator (??): (null, undefined)

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
val1 = null ?? 10 ?? 20; // 10



console.log(val1);




// Ternary Operator

// condition ? true : false

const score = 100;

score <= 80 ? console.log("less then 80") : console.log("less then 80")
