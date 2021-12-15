

// showMenu gets id mobileMenu and changes it transform to translateX(0)
function showMenu() {
    document.getElementById("mobileMenu").style.transform = "translateX(0)";
}

// closeMenu gets id mobileMenu and changes it transform to translateX(200px)
function closeMenu() {
    document.getElementById("mobileMenu").style.transform = "translateX(200px)";
}

//window.onscroll creates a function that calls the functions scrollFunction(), and navbarOpacity() every time the user scrolls
window.onscroll = function () { scrollFunction()};
// ==================================================================
// ==================================================================
// ==================================================================
// This function is for the scroll to top button, first we found the id's and stored them in variables
// Then we create an if loop that checks how far from the top is the window scrolled by the document.body.scrollTop
// higher than 400 units it gives the button with the id="butoni" the class buttonScroll-visible
// at 0 units it changes the opacity to 1
// lower than 400 units it gives the class buttonScroll-hidden

var scrollToTopButton = document.getElementById("showButton");
var mainButton = document.getElementById("butoni");
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopButton.className = "buttonScroll-visible";
    } else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mainButton.style.opacity = "1";
    } else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
        scrollToTopButton.className = "buttonScroll-hidden";
    }
}
// ==================================================================
// ==================================================================


// ==================================================================
// ==================================================================
// the functions below are for the slideshows, and the slider() function is called on body load
// the functions work in this way
// we have the id of the image, we store image paths in an array
// then we store said array length in a variable and declare a 0 integer 
// then we have a function starts with an if loop that checks if the variable is more than length-1 then it will change it to 0
// by doing that we make it possible to always loop through the array without stopping
// every time the photo is changed then the number is added 1 so the next time it will have the next item in the array
// after that we have a setTimeout() method called to recall the function every 5seconds
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

// the next function is the same way
// the only thing that changes is that we have now two more functions that change the number according to which one was called
// and one more if loop so that if the number is lower than 0 than it will go at the highest number of the array, in this case 3
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
// adds 1 to the number
function next(k){
    slideShow(o += k);
}

//substracts 1 from the number
function prev(k){
    slideShow(o -= k);
}


// finally we have 6 ids stored in variables
// 3 functions that change these id style
// firstItem() changes the display of 3 elements, making 2 of them invisible and one visible,
// and also one of the background-colors to a lighter color while others to darker
// secondItem() and finalItem() have the same function just with other elements
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