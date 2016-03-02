function init() {

    var panel = document.getElementById("panel");
   
    var str = "JavaScript in easy steps";
    
    panel.innerHTML = "Script' search: " + str.search("Script");
    panel.innerHTML += "<br>'Script' match: " + str.match("Script");
    
    panel.innerHTML += "<br>indexOf 's': " + str.indexOf("s");
    panel.innerHTML += "<br>LastIndexOf 's': " + str.lastIndexOf("s");
    
    panel.innerHTML += "<br>charAt 0: " + str.charAt(0);
    panel.innerHTML += "<br>charCodeAt 0: " + str.charCodeAt(0);//returns unicode number
    
    
    panel.innerHTML += "<br>fromCharCode: " + String.fromCharCode(74,97,118,97);
    
    panel.innerHTML += "<br>Replace: " + str.replace("easy", "simple");
    
}
document.addEventListener("DOMContentLoaded",init, false);

