// ==================================================================
// ==================================================================
// this function changes the navbar background-color the same way the function above changes the class
// this function changes the navbar background-color to rgba(0,0,0,0.7) when the user scrolls 200 units down
// and when lower than 200 units then the background-color is changed to rgba(0,0,0,0)

window.addEventListener('scroll', navbarOpacity);
var navbar = document.getElementById("navbar");
function navbarOpacity() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.7)"
    } else {
        navbar.style.backgroundColor = "rgba(0,0,0,0)"
    }
}