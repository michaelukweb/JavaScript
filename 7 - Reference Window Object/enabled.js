function init() {

    if (navigator.javaEnabled) {
        
        panel.innerHTML = "Java support is enabled";
    }
    
    if (navigator.plugins.length !== 0 ) {
        
        panel.innerHTML += "<hr>Total Plugins: " + navigator.plugins.length; 
        panel.innerHTML += "<br>Example: " + navigator.plugins[1].name;
        panel.innerHTML += " - " + navigator.plugins[1].description;
    }
 
}
document.addEventListener("DOMContentLoaded",init, false);