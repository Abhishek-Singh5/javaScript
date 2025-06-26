/*

// premitive-data-types
    1 --> Number
    2 --> Boolean
    3 --> Symbol
    4 --> BigInt
    5 --> null
    6 --> undefined
    7 --> String


// non-premitive-data-types

    1 --> Array
    2 --> Object
    3 --> Function

*/

let arr = ["abhi", "rakesh", "aniket", "game"];
console.log(arr);

const score = function() {
    console.log("Hello world!");
}

score();

let myObj = {
    name: "Abhishek",
    age: 23,
    city: "New Delhi"
}

console.log(myObj);

let num = Symbol("123");  // it is unique
let div = Symbol("123");

console.log(num === div);

console.log(num);
console.log(typeof div);


// null is object data types;