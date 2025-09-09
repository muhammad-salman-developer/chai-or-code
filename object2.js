// const tender = new Object();    // singleton obj
// const tensder1 = {}             // non-singleton obj
// console.log(tender)

// tender.id = "123asd";
// tender.name = "hamdan";
// tender.isLoged = false;
// console.log(tender)

// const regularUser = {             // obj inside obj
//     email:"salman2@gmail.com",
//     fullName:{
//         userFullName:{
//             firstName:"salman",
//             lastName:"iftikhar"
//         }
//     }
// };
// console.log(regularUser.fullName.userFullName.firstName)

// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"a", 4:"b"};
// const obj4 = {5:"a", 6:"b"};
// // const obj3 = {obj1, obj2};
// // const obj3 = Object.assign({},obj1,obj2,obj4)         //return target that`s why we store it
// const obj3 = {...obj1, ...obj2}                      // spread operator 90% use 
// console.log(obj3);   

// const users = [
//     {
//         id:1,
//         email:"@gamil.com"
//     }, {
//         id:1,
//         email:"@gamil.com"
//     }, 
//     {
//         id:1,
//         email:"@gamil.com"
//     },
//      {
//         id:1,
//         email:"@gamil.com"
//     },
// ];
// users[1].email;
// console.log(Object.keys(tender));
// console.log(Object.values(tender));
// console.log(Object.entries(tender));             // key value made in array
// console.log(tender.hasOwnProperty('isLoged'));  // this property available in this obj ?


// obj de-structure
const course = {
    name:"js in hindi",
    price: 999,
   courseinstructor:"hitesh"
};
course.instructor


const {courseinstructor:instructor} = course  //de-structure
console.log(instructor)

// json call from api obj

// {
//     "name": "salman",
//     "courseName": "js in hindi",
//     "price":"free"
// }