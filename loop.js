//  for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 best nmbr");
        
//     }
//     console.log(element);  
// };
// console.log(element);



//  1ST code initialization then condition check if cond true then code in the block execute
//  and then increament start , the code execute till the cond is not false 


// for(let i = 1; i < 10; i++){
//     console.log(`outer loop value ${i}`);
    
//     for (let j = 1; j < 10; j++) {
//         // const element = array[j];
//         // console.log(`inner loop value${j} and inner loop is ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
        
        
//     }
// }


let myArray = ["flash","batman","superman"]
// console.log(myArray.length);

for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
};


// break and continue


// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log(`DEtected 5`);
//         break
        
//     }
//     console.log(i);  
// }

for (let i = 1; i <=20; i++) {     // only one time skip the condition
    if(i==5){
        console.log(`DEtected 5`);
        continue
        
    }
    console.log(i);  
}