class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}Abhi`
    }

    set password(value) {
        this._password = value
    }
}


const score = new User("singh@email.com", "abcde");
console.log(score.email);
console.log(score.password);