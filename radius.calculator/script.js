let radius;
const PI = 3.14;
let circumferenece;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("inputs").value;
    radius = Number(radius)
    circumferenece = 2* PI * radius
    document.getElementById("para").textContent = `The CirucmFerence is : ${circumferenece}`;
}