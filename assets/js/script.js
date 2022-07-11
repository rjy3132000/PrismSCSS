/* Author: 

*/
let hamburg = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

hamburg.addEventListener("click", menuHamburger);

function menuHamburger() {
    if (hamburg.classList.contains("active")) {
        hamburg.classList.remove("active");
        menu.classList.remove("active");
        body.classList.remove("active");
    } 
    else {
        hamburg.classList.add("active");
        menu.classList.add("active");
        body.classList.add("active");
    }
}























