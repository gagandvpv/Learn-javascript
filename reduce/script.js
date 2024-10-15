// reduce() = it reduces into a single value 


// let numbers = [10,15,13];

// let total = numbers.reduce(sum)


// console.log(`your total is ${total.toFixed(2)}`)

// function sum(first,second){
//      return first+second;
// }


let number = [10,15,13];

let tota = number.reduce(sum)


console.log(`your total is ${tota}`)

function sum(first,second){
     return Math.max(first,second);
}