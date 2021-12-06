
function showMenu() {
    document.getElementById("mobileMenu").style.width = "17%";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.width = "0px";
}

var scrollToTopButton = document.getElementById("scrollToTopButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.opacity = "0";
    }
}