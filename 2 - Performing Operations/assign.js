function init () {
  
    //Variables 
    var msg = "JavaScript:" ;
    msg += "Code"; //Concatenate
    
    var flt = 7.5;
    flt += 2.25; // 7.5 + 2.25
    
    var intA = 8; 
    intA -= 4;//8 - 4 
    
    var intB = 24;
    intB *= intA;//24 * 4
    
    var intC = 24; 
    intC /= intA;//24 / 4
    
    var intD = 24;
    intD %= intA;//24 % 4 = 0 
    
    var str = "Add & assign string: " + msg;
    str += "<br> Add & assign float: " + flt;
    str += "<br> Subtract & assign float: " + intA;
    str += "<br> Multiply & assign float: " + intB;
    str += "<br> Divide & assign float: " + intC;
    str += "<br> Modulus & assign float: " + intD;
    
    
    document.getElementById("panel").innerHTML = str;
    
}
document.addEventListener("DOMContentLoaded", init, false);