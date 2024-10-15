const deButton = document.getElementById("deButton");
const reButton = document.getElementById("reButton");
const inButton = document.getElementById("inButton");
const count =document.getElementById("count");

let countlabel = 0;

inButton.onclick = function (){
    countlabel++;
    count.textContent = countlabel;
}


reButton.onclick = function (){
    countlabel = 0;
    count.textContent = countlabel;
}


deButton.onclick = function (){
    countlabel--;
    count.textContent = countlabel;
}