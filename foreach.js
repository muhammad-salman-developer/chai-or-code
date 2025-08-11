const coding = ["js", "rubi", "java"];
// coding.forEach(function (params) {     // function callback func name is n`t use
//     console.log(params);
    
// }) 

// coding.forEach((params) => {
//     console.log(params);
    
// })

// function printMe(params){
//     console.log(params);
    
// }
// coding.forEach(printMe)

// coding.forEach((params,index,arr)=>{
//     console.log(params,index,arr);
    
// })

const myArray = [
    {
        name:"salman",
        age:21
    },
      {
        name:"salman1",
        age:22
    },
    {
        name:"salman2",
        age:23
    }
];
myArray.forEach((item) => {
    console.log(item.age);
    
})