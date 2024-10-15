// hello(goodbye);

// function hello(callback) {
//     console.log("hello");
//     callback();
// }

// function goodbye() {
//   console.log("Good bye!");
// }

sum(display,2,1);


function sum(fraction,x,y){
    let result = x+y;
    fraction(result);
}

function display(result){
    console.log(result);
}

