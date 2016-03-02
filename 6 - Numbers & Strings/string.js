function init() {

    var panel = document.getElementById("panel");
    
    var s1 = "JavaScript";
    var s2 = " is ";
    var s3 = " cool ";
    var picName = "myPic";
    var picFile = "pic.jpeg";
 
    panel.innerHTML = s1.toUpperCase();
    panel.innerHTML += "<br>" + s1.toLowerCase();
    panel.innerHTML += "<br>" + s1.concat(s2,s3);
    panel.innerHTML += "<br>" + s1 + " has " + s1.length + " chracters ";
    
    panel.innerHTML += "<br><img id = 'myPic'>";
    document.images[picName].src = picFile;
    
}
document.addEventListener("DOMContentLoaded",init, false);