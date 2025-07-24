function setUserName(username) {
    // complex DB calls
    this.username = username;
    console.log("Called");
}


function createUser(username, email, password) {
    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}


const score = new createUser("Abhishek", "abhi@google.com", "12345");
console.log(score);