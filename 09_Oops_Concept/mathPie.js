const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desc);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const chai = {
    name : "Abhishek",
    price : 250,
    isAvailable : true,

    order : function() {
        console.log("Code phat gyi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, "name", {
    //writable : false,
    enumerable : true,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}