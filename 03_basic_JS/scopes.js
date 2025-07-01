// We naver use the var keyword because of variable scope
// and var is access the global and local variable both.

var c = 300;
let a = 300;

if(true){
    let a = 10;  // local variable is not accessed in global
    const b = 20; // local variable is not accessed in global

    // console.log("Inner:", a);  // it access only local
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); // can't access the outside

    two();
}

// one();


if(true){
    const username = "Vishal"; 
    if(username === "Vishal"){
        const website = "Google";
        console.log(username + website);
    }

    // console.log(website);  cant't access
}

// console.log(username);




// ***************************** Interesting Fact  ***********************************


console.log(addone(5));  // function can access first after inatilize
function addone(nums){
    return nums + 1;
}

// console.log(addone(5));


// console.log(addtwo(8)) --> when function store in the variable then it can't the call first then initialize the function that is false statement
const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(8))