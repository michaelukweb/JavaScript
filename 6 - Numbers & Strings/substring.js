function init() {

    var panel = document.getElementById("panel");
    var text = 
"JavaScript is the original dialect of the ECMAScript standard language whereas Jscript is the dialect developed later by Microsoft";
    
    panel.innerHTML = text.slice(0,26);
    panel.innerHTML += text.slice(61, 70) + "<br>"; 
    
    //Splits the string by placing a comma after each word
    panel.innerHTML += text.split(" ", 4) + "<br>";
    
    panel.innerHTML += text.substring(79, 94);
    panel.innerHTML += text.substring(121,130);
    
    panel.innerHTML += text.substr(61,10);
    
}
document.addEventListener("DOMContentLoaded",init, false);