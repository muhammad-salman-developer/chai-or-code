// const myObject = {
//     'game1': 'tavken3',
//     'game2': 'block bluster'
// };
// for (const [key, value ] of myObject) {     // not work
//     console.log(key,':-', value);
    
// }


const myObject = {
    js: "javascript",
    cpp: "c++",
};

for (const key in myObject) {
    // console.log(`${key} shorcut is ${myObject[key]}`);     // for in loop for obj, give key
    
};

const programming = ["js", "c++", "python"]
for (const key in programming) {
   console.log(programming[key]);
   
}

// const map = new Map()     // not iterable
// map.set('in', "india")
// map.set('fr', "france")
// // console.log(map);

// for (const key in map) {
//     console.log(key);
    
// }