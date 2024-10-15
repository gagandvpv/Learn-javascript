const sub =  document.getElementById("sub");
const like = document.getElementById("like");
const share = document.getElementById("share");
const submit = document.getElementById("submit");

submit.onclick = function(){
    if(sub.checked)
    {
        document.getElementById("bla").textContent = `you are subscrubed`;
    }
}