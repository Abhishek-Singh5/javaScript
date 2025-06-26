/*
    All premitive Data Types store in Stack Memory [making copy]
    All non-premitive data types store in Heap Memory [Give reference]
*/

let name = "abhisheksingh@gmail.com";

let secondName = name;
// console.log(secondName);
secondName = "Abhishek Singh";  // not change the original value

console.log(name);
console.log(secondName);


let userOne = {
    email: "as9425401@gmail.com",
    upi: "user@ybl"
}

console.log(userOne);

let userTwo = userOne;

userTwo.email = "Abhishek@google.com";  // it change the original value 
                                        // because it store in heap memory
                                        // both object reference on same keys & value

console.log(userOne);
console.log(userTwo);