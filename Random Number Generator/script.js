const roll = document.getElementById("roll")
let random1;
let random2;
let random3
roll.onclick = function(){
    random1 = Math.floor(Math.random()*6+1);
    document.getElementById("count1").textContent=random1;
    random2 = Math.floor(Math.random()*6+1);
    document.getElementById("count2").textContent=random2;
    random3 = Math.floor(Math.random()*6+1);
    document.getElementById("count3").textContent=random3;
}

