function init() {

    var panel = document.getElementById("panel");
    
    
    for (var i = 0; i < 10; i++) {
        
        panel.innerHTML+= "Iteration number: " + i + "<br>";
    }
}
document.addEventListener("DOMContentLoaded",init,false);