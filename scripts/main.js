/*Top navigation toggle menu*/
function navIconClick() {
    var x = document.getElementById("nav-tabs");
    if (x.className === "topnav") {
        x.className += " topnav-expand";
    } else {
        x.className = "topnav";
    }
}
