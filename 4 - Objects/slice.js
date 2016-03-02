function init () {

    var panel = document.getElementById("panel");
    var seasons = ["Spring", " Summer", " Fall", " Winter"];
    
    
    panel.innerHTML = "Elements: " + seasons;
    panel.innerHTML += "<br>Joined: " + seasons.join(" and ");
    panel.innerHTML += "<hr>Popped: " + seasons.pop();
    panel.innerHTML += "<br>Elements: " + seasons;
    panel.innerHTML += "<hr>Push: " + seasons.push("Winter");
    panel.innerHTML += "<br>Elements: " + seasons;
    panel.innerHTML += "<hr>Sliced: " + seasons.slice(1,3);//Prints Summer and Fall index(n,n-1)
    
    panel.innerHTML += "<br>Splice: " + seasons.splice(2,1, "Autumn");//replace index position 2(fall, and print replacement)
    panel.innerHTML += "<br>Elements: " + seasons;
}
document.addEventListener("DOMContentLoaded",init,false);
