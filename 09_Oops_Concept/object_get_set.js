const User = {
    _email : 'as@email.com',
    _password : "12345",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const score = Object.create(User)
console.log(score.email);
console.log(score.password);