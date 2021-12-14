function showMenu() {
    document.getElementById("mobileMenu").style.transform = "translateX(0)";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.transform = "translateX(200px)";
}

var scrollToTopButton = document.getElementById("showButton");
var mainButton = document.getElementById("butoni");
var navbar = document.getElementById("navbar");

// scrollFunction()
window.onscroll = function () { scrollFunction(); navbarOpacity() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopButton.className = "buttonScroll-visible";
    } else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mainButton.style.opacity = "1";
    } else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
        scrollToTopButton.className = "buttonScroll-hidden";
    }
}
function navbarOpacity() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.6)"
    } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0)"
    }
}

var slideImg = document.getElementById("slideImg");

var images = new Array (
    "./images/homepage/1.jpg",
    "./images/homepage/2.jpg",
    "./images/homepage/4.jpg",
    "./images/homepage/3.jpg"
)
var len = images.length;
var i = 0;
function slider() {
    if (i>len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',5000);
}

var count = parseInt(document.getElementById("counter").value)
var k = 0;
function counter() {
    if ( i < count ) {
        i++;
        document.getElementById("counter").innerText = i;
        setTimeout('counter()', 50)        
    }
}