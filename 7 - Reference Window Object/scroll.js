function init() {

    var panel = document.getElementById("panel");
    
    var i, panel = document.getElementById("panel");
    
    for (i = 1; i < 501; i++) {
        
        panel.innerHTML += i + " ";
    }
    
    window.scrollBy(0,500);
    window.moveTo(0,0);
}
document.addEventListener("DOMContentLoaded",init, false);