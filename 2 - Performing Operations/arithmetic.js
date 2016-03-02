function init () {
    
    var sum = 80 + 20;
    var sub = sum - 50; // 100 - 50
    var mul = sum * 5; // 50 * 5
    var div = sum / 4; //
    var mod = sum % 2;
    var inc = ++sum;
    var dec = --sum;
    
    var str = "Sum: " + sum + "<br>Subtraction: " + sub;
    str += "<br> Mutiplication: " + mul;
    str += "<br> Division: " + div;
    str += "<br> Increment: " + inc;
    str += "<br> Decrement: " + dec;
    
    document.getElementById("panel").innerHTML = str;
    
}
document.addEventListener("DOMContentLoaded", init, false);