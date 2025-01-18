/////Write a program that calculates the sum of all even numbers from an array of integers.///

let numbers=[12,44,34,90,245,398,23]
let sum=0

for(i=0; i<numbers.length;i++){
 if(numbers[i]%2===0){
    sum +=numbers[i]
    }
} 
 console.log(sum)
