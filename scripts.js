const hamMenu = document.getElementById("hamburger-menu");
const title = document.getElementById("title");
const titleIcon = document.querySelector(".title__icon")

title.addEventListener("click", titleAction)
titleIcon.addEventListener("click", titleAction)

document.querySelector("main").addEventListener("click", hideHamburgerMenu)
document.querySelector("footer").addEventListener("click", hideHamburgerMenu)


function titleAction() {
    if (hamMenu.style.display === "flex") { // press when menu / acts as link
        window.location.href = "/"

    } else { // press when no menu / opens
        hamMenu.style.display = "flex"
        // needs to be like this else the blur woudn't work
        hamMenu.style.transform = "translateY(" + title.offsetHeight + "px)"
        title.style.textDecoration = "underline"

        titleIcon.removeEventListener("click", titleAction)
        titleIcon.addEventListener("click", hideHamburgerMenu)

        titleIcon.innerHTML = "&#10005;"





    }
}

function hideHamburgerMenu() {
    hamMenu.style.display = "none"
    title.style.textDecoration = "none"

    titleIcon.removeEventListener("click", hideHamburgerMenu)
    titleIcon.addEventListener("click", titleAction)

    titleIcon.innerHTML = "&#x2630;"

}