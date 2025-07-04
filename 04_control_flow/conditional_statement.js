// keyword -> if, else if, else

const isUserLoggedIn = true;
const temperature = 41;

// if(temperature === 40){
//     console.log("less then 50");
    
// }else{
//     console.log("temperature is greater than 50");
    
// }

console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

// if(score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
    
// }

// console.log(`User power: ${power}`); // not access the power because Scope issue

const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2"); // Bad Practice


// if(balance < 500){
//     console.log("less then 500");

// }else if (balance < 750){
//     console.log("less then 750");

// }else if (balance < 900){
//     console.log("less then 750");
    
// }else {
//     console.log("less then 1200");
// }


const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userloggedIn && debitCard && 2 == 5){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}
