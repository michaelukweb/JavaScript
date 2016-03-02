function init () {
    
    var panel = document.getElementById("panel");
    var day = 0;
    
    try {
        
        if (day > 31){
        
            throw new RangeError("Day cannot exceed 31");
        
        }
        
        if (day < 1) {
            
            throw "GetReal lol"; 
               
        }
    
    } catch( err ) {
    
        panel.innerHTML = (err === "GetReal");
         ("ooops! the day variable has an invalid value of " + day);
        (err.name + "exception has occured: " + err.message);
    
    } finally {
    
        panel.innerHTML += "<br>The Script has ignored that variable and is continuing....";
    
    }

}
document.addEventListener("DOMContentLoaded",init,false);
