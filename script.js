const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const progressBar = document.getElementById("progressBar");
const logoCard = document.getElementById("logoCard");


/* =========================
   MOBILE MENU
========================= */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

}


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        height > 0
            ? (scrollTop / height) * 100
            : 0;

    progressBar.style.width = `${progress}%`;

});


/* =========================
   3D LOGO EFFECT
========================= */

if (
    logoCard &&
    window.matchMedia("(pointer: fine)").matches
) {

    logoCard.addEventListener("mousemove", event => {

        const rect =
            logoCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        logoCard.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.015)
        `;

    });


    logoCard.addEventListener("mouseleave", () => {

        logoCard.style.transform = `
            perspective(900px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    /* Fallback for older browsers */

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


/* =========================
   FOOTER YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
