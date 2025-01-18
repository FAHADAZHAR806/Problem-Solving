//////////////Reverse an array without using built-in methods.////

let numbers=[12,44,34,90,245,398,23]
let rev=[]
 for(let k=numbers.length-1;k>=0;k--){

rev.push(numbers[k])
 }
console.log(rev)