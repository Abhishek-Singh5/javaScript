// singleton used in constructor via objects

// one way to craete object is Object.create

// lets taking about object literals

const symbol = Symbol("key1");

const jsUser = {
    name: "Abhishek",
    "full name": "Abhishek Singh",
    [symbol]: "mykey1",  // when we use Symbol in object then use [] because they access the element but typeof is showing string not object.
    age: 21,
    location: "New Delhi",
    email: "abhishek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); // access the object element
// console.log(jsUser["email"]); // second way to access element

// console.log(jsUser["full name"]); // it is always access by this not using dot

// console.log(jsUser[symbol]);
// console.log(typeof jsUser[symbol]); // string data types
// console.log(typeof symbol); // Symbol data types

// jsUser.email = "vishal@google.com";
// console.log(jsUser.email);  // it change the original value;
// Object.freeze(jsUser);  // it is lock or freeze the values you can change
// jsUser.email = "vishal@microsoft.com";
// jsUser.name = "Vishal Singh";
// console.log(jsUser.email);  // not change Original Value
// console.log(jsUser.name); // not change Original Value


jsUser.greeting = function() {   // using function in object
    console.log("Hello Coder");
} 

console.log(jsUser.greeting());


jsUser.greeting1 = function() {   // using function in object
    console.log(`Hello coder My name is ${this.name}`);  // access the object values using this keyword
} 


console.log(jsUser.greeting1());
