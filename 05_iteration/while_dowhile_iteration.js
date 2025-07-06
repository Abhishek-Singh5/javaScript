let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let arr = ["flash", "batman", "superman"];

let i = 0;
while(i < arr.length){
    console.log(`Value is ${arr[i]}`);

    i = i + 1;
}   

// if condition is wrong then one time loops will be run
let score  = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);