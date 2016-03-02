function init() {

    var panel = document.getElementById("panel");
    
    var sqaure = Math.pow(5,2);//2(5*5)
    var cb = Math.pow(4,3); // 3(4*4*4)
    
    panel.innerHTML = "Largest Positive: " + Math.max(sqaure,cb);
    panel.innerHTML += "<br>Smallest positive: " + Math.min(sqaure,cb);
    panel.innerHTML += "<br>Largest Negative: " + Math.max(-5, -4.75);
    
}
document.addEventListener("DOMContentLoaded",init, false);