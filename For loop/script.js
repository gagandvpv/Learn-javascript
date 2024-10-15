const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
let age;
const bla = document.getElementById("bla");


myButton.onclick = function(){
    age = myText.value;
    if(age<50)
    {
     bla.textContent = `your age is ${age} you cannot be entered`;
    }
    else
    {
        bla.textContent = `your age is ${age} you can be entered`
    }
}