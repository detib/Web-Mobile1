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
        navbar.style.backgroundColor = "rgba(0,0,0,0.7)"
    } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0)"
    }
}

var slideImg = document.getElementById("slideImg");

var images = new Array(
    "./images/homepage/1.jpg",
    "./images/homepage/2.jpg",
    "./images/homepage/4.jpg",
    "./images/homepage/3.jpg"
)
var len = images.length;
var i = 0;
function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 5000);
}

var fleetImages = new Array(
    "./images/homepage/fleet1.jpg",
    "./images/homepage/fleet3.jpg",
    "./images/homepage/fleet2.jpg",
    "./images/homepage/fleet4.jpg"
)
var fleetImg = document.getElementById("fleetImg");
var fleetImagesLen = fleetImages.length;
var o = 0;
function slideShow(){
    if(o>fleetImagesLen-1){
        o=0;
    } else if(o<0){
        o = 3;
    }
    fleetImg.src = fleetImages[o];
}
function next(k){
    slideShow(o += k);
}
function prev(k){
    slideShow(o -= k);
}

var itemTabMenu1 = document.getElementById("item1");
var itemTabMenu2 = document.getElementById("item2");
var itemTabMenu3 = document.getElementById("item3");

var stepTabMenu1 = document.getElementById("step1");
var stepTabMenu2 = document.getElementById("step2");
var stepTabMenu3 = document.getElementById("step3");
function firstItem() {
    itemTabMenu1.style.display = "block";
    stepTabMenu1.style.backgroundColor = "#fab700"

    itemTabMenu2.style.display = "none";
    stepTabMenu2.style.backgroundColor = "#9e7400"

    itemTabMenu3.style.display = "none";
    stepTabMenu3.style.backgroundColor = "#9e7400"
}
function secondItem() {
    itemTabMenu1.style.display = "none";
    stepTabMenu1.style.backgroundColor = "#9e7400"

    itemTabMenu2.style.display = "block";
    stepTabMenu2.style.backgroundColor = "#fab700"

    itemTabMenu3.style.display = "none";
    stepTabMenu3.style.backgroundColor = "#9e7400"
}
function finalItem() {
    itemTabMenu1.style.display = "none";
    stepTabMenu1.style.backgroundColor = "#9e7400"

    itemTabMenu2.style.display = "none";
    stepTabMenu2.style.backgroundColor = "#9e7400"

    itemTabMenu3.style.display = "block";
    stepTabMenu3.style.backgroundColor = "#fab700"
}