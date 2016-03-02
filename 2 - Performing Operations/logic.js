function init () {
  
    //Variables 

    var yes = true, no = false;
    var blnA = yes && yes;
    var blnB = yes && no;
    var blnC = no || yes;
    var blnD = no || no;
    var tog = !yes;
    
    var str = "Are both values true?: " + blnA + "<br>";
    str += "Are both values true now?: " + blnB + "<br>";
    str += "Is either value?: " + blnC + "<br>";
    str += "Is either value true now?: " + blnD + "<br>";
    str += "Initial value: " + yes + "<br>";
    str += "Toggled value: " + tog + "<br>";
    
    document.getElementById("panel").innerHTML = str;
    
}
document.addEventListener("DOMContentLoaded", init, false);