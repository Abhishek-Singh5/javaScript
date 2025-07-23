const user = {
    username : "Abhishek",
    loginCount : 8,
    singedIn : true,


    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}


const user1 = new User("Abhishek", 12, true);
const user2 = new User("Vishal", 23, false);
console.log(user1.constructor);
console.log(user2);