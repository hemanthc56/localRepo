var div = document.getElementById("div");
var btn = document.getElementById("btn");
var shift = false

btn.addEventListener("click",()=>{
    if(shift){
        div.style.backgroundColor = "blue"
        shift = false
    }
    else{
        div.style.backgroundColor = "red"
        shift = true
    }
})