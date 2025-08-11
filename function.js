// function greet(){
//     console.log( "s")
//     console.log( "s")
//     console.log( "s")
//     console.log( "s")
//     console.log( "s")
//     console.log( "s")
// };
// greet()




// function addnumbers(n1,n2){
//   console.log(n1+n2)
// };
// function addnumbers(n1,n2){
//     // let result = n1+n2;
//     // return result
//     return n1+n2
// };
// addnumbers(2,3)
// const result = addnumbers(2,3);
// // console.log(result);

// function loginuser(username = "salman"){
//     if(username === undefined){
//         console.log("enter");
//         return
//     }
//     return `${username} just logged in`
// };
// // console.log((loginuser("SALMAN")));
// // console.log((loginuser("")));
// console.log((loginuser()));



function calculateCartPrice(...n1){   // ... is rest operator
    return n1
};
// console.log(calculateCartPrice(200,300));

function calculateCartPrice1(val1, val2, ...n1){   // ... val1 take 200 & val2 take 300 
    return n1                                      // remaining thing go to rest operator
};
// console.log(calculateCartPrice1(200,300,330,700))


const username = {
    name:"rehman",
    age:20,
};
function myFunction(anyobject){
console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
};
// myFunction(username)
myFunction({
    name:"salman",
    age:21,
});


const mynewarr = [1,2,3];
function globe(getarr){
return getarr[1]
};
// console.log(globe(mynewarr));
console.log(globe([1,2,3]));
