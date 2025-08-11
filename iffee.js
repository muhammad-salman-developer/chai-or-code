(function chai(){
    // named iife
    console.log("rehman");
    
})();

// ()()  // in 1st paranthesis function defination and 2nd is function call

((name) => {
    // non-named iife
console.log(`salman ${name}`);

})("salman")
