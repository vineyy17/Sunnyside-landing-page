const primaryNav = document.querySelector('.navbar__list');
const navToggle = document.querySelector('.navbar__toggle');
const navLinks = document.querySelectorAll('.navbar__link');

const toggleNav = function () {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
    }
  };

navToggle.addEventListener('click', toggleNav);


for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", toggleNav);
}

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
