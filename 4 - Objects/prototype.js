function Car(make, model, color) {
    
    this.make = make;
    this.model = model;
    this.color = color;

}



function init () {

    var panel = document.getElementById("panel");
    var myCar = new Car("Ford", "Focus", "Blue");
    Car.prototype.doors = 4;
    
    for (property in myCar){
    
        if (myCar[property] !== ""){
            panel.innerHTML += (property + ": " + myCar[property] + "<br>");
        }
    
    }
    panel.innerHTML += ("<hr>");
    
        
    myCar.make = "Renault";
    myCar.model = "cleo";
    myCar.color = "Yellow";
    myCar.doors = 2;
    
     for (property in myCar){
    
        if (myCar[property] !== ""){
            panel.innerHTML += (property + ": " + myCar[property] + "<br>");
        }
    
    }
    panel.innerHTML += ("<hr>");
    
    
    
}
document.addEventListener("DOMContentLoaded",init,false);
