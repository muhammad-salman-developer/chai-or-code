// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`)
//     index = index + 2;
    
// };

let myArray = ["batman","superman","spiderman"];
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
    // arr ++  
};

let score = 11

do {                                  // work already then cond check
    console.log(`score is ${score}`);
    score = score + 1
} while (score <= 10);