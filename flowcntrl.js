// // if
// if(true){     // code execute inside the block if condition true

// };

// if(false){   // code`t execute inside the block if condition false

// };

// const temp = 40;
// if(temp === 40){
//     console.log("true")
// }
// else{
//     console.log(false)
// }

// <,>,<=,>=,==,===,!=,!==

// const score = 200;
// if(score > 100){
//     let power = "fly"
//     console.log(`user power:${power}`);   
// }
//     console.log(`user power:${power}`);

// const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2");  // unreadable

// if(balance < 500){
//     console.log("less than");
    
// } else if (balance < 750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }


const userLoggedIn = true;
const debitCard = true
const loggedInGoogle = false;
const loggedInEmail = true
if(userLoggedIn && debitCard){
    console.log("allow to shopping")
}

if(loggedInEmail || loggedInGoogle){     // multiple cond check
    console.log("user logged in");
    
}