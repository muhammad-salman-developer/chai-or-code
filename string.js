const name = "salman";
const repocount = 50;
console.log(name+repocount)

console.log(`my name is ${name} and my rep is ${repocount}`)

const gameName = new String('salman')
console.log(gameName[0]);

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
 console.log(gameName.charAt(3))
 console.log(gameName.indexOf('m'))

 const  newString = gameName.substring(0,4)
 console.log(newString)
  const  newString1 = gameName.slice(-2,4)
 console.log(newString1)
 const newString2 = "  salman   "
 console.log(newString2)
 console.log(newString2.trim())
 const url = "https:\\hitesh.com\hitesh20%sal"
 console.log(url.replace('20%','-'))
 console.log(url.includes('hitesh'))
 const gameName3= new String ('hitesh-com') 
 console.log(gameName3.split('-'))