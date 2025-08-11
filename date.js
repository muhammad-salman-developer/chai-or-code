let date = new Date();
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString
    ())
    console.log(typeof[date])

let date1 = new Date(2023,0,23);
 console.log(date1.toLString())

 let date2 = new Date(2023, 0, 23, 5, 6);
 console.log(date2.toLocaleString());

let myCreatedDate = new Date("2023-01-23");
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(date1.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
newDate.toLocaleString('default',{
    weekday: "long"
})