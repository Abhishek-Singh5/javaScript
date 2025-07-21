// Do an async task
// DB calls, cryptography, network


/*

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()

    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 1")
        resolve()
    }, 2000)

}).then(function() {
    console.log("Async 2 resolve");
}) 




const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username : "Vishal", email: "vishal@gmail.com"})
}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})





const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username : "Abhishek", password: "123"})

        } else {
            reject('ERROR :- Something went wrong')
        }
        
    }, 1000)
})


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => {
    console.log("The promise is yet not to resolve or reject");
})

*/


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username : "Raju", password: "123"})

        } else {
            reject('ERROR :- JavaScript went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


 consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }


// getAllUsers()





fetch('https://api.github.com/users/Abhishek-Singh5')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all