function init() {

    document.getElementById("panel").innerHTML = stringify("javascript","in","easy","steps");
    document.getElementById("panel").innerHTML += stringify("written", "by", "mike", "mcgrath");
}

document.addEventListener("DOMContentLoaded",init,false);

function stringify(argA, argB, argC, argD) {

    var str = argA + " " + argB + " " + argC + " " + argD + "<br>";
    return str;
}



