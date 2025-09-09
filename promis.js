const promiseOne = new Promise(function (resolve, reject) {
    // do aync task
    // db calls,cryptoGraphy, network
    setTimeout(function () {
        console.log("async task comp");
        resolve()                      // to apply resolve,then () execute otherwise no
    }, 1000)
})
promiseOne.then(function () {
    console.log("promise consumed")
})   // relation with resolve inside then() we find A func

// primse one

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("task2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async");

})

// promidse 2

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "salman", age: 24 })
    }, 1000)
})
promiseFour.then(function (user) {
    console.log(user);

})

// promise 3

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = false;
        if (!err) {
            resolve({ name: "hitesh", age: 35 })

        } else {
            reject("error 404")
        }
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
    return user.name
}).then((name) => {
    console.log(name);

})
    .catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log("complete");

    })

// promise 4
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = true;
        if (!err) {
            resolve({ name: "js", age: 35 })

        } else {
            reject("error 804")
        }
    }, 1000);
});

// async function greet(){                  // directly error ni deta
//     const response = await promiseFive;
//     console.log(response); 
// }
// greet()

async function greet() {                  // directly error ni deta
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
greet();


// async function allUsers() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');

//         const data = await response.json();
//          console.log(data) 
//     } catch (error) {
//         console.log("give error");

//     }

// }
// allUsers();

fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);

    }).catch(() => {
        console.log(error);

    })