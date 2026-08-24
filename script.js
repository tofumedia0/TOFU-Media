// ===============================
// START BUTTON
// ===============================

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainSite = document.getElementById("mainSite");


startBtn.addEventListener("click", function () {

    startScreen.classList.add("hide");

    setTimeout(() => {

        mainSite.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

});



// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});



// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});



// ===============================
// YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
