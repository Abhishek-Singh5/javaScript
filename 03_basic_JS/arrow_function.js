const user = {
    username: "Abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // its given the whole user objects

    }
}

// user.welcomeMessage();
user.username = "Sam"; // change the original value
// user.welcomeMessage();

console.log(this); // given the empty object

// function chai() {
//     let username = "Abhishek";
//     console.log(this.username);// given the undefined
// }

// chai();


// const chai = function () {
//     let username = "Abhishek";
//     console.log(this.username); // it also given the Undefined
// }

// chai();


const chai = () => {
    let username = "Abhishek"
    console.log(username);
    console.log(this)// givent the empty object
}

chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(4, 8));


// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(4, 8));


// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(4, 8));


const addTwo = (num1, num2) => ({username: "Vishal"})

console.log(addTwo(4, 6)); // it given the username value