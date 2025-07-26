// ES6


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abdf`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("Abhishek", "as@gmail.com", "12345");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene

function Users(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
}

Users.prototype.encryptPassword = function() {
    return `${this.password}bjhg`
}

Users.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new Users("coffie", "tea@email.com", "54321");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());