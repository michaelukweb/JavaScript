var counter = 0;

function init() {

    var panel = document.getElementById("panel");
    
    panel.innerHTML += "Browser: " + navigator.appName;
    panel.innerHTML += "<br>Code Name: " + navigator.appCodeName;
    panel.innerHTML += "<br>Version: "  + navigator.appVersion;
    panel.innerHTML += "<br>Platform: "  + navigator.platform;
    
    if (document.addEventListener) {
        
        panel.innerHTML += "This is a Modern DOM Browser";
    }
 
}
document.addEventListener("DOMContentLoaded",init, false);