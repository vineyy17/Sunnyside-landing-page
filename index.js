const primaryNav = document.querySelector('.navbar__list');
const navToggle = document.querySelector('.navbar__toggle');


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
