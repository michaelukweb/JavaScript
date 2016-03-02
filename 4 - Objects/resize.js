function init () {

    var panel = document.getElementById("panel");
    var i;
    
    var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var weekend = ["Saturday", "Sunday"];
    
    panel.innerHTML = "Weekdays are: " + week;
    panel.innerHTML += "<hr>Weekend days are: " + weekend;
    
    for (i = 0; i < weekend.length; i++) {
        
        week[week.length] = weekend[i];
  
    
    }
         
    panel.innerHTML += "<hr>Increased with weekend days: " + week;
    week.length = week.length - 2;
    panel.innerHTML += "<hr>Reduced back to weekdays " + week;
            
}
document.addEventListener("DOMContentLoaded",init,false);
