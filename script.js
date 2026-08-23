const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const progressBar =
    document.getElementById("progressBar");

const cursorGlow =
    document.querySelector(".cursor-glow");

const logoCard =
    document.getElementById("logoCard");



/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});



/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const progress =
        height > 0
            ? (scrollTop / height) * 100
            : 0;

    progressBar.style.width =
        `${progress}%`;

});



/* =========================
   CURSOR GLOW
========================= */

window.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});



/* =========================
   3D LOGO EFFECT
========================= */

if (
    logoCard &&
    window.matchMedia("(pointer: fine)").matches
) {

    logoCard.addEventListener(
        "mousemove",
        event => {

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


            logoCard.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.015)
                `;

        }
    );


    logoCard.addEventListener(
        "mouseleave",
        () => {

            logoCard.style.transform =
                `
                perspective(900px)
                rotateX(0deg)
                rotateY(0deg)
                scale(1)
                `;

        }
    );

}



/* =========================
   SCROLL REVEAL
========================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

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



document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();