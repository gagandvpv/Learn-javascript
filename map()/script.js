 //map() =  it os same as foreach but it returns a value and applies callback to each element 


// const numbers = [1,2,3]

// let why =  numbers.map(square);

// function square(element){

//   return Math.pow(element,2)

// }
 
// console.log(why);

const dates = ["2024-2-1","2022-1-1","2022-3-1"]

let formatted =  dates.map(format)
function format(element){
     
     let parts = element.split("-");

     return`${parts[1]}/${parts[2]}/${parts[0]}`
}



console.log(formatted)