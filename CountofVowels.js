 //Count the number of vowels in a string//
 let string="Hello JavaScript"
let count=""
for(let i=0;i<string.length;i++){
  if(string[i]=="e" || string[i] =="i"||string[i]=="o"||string[i]=="a"||string[i]== "u"){
    count+=string[i]
   

  }
}
console.log(count.length)
