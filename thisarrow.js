// this do current context refer
const user = {
    username : "salman",
    price: 999,
    welcome:function(){
        console.log(`${this.username},welcome to websit`); 
        console.log(this);
        
    }
};
// user.welcome();
// user.username = "sam"   // change value
// user.welcome();

// console.log(this);

// function chai(){
//     let username = "salman"
//     console.log(this.username);
    
// };
// chai()


// arrow function

// const chai = function () {
//      let username = "salman"
//     console.log(this.username);
// };

// const chai =  () => {
//      let username = "salman"
//     console.log(this);
// };
// chai();


// const two = (n1,n2) => {             //wrapped in {} return keyword imp
//     return n1+n2
// };

// const two = (n1,n2) => n1+n2

// const two = (n1,n2) => (n1+n2)     // if wrapped in () then return keyword no use


const two = (n1,n2) => ({username:"salman"} )    // obj is`t show in {} put with {} in ()

console.log(two(3,4));
