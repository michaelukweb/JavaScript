function init() {

   var panel = document.getElementById("panel");
    
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    var now = new Date();
    
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    
    month = months[ month ];
    day = days[ day ];
    
    var str = day + ", " + month + " " + date + ", " + year;
    panel.innerHTML += "<br> UK Date String: " + str; 

}
document.addEventListener("DOMContentLoaded",init, false);