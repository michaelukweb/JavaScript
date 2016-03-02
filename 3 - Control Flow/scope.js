var global = "This is worldwide global news<hr>";

function us(obj) {
    
    var local = "USA News <br>"; 
    obj.innerHTML += local;obj.innerHTML += global;

}

function en(obj) {
    
    var local = "European News <br>"; 
    obj.innerHTML += local;obj.innerHTML += global;

}

function init() {
    
    var obj = document.getElementById("panel");
    obj.innerHTML = global;
    
    us(obj);
    en(obj);

}

document.addEventListener("DOMContentLoaded",init,false);