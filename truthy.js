const userEmail = "";

if(userEmail){
    console.log("got user email");
    
} else{
    console.log("don`t have email");
    
}

// falsy
// false ,0,-0,null, undefined,BigInt , "", NaN

// truthy        // inside value in string is truthy
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("arr is empty");
    
// }

// const object  = {}
// if(Object.keys(object).length === 0){
//     console.log("obj is empty");
    
// }

// nulish coalescing operator (??) null undefined
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 5

// val1 = undefined ?? 15

// console.log(val1);


// terniary operator
// condition ? true : false
const price = 100;
price >= 80 ? console.log("more then 80"): console.log("less than 80");




