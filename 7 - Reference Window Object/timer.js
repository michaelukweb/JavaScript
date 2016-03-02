var counter = 0;

function init() {

    var timerID, panel = document.getElementById("panel");
    
    counter++;
    panel.innerHTML += "<span style='background:black;color:white;margin:2px;'>" + counter + "</span>";
    
    if (counter > 19) {
        
        window.clearTimeout(timerID);
    } else {
        
        timerID = window.setTimeout(init, 1000);
    }
    
    
 
}
document.addEventListener("DOMContentLoaded",init, false);