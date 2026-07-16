const hamMenu = document.getElementById("hamburger-menu");
const title = document.getElementById("title");
const titleIcon = document.querySelector(".title__icon");

let hamMenuHidden = true;

title.addEventListener("click", titleAction)
titleIcon.addEventListener("click", titleAction)

document.querySelector("main").addEventListener("click", hideHamburgerMenu)
document.querySelector("footer").addEventListener("click", hideHamburgerMenu)


function titleAction() {
    if (hamMenuHidden === false) { // press when menu / acts as link
        window.location.href = "/"

    } else { // press when no menu / opens
        hamMenuHidden = false;
        hamMenu.style.transition = "transform 0.7s ease-in-out"
        // needs to be like this else the blur woudn't work
        hamMenu.style.transform = "translateY(" + title.offsetHeight + "px)"
        title.style.textDecoration = "underline"

        titleIcon.removeEventListener("click", titleAction)
        titleIcon.addEventListener("click", hideHamburgerMenu)

        titleIcon.style.transform = "translateY(-50%)"; // rotate(360deg)";
        titleIcon.innerHTML = "&#10005;"





    }
}

function hideHamburgerMenu() {
    hamMenuHidden = true;
    hamMenu.style.transform = "translateY(" + (-title.offsetHeight - hamMenu.offsetHeight) + "px)"

    title.style.textDecoration = "none"

    titleIcon.removeEventListener("click", hideHamburgerMenu)
    titleIcon.addEventListener("click", titleAction)


    // titleIcon.style.transform = "translateY(-50%) rotate(0deg)"
    titleIcon.innerHTML = "&#x2630;"

}