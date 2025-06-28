// const user = new Object();   constructor object

const user = {};

user.id = "123abc";
user.name = "Abhishek";
user.isLoggedIn = false;

// console.log(user);

const regularUser = {
    email: "abc@gmail.com",
    full_name: {
        userfullname: {
            firstname: "rajesh",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.full_name.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2};
// console.log(obj3)

const users = [
    {
        id : 1,
        email: "abc@gmail.com"
    },
    {
        id : 2,
        email: "abc@gmail.com"
    },
    {
        id : 3,
        email: "abc@gmail.com"
    }
]

// console.log(users[2]); // 0 besed index
// console.log(user);

// console.log(Object.keys(user)); // given only all keys
// console.log(Object.values(user)); // given only all values
// console.log(Object.entries(user)); // making saperate key values in arrays

// console.log(user.hasOwnProperty("isLoggedIn")); // exists or not given boolean value

const course = {
    name: "JavaScript",
    price: "1999",
    Instructor: "Saksham"
}


// console.log(course.Instructor);

const {Instructor: courseInstructor} = course;
// console.log(Instructor);
// console.log(courseInstructor);

// console.log(course);
