// sticky navbar on scroll
window.onscroll = function() {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        document.getElementById('top').style.marginTop = "75px";
    }
    else {
        navbar.classList.remove("sticky");
        document.getElementById('top').style.removeProperty('margin-top');
    }
}