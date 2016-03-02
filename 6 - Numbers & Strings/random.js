function init() {

    var panel = document.getElementById("panel");
    
    var i,random, temp, string, number = [];
    
    for (i = 1; i < 50; i++) {
        
        number[i] = i;
    }
    
    for (i = 1; i < 50; i++) {
        
        random = Math.ceil(Math.random() * 49);
        temp = number[i];
        number[i]= number[random];
        number[random] = temp;
    }
    
    var str = "Your six lucky Numbers are: <br>";
    
    for (i = 1; i < 7; i++) {
        
        str += number[i];
        
        if (i !== 6) {
            
            str += " - ";
        }
    }
    panel.innerHTML = str;
    
}
document.addEventListener("DOMContentLoaded",init, false);