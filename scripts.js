

document.getElementById("title").addEventListener("click", titleAction)
document.querySelector(".title__icon").addEventListener("click", titleAction)

document.querySelector("main").addEventListener("click", hideHamburgerMenu)
document.querySelector("footer").addEventListener("click", hideHamburgerMenu)


function titleAction() {
    const menu = document.getElementById("hamburger-menu");
    const title = document.getElementById("title");
    if (menu.style.display === "flex") { // press when menu
        menu.style.display = "none";
        window.location.href = "/"
    } else { // press when no menu / opens
        menu.style.display = "flex"

        // needs to be like this else the blur woudn't work
        menu.style.transform = "translateY(" + title.offsetHeight + "px)"
        title.style.textDecoration = "underline"

        function hideHamburgerMenu() {
            menu.style.display = "none"

        }



    }
}