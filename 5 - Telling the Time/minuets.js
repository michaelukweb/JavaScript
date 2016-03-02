function init() {

    var panel = document.getElementById("panel");
    var now = new Date();
    var hour = now.getHours();
    var minuet = now.getMinutes();
    var second = now.getSeconds();
    var milSec = now.getMilliseconds();
    
    if (minuet < 10) {
        
        minuet = "0" + minuet;
    }
    
    if (second < 10) {
        
        second = "0" + second;
    }
    
    var time = hour + ":" + minuet + ":" + second;
    panel.innerHTML += "The time is: " + time;
    
    var greet = "Good Morning";
    
    if (hour > 11) {
        
        greet = "Good Afternoon";
        
    } else if (hour > 17) {
        
        greet = "Good Evening";
    } 
    
    panel.innerHTML += "<br> " + greet;
    
    var suffix = ( hour > 11 ) ? " P.M" : " A.M";
    if (hour > 12) {
        
        hour -= 12;
    }
    
    panel.innerHTML += "<br>The Time is: " + hour + ":"  + minuet + suffix;
    
    
}
document.addEventListener("DOMContentLoaded",init, false);