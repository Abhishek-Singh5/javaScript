// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for(let num of arr){
    //console.log(num);
}

let greeting = "Hello World!"
for(const greet of greeting){
    //console.log(`Each char is ${greet}`);
}

// Map [it is unique]

const map = new Map();
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('fr', "France")
map.set('IN', "India")

//console.log(map); // print both key and value

for(const [key, value] of map){
    // console.log(key, ":-", value);
}

const myobj = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// for(const [key, value] of myobj){  // this loop not works on the object
//     console.log(key, ":-", value);
// }