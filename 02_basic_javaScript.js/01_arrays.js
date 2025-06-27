// Arrays is Object

const arr = [0, 1, 2, 3, 4, 5];
const hero = ["Abhishek", "Vishal", "prince"];

// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr[1]);

// Array method

// arr.push(6);  // add from back
// arr.push(7);
// arr.push(8);
// console.log(arr); 
// arr.pop();  // remove from back
// console.log(arr);

// arr.unshift(9);  // add from front
// console.log(arr);
// arr.shift();     // remove from front
// console.log(arr);


// console.log(arr.includes(9));  // check 9 element exists in arrray or not
// console.log(arr.indexOf(3));  // given the third index element


// slice, splice

console.log("A", arr); // A is Assigning the of array in output

const myarr = arr.slice(1, 3); // given subarray
console.log(myarr);

console.log("B", arr);

const myarr2 = arr.splice(1, 3);
console.log("C", arr);
console.log(myarr);