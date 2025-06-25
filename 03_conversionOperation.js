let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN

let scores = null;

console.log(typeof scores);
console.log(typeof(scores));

let valueInNumbers = Number(scores);
console.log(typeof valueInNumbers);
console.log(valueInNumbers);  // 0


let s = undefined;

console.log(typeof s);
console.log(typeof(s));

let value = Number(s);
console.log(typeof value);
console.log(value);  // NaN


let val = true;

console.log(typeof val);
console.log(typeof(val));

let values = Number(val);
console.log(typeof values);
console.log(values);  // 1


let n = "Abhishek";

console.log(typeof n);
console.log(typeof(n));

let nums = Number(n);
console.log(typeof nums);
console.log(nums);  // NaN


// "33" => 33
// "33abc" => NaN {Not a Number}
// true => 1; false => 0


let isLoggedIn = 1;

let booleanISLoggedIn = Boolean(isLoggedIn);
console.log(booleanISLoggedIn);


let isLogged = 0;

let booleanISLogged = Boolean(isLogged);
console.log(booleanISLogged);

let logged = 33;

let booleanis = String(logged);
console.log(booleanis);
console.log(typeof booleanis);


// 1 => true; 0 => false
// "" => false
// "Abhishek" => true

// number convert in to String but String is not convert into number;