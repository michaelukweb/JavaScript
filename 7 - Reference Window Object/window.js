function init() {

    var panel = document.getElementById("panel");
    var width, height, avWidth, avHeight, colors;
    
    width = window.screen.width;
    height = window.screen.height;
    avWidth = window.screen.availWidth;
    avHeight = window.screen.availHeight;
    
    switch (window.screen.colorDepth){
            
    case 8 : colors = "Low Color"; break;
    case 16 : colors = "High Color"; break;
    case 24 : colors = "True Color"; break;
    case 32 : colors = "Deep Color"; break;
    default : colors = "Unknown";
    
    }
    
    panel.innerHTML = "Screen Resolution: " + width + " x " + height + "<br>";
    
    panel.innerHTML += "Availible Screen Size: " + avWidth + " x " + avHeight + "<br>";
    panel.innerHTML += "Color Capabililty: " + colors;
    
    window.defaultStatus = "Screen Data by JavaScript";//depricated 
}
document.addEventListener("DOMContentLoaded",init, false);