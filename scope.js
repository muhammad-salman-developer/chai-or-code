// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

// var c = 50;
// let a = 60;   // freedom from block scope & global scope
 
// if(true){            // block scope
// let a = 100;        // the value in scope not come to outside 
// const b = 200;
// // var c = 300;       // this is issue & not come to outside  avoid it
// console.log(a)
// };
// console.log(a);
// // console.log(b);
// // console.log(c);


// nested scope
function one(){
    const username = "salman"
                                
    function two(){               // can inner func access outer variable
        const website = "youtube";
        console.log(username);
    };
    // console.log(website)
    two()
}
// one()


if(true){
    const username = "rehman";
    if(username === "rehman"){
        const website = " youtube";
        // console.log(username + website)
    };
    // console.log(website);
    
};
// console.log(username);


//+++++++++++++++++ intersting +++++++++++++++++++


console.log(addOne(5));
function addOne(num){       // function declare
    return num+1
};


addTwo()
const addTwo = function(num){   //with function hold in variable hoisting
    return num+2;
};
