const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "Abhishek", "Vishal"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]); // Abhishek output

const allHero = marvel.concat(dc); // it given new array output
// console.log(allHero);

 const hero = [...marvel, ...dc];  // spread operator given new array in one array
 // console.log(hero);


const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const realArr = arr.flat(Infinity);  // given the new array in single array
// console.log(realArr);

// console.log(Array.isArray("Abhishek")) // ask Abhishek is array or not false output

// console.log(Array.from("Abhishek")); // convert in arrayin single element

// console.log(Array.from({name: "Abhishek"})); // it can't convert into the array thats why given empty array [Interesting]

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3)); // using the variable and convert in to the array there values
