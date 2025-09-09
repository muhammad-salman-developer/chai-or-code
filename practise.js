const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("task1");
        resolve()

    })
}, 1000)
promise.then(function () {
    console.log("on the way");

});

// promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("task2");

        resolve()
    }, 1000)
}).then(() => {
    console.log("on the way2");

});

// promise 3  then ()

const data = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                name: "js",
                price: 3000,
            })
        } else {
            reject("error found")
        }
    })
}, 1000)
data.then(function (user) {
    return user.price
}).then((price) => {
    console.log(price, "give price");

}).catch((error) => {
    console.log("error".error);

});

// promise 4 with async await

const data1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({
                name: "css",
                price: 5000,
            })
        } else {
            reject("error found")
        }
    });
}, 1000)

async function greet() {
    try {
        const response = await data1;
        console.log(response);
    } catch (error) {
        console.log("eror");
    };
};
greet();

// promise 5

const ser = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: "hitesh",
            age: 34,
        })
    })
}, 1000)
ser.then(function (user) {
    console.log(user);

});






async function allUsers() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("give error");

    }

}
// allUsers();


async function greet1() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error");

    }
}
greet1();