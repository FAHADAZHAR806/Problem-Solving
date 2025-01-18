

///////Find the largest number in an array//////

let numbers=[12,44,34,90,245,398,23]
let largest=numbers[0]
for(let j=1;j<numbers.length;j++){
  if(numbers[j]>largest){
    largest=numbers[j]
  }

}
console.log(largest)

