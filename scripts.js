const hamMenu = document.getElementById("hamburger-menu");
const title = document.getElementById("title");
const titleIcon = document.querySelector(".title__icon");

let hamMenuHidden = true;

// base config of buttons
title.addEventListener("click", hamMenuToggle)
titleIcon.addEventListener("click", hamMenuToggle)


// so that it starts out of screen (not in css file because wrong height in css)
hamMenu.style.top = -hamMenu.offsetHeight + "px";

// fn only because its used two times (used by title)
function gotoRoot() {
    window.location.href = "/"

}

function hamMenuToggle() {
    if (hamMenuHidden === false) {
        hamMenuHidden = true;

        // make anywhere no longer hide the menu
        document.querySelector("main").removeEventListener("click", hamMenuToggle);
        document.querySelector("footer").removeEventListener("click", hamMenuToggle);

        // for switching it to the open button
        title.style.textDecoration = "none";
        title.removeEventListener("click", gotoRoot);
        title.addEventListener("click", hamMenuToggle);

        // move it out of sight
        hamMenu.style.transform = "translateY(0)";

        // switch it to menu symbol / to og pos (og pos there because of line 12)
        titleIcon.innerHTML = "&#x2630;";


        // titleIcon.style.transform = "translateY(-50%) rotate(0deg)"

    } else { // open menu
        hamMenuHidden = false;

        // for closing the menu when tapping anywhere
        document.querySelector("main").addEventListener("click", hamMenuToggle);
        document.querySelector("footer").addEventListener("click", hamMenuToggle);

        // for switching the title to a link
        title.style.textDecoration = "underline";
        title.removeEventListener("click", hamMenuToggle);
        title.addEventListener("click", gotoRoot);


        // needs to be like this else the blur woudn't work
        // move it into sight
        hamMenu.style.transform = "translateY(" + (title.offsetHeight + hamMenu.offsetHeight) + "px)";

        // switch icon to x
        titleIcon.innerHTML = "&#10005;";

        // titleIcon.style.transform = "translateY(-50%)"; // rotate(360deg)";

    }
}

