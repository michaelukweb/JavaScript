function init () {

    var panel = document.getElementById("panel");
    var i;
    var arr = [];

    panel.innerHTML = "Fill elements..";
    
    for (i = 1; i < 11; i++){
    
        arr[i] = (i % 2 == 0) ? true:false;
        panel.innerHTML += "<br>Element" + i + ": " + arr[i];
        
    }
    
    panel.innerHTML += "<hr>Read elements.....<br>True: ";
    
    for (i = 1; i < arr.length; i++){
    
        if (arr[i]){
        
            panel.innerHTML += i + " ";
        }
    
    }
    
    panel.innerHTML += "<br>False: ";
    
    for (i = 1; i < arr.length; i++){
    
        if (!arr[i]) {
        
            panel.innerHTML += i + " ";
        }
    }
}
document.addEventListener("DOMContentLoaded",init,false);
