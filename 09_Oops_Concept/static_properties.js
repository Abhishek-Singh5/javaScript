class User {
    constructor(username) {
        this.username = username
    }

     logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const abhi = new User("Abhishek");
console.log(User.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const phone = new Teacher("iPhone", "as@email.com");
console.log(Teacher.createId())