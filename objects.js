// singleton  made from constructor obj

// obj literal
// const mySym = Symbol(key1)
const person = {
    name: "salman",
    'fullName': "m.salman",
    age: 20,
    mySym: "key1",  // use as symbol write key in square bracket
    location: "multan",
    isFollow: true,
    lastLoginDays: ["mon", "tue"],
    subjects: {                    // obj inside obj
        first: 'Math',
        second: 'Physics',
        third: {                     // obj inside obj inside obj
            name: 'Computer Science',
            level: 10,
        }
    }
};
console.log(person.subjects.third)
const products = [                   // obj inside array    
    {
        name: 'Mobile',
        price: 1200,
        category: {
            name: 'Electronics'
        }
    },
    {
        name: 'Laptop',
        price: 1800,
        category: {
            name: 'Electronics'
        }
    },
]
products.forEach(function(product){
    console.log(product)
});
// console.log(person)
// console.log(person.name);
// console.log(person['name']);
// console.log(person["fullName"])
// console.log(person.mySym)
// console.log(typeof person.mySym)
// person.age = 19;
// console.log(person)
// person.location = "lahore"
// console.log(person)

// Object.freeze(person)  // if value not change
// person.location = "karachi";
// console.log(person)


// person.greeting = function () {
//     console.log("salman")
// }
// console.log(person.greeting)
// console.log(person.greeting())

// person.greetingTwo = function () {
//     console.log(`salman,${this.name}`)
// }
// console.log(person.greeting)
// console.log(person.greetingTwo())