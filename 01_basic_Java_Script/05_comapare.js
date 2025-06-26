console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
    The reason is yhat an equality check == and comaprisons >, <, >=, <= work differently.
    comparisons convert null to a nomber, treating it as 0.
    thats why [console.log(null >= 0)] null >= 0 is true
    and [console.log(null > 0)] null > 0 is false.
*/

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false


// ===

console.log("2" === 2);  // false
// it will compare the vlaues and also check data types[it is very Strictly check]
