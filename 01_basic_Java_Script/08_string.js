const name = "Abhishek";
const repoCount = 50;

// console.log(name + repoCount + "Value"); 

console.log(`Hello my name is ${name} and repo count is ${repoCount} `);

const gameName = new String("Abhishek-As-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4);
console.log(newString);

const newStringone = "     Abhishek     ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://vishal.com/abhishek%20singh";

console.log(url.replace("%20", "-"));

console.log(url.includes("khalnayak"));

console.log(gameName.split("-"));




