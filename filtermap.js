// const coding = ["js", "py", "java"];
// const values = coding.forEach( (item) => {    // for each can`t response return value
//     console.log(item);
//     return item
// });
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// const newNums = myNums.filter( (num) => num > 4 );   // basic
// console.log(newNums); 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// const newNums = myNums.filter( (num) =>  {       // if we open scope then we write return keyword
//    return num > 4                              // if we`t open scope then we don`t write return keyword  
// } );
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6]
// const newNums = [];
// myNums.forEach( (num) => {
//     if (num>4) {
// newNums.push(num)        
//     }
// })
// console.log(newNums);


// const books = [
//     {
//         title:'bk1',
//         genre:'fiction',
//         publish:1998,
//         edition:2009,
//     },
//      {
//         title:'bk2',
//         genre:'fiction2',
//         publish:2004,
//         edition:2010,
//     },
//      {
//         title:'bk3',
//         genre:'fiction3',
//         publish:1992,
//         edition:2002,
//     },
//      {
//         title:'bk4',
//         genre:'fiction4',
//         publish:1991,
//         edition:2004,
//     }
// ];
// // const userbooks = books.filter( (bk) => bk.genre === 'fiction4' ) ;
// const userbooks = books.filter( (bk) =>  bk.publish >= 2000 && bk.genre === 'fiction2' )
// console.log(userbooks);



// +++++++++++++ map ++++++++++++
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// const newNums = myNumbers.map( (nums) => nums+10 )
// console.log(newNums);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// const newNums = myNumbers
// .map( (nums) => nums * 10 )    // the result will be pass to the next map
// .map( (nums) => nums + 1)
// .filter( (nums) => nums >= 40)            // only the true condition pass
// console.log(newNums);



// ++++++++++ reduce ++++++++++++++
// const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc + currval
// },0);
// console.log(myTotal);

// const myNums1 = [1, 2, 3];   // acc take value from initail value for just 1 time and then the value of acc
// const myTotal1 = myNums1.reduce( (acc, curr) => acc + curr,0 ); // is + of acc and currval
// console.log(myTotal1);       // 1stly acc dont know that where it values take .

const shoppingCart = [
    {
        itemName:"css course",
        price:2900,
    },
     {
        itemName:"java course",
        price:3900,
    },
     {
        itemName:"js course",
        price:1900,
    },
     {
        itemName:"rubi course",
        price:4900,
    },
];
const pricePay = shoppingCart.reduce( (acc, curr) => acc + curr.price,0 );
console.log(pricePay);




