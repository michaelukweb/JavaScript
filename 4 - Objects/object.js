function car(make, model, color) {
    
    this.make = make;
    this.model = model;
    this.color = color;
    this.accelerate = accelerate;
}

function accelerate () { 
    return "<br> Vroom!";
}

function init () {
    
    var panel = document.getElementById("panel");
    var myCar = new car("Aston Martin "," DBS "," Black ");
    var myCar2 = new car("Ferarri "," 458 "," Red ");
    
    panel.innerHTML = myCar.color + myCar.make + myCar.model;
    panel.innerHTML += myCar.accelerate();
    
    panel.innerHTML += "<br>" + myCar2.color + myCar2.make + myCar2.model;
    panel.innerHTML += myCar2.accelerate();

}
document.addEventListener("DOMContentLoaded",init,false);
