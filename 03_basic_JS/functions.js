function name() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// name();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

// console.log(addTwoNumbers(3, 4));

const result = addTwoNumbers(3, 9);
// console.log("Result :- ", result);


function loginUser(username){
    if(!username){
        console.log("Please Enter a Username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUser("Abhishek"))
// console.log(loginUser("Vishal"))


// function cart(...num){
//     return num;
// }

// console.log(cart(200, 300, 400, 500))  // given value in Array



function cart(num1, num2, ...num){
    return num;
}

console.log(cart(200, 300, 400, 500, 2000))   // num1 -> 200,  num2 -> 300,  num -> 400,500,2000

const user = {
    userName: "Abhi",
    price: 500
}

function handleObject(obj){
    console.log(`UserName is ${obj.userName} and price is ${obj.price}`);
}

// handleObject(user);

handleObject({
    userName: "Vishal",  // it update the object value of function
    price: 399
})

const arr = [200, 400, 500, 800]

function value(getArray){
    return getArray[2];
}

// console.log(value(arr));
console.log(value([8, 9, 10, 15, 20])); 