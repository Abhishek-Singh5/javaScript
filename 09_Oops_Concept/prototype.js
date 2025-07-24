let myName = "Abhishek         "
let score = "fifty        "


// console.log(myName.trueLength); // undefined

let hero = ["thor", "superman"];

let heroPower = { 
    thor : "hammer",
    superman : "fight",

    getSupermanPower: function() {
        console.log(`Fight power is ${this.superman}`);
    }
}

Object.prototype.vishal = function() {
    console.log(`Vishal is Present in all objects`);
}

Array.prototype.heyVishal = function() {
    console.log(`Vishal says Fuck you`);
}

// heroPower.vishal();
// hero.vishal();
// hero.heyVishal();
// heroPower.heyVishal(); Error this is Only for Array



// ---------------------------  Inheritance  -------------------------------------


const User = {
    name : "Abhishek",
    email : "as@google.com"
}

const Student = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment: "JavaScript assignment",
    fullTime : true,
    __proto__ : TeachingSupport,
}

Student.__proto__ = User;


// modern syntax

Object.setPrototypeOf(TeachingSupport, Student);


let another = "Hello guys           ";

String.prototype.trueLength = function() {
    console.log(this);
    console.log(` True length is :-  ${this.trim().length}`);
}

another.trueLength();
"Abhishek".trueLength();
"MangoShake".trueLength();