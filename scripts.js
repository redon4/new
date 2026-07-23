const hamMenu = document.getElementById("hamburger-menu");
const title = document.getElementById("title");
const titleIcon = document.querySelector(".title__icon");
const hamMenuOverlay = document.querySelector(".hamburger-menu__overlay")

let hamMenuHidden = true;
let hamMenuOverlayIsAnimating = false;

// base config of buttons
[title, titleIcon, hamMenuOverlay].forEach((el) => {
    el.addEventListener("click", hamMenuToggle)
})

// waits for the first frame to render the menu out of bounds
requestAnimationFrame(() => {
    // so that it starts out off screen (not in css file because height not in css)
    hamMenu.style.display = "flex"
    hamMenu.style.top = -hamMenu.offsetHeight + "px";
})

// switches the event on obj from f1 to f2
function switchEventListener(obj, event, f1, f2) {
    obj.removeEventListener(event, f1);
    obj.addEventListener(event, f2);
}

function hamMenuToggle() {
    if (hamMenuOverlayIsAnimating === true) { return }

    if (hamMenuHidden === false) {
        hamMenuOverlayIsAnimating = true;
        hamMenuHidden = true;

        // hide the overlay
        hamMenuOverlay.style.opacity = 0;

        // so that you can't click it twice and break it
        hamMenuOverlay.removeEventListener("click", hamMenuToggle)

        // use setTimeout so that it waits for the animation to finish before hiding
        setTimeout(() => {
            hamMenuOverlay.style.visibility = "hidden";
            hamMenuOverlayIsAnimating = false;
        },
            // get float from string
            parseFloat(
                // get string value of the var
                getComputedStyle(hamMenuOverlay)
                    .getPropertyValue("--animation-duration")
            )
            // s => ms ( example 0.1s => 100ms )
            * 1000
        )

        // switch it to the open button
        title.style.textDecoration = "none";
        title.addEventListener("click", hamMenuToggle);
        title.removeAttribute("href");

        // move it out of sight / to og pos (og pos there because of line 17)
        hamMenu.style.transform = "translateY(0)";

        // switch it to menu symbol 
        titleIcon.innerHTML = "&#x2630;";

    } else { // open menu
        hamMenuHidden = false;

        // show the overlay
        hamMenuOverlay.style.opacity = 0.2;

        // so that you can't click it twice and break it
        hamMenuOverlay.addEventListener("click", hamMenuToggle)

        hamMenuOverlay.style.visibility = "visible";

        // switch the title to a link
        title.style.textDecoration = "underline";
        title.removeEventListener("click", hamMenuToggle);
        // wait 1 ms before doing the href set to root, else it would get activated and move you to "/"
        // fun fact: same result if you wait (in ms):
        // 10 ** -10000000000000000000000000000
        // thats a number with more zeros than atoms in the universe lol
        setTimeout(() => {
            title.setAttribute("href", "/")
        }, 1)

        // needs to be like this else the blur wouldn't work
        // (it can't be outside its parent (else the blur doesn't work) and to
        //  be exactly under the header you need to get its height using js)
        // move it into sight
        hamMenu.style.transform = "translateY(" + (title.offsetHeight + hamMenu.offsetHeight) + "px)";

        // switch icon to x
        titleIcon.innerHTML = "&#10005;";
    }
}
