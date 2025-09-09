// //  for

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     if(element == 5){
// //         console.log("5 best nmbr");

// //     }
// //     console.log(element);  
// // };
// // console.log(element);



// //  1ST code initialization then condition check if cond true then code in the block execute
// //  and then increament start , the code execute till the cond is not false 


// // for(let i = 1; i < 10; i++){
// //     console.log(`outer loop value ${i}`);

// //     for (let j = 1; j < 10; j++) {
// //         // const element = array[j];
// //         // console.log(`inner loop value${j} and inner loop is ${i}`);
// // console.log(i + '*' + j + ' = ' + i*j);



// //     }
// // }


// let myArray = ["flash", "batman", "superman"]
// // console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);

// };


// // break and continue


// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`DEtected 5`);
//         break

//     }
//     // console.log(i);  
// }

// for (let i = 1; i <= 20; i++) {     // only one time skip the condition
//     if (i == 5) {
//         console.log(`DEtected 5`);
//         continue

//     }
//     // console.log(i);  
// }

// practise

let string = "salman";
// console.log(
//     string.length
// );
// let string_reversed = [];
// for (let i = string.length -1; i >= 0; i--) {
//     // const element = string[i];
//     // console.log(string.charAt(i));
//     string_reversed.push(string.charAt(i));
// }
// string_reversed = string_reversed.join("");
// console.log(string_reversed);

// another way to convert reverse loop

// let final = string.split(' ').map((word) => {
//     // console.log(word);
//     console.log(word.split('').reverse());
// }).join(' ');

// console.log(final);

// let string1 = "ali";   // take a string with declare variable
// let reverse = [];      // now take empty array to collect character 
// for(let i = string1.length-1; i >= 0; i--){  // in initiliaze string ki length me se 1 - kr ty ha
//     reverse.push(string1.charAt(i))  // reverse array ma push kr k string ma end se character lyga
// };
// console.log(reverse.join(""));   // join se convert into string remove ,


// check vowel number 

function string1(str) {       // take function with parameter (str);
    let count = 0             // create variable with count 0;   
    for (let i = 0; i <= str.length; i++) {
        // in if cond which parameter pass has .charAt(i) , charAt() check index numbr in which pass string1 the loop start with 1
        //  and charAt() check index from 0, so in charAt() we put i
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count += 1
        }
    }
    // console.log(count);
}
string1("abdullah")

/**
//  * str
 */
function greet(str) {
    let text = "";
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                text += str.charAt(i);
                break;
        }
    }
    return text;
}
let out = greet("salman");
// console.log(out.length + ' ' + out);


// check number is prime
function laptop(n){
    if(n <= 1){
        return false
    }
    else if(n == 2){
        return true
    };
   
      if(n%2 == 0){
        return false
    };

}
const sal = laptop(2);
// console.log(sal);


// ++++++++ array ++++++++++

//Question#1  find the largest  number in array
const number = [1,2,3,5,6]; // to find largest number in array to use spread operator(lazmi)
// spread operator array ya object ko tod kr individual element/property bana deta ha [1,2,3]=> 1 2 3
// console.log(Math.max(...number)); 

// with out math max

// const numbers = [10, 25, 7, 30, 18];
// cvalue in array compare with acc and cur, cur > acc because we not give vi
// const max = numbers.reduce((acc, cur) => cur > acc ? cur : acc); 
// console.log(max); 

// Question#2  find sum of array

// const array3 = [1,2,3,4];
// const sum= array3.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and cur ${currval}`);
    
// return acc + currval
// }, 0)
// console.log(sum);

// with arrow function

// const arr = [175,50,33,];
// const arr1 = arr.reduce( (acc,cur) => acc + cur,0 )
// console.log(arr1);

//Question#3

// remove the duplicates from an array
const remove = [1,2,3,4,5,1,2,3,4,5];  // create array
const ss = new Set(remove);  // new set is collection of unique value means remove duplicate
const final = [...ss];      // convert into array form

// console.log(final);

// Question #5
// exist number in array

// const sd = [1,2,3,4];

// let num = 3;
// if(sd.includes(num)){
//     console.log("out put show");
    
// } else{
//     console.log("nothing");
    
// }

// reverse an array without using reverse()
const veg = ["tomato","potato","carrot"];
let veg2 = [];
for(let i = veg.length-1; i >= 0; i--){
veg2.push(veg[i])

};
// console.log(veg2);








// +++++  object +++++

// keys in object and length
const student = {
    name:"salman",
    age:20,
    grade:"A",
};
let keys = Object.keys(student).length
// console.log(keys);

// values of object
const person = {
    name:"shagi",
    age:23,
};
let text = Object.values(person);
// console.log(text.join(""));

const man = {
    name:"femo",
    age:21,
};
if(man.hasOwnProperty("name")){
    console.log("exist");
    
} else{
    console.log("nothing");
    
}

const dd = [1,2,3,4];
const de = dd.reduce( function (acc,curr) {
return acc + curr
},0)
console.log(de);




