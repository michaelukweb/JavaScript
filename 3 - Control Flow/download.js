function loaded() {
    
    window.alert("DOM Loaded");
    
}

function init() {
    document.getElementById("panel").innerHTML = "Page Initialized";
    window.alert("DOM loaded");
}

window.onload = loaded;
document.addEventListener("DOMContentLoaded", init, false);