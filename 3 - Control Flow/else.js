function init() {

    var panel = document.getElementById("panel");
    var flag = false;
    var num = 10;
    
    if (flag) {
        
        panel.innerHTML = "Power is on";
    } else {
    
        panel.innerHTML = "Power is off";
    }
    
    if (num === 5){
        panel.innerHTML += "<br>Number is Five ";
    } else if (num === 10) {
        panel.innerHTML += "<br> Number is 10";
    } else {
        
        panel.innerHTML += "<br>Number is Neither 5 or 10";
    
    }
    

}
document.addEventListener("DOMContentLoaded",init,false);