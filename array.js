const myArray = [1, 2, 3, 4];
// const heroes = ["salman", "rehman"]
// const array = new Array(1, 2,)
// console.log(myArray[1]);

// array method
// myArray.push(5); // add 5 into myarray
// myArray.pop()   // remove last element in array

// myArray.unshift(6)  // add element at 1st in the array
// myArray.shift()         // remove 1st element in the array
   
// console.log(myArray.includes(5));    // asked question that true or not  
// console.log(myArray.indexOf(3));    // tell index of array

// const newarr = myArray.join();   //join convert array into string
// console.log(typeof(newarr))
// console.log(myArray)


// slice & splice

// const arr = [1, 2, 3, 4, 5,];
// const sliced = arr.slice(1,4);  // means that it remove index 1 and 4
// // console.log(arr);
// console.log(sliced);

const arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(2, 3);               // after 2 index it removes 3 element
console.log(arr1)

const city = ["multan", "lahore","karachi" ]
const city1 = ['sialkot', 'gawadar', 'lasbila'];
// city.push(city1)
// console.log(city[3][1])

// const city3= city.concat(city1) // concat return new array
// console.log(city3)

// const city3 = [...city, ...city1];  //spread
// console.log(city3)

// const arr3 = [1, 2, 3, [4, 5, 6], 7, [5, 7, [9, 8]]];
// const aar4 = arr3.flat(Infinity);   // how much required depth
// console.log(aar4)

// console.log(Array.isArray("salman"))
// console.log(Array.from("salman"))   // convert to array
// console.log(Array.from({name:"salamn"}))   // interesting

// let score = 100;
// let score1 = 100;
// let score2 = 100;
// console.log(Array.of(score,score1,score2,))