function init() {

    var strA = "JavaScript" === "JAVASCRIPT";
    var strb = "javascript" === "javascript";
    var flt = 7.5 === 7.5; //equality test
    var intA = 8 !== 8; // inequality test
    var intB = 24 > 12; 
    var intC = 24 < 12;
    var intD = 24 <= 24;
    
    var str = "String equality test 1: " + strA;
    str += "<br> String equality test 2: " + strb;
    str += "<br> float equality test: " + flt;
    str += "<br> Integer inequality test: " + intA;
    str += "<br> Greater than test: " + intB;
    str += "<br> less than test: " + intC; 
    str += "<br> Less than or equal to: " + intD;
    
    document.getElementById("panel").innerHTML = str;

}
document.addEventListener("DOMContentLoaded", init, false);