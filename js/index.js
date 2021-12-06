import '../css'

function showMenu() {
    document.getElementById("mobileMenu").style.width = "17%";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.width = "0px";
}

var scrollToTopButton = document.getElementById("scrollToTopButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}