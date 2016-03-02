function init() {

    var panel = document.getElementById("panel");
    
    var radius = 4;
    
    var area = Math.PI * (radius * radius);
    var circle = 2 * (Math.PI * radius);
    
    panel.innerHTML = "Circle Radius: " + radius + " feet";
    panel.innerHTML += "<br>Area " + area + " square feet";
    panel.innerHTML += "<br>Circunference: " + circle + " feet";
    
    
}
document.addEventListener("DOMContentLoaded",init, false);