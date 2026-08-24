// ===============================
// START SCREEN
// ===============================

const startScreen = document.getElementById("startScreen");
const mainSite = document.getElementById("mainSite");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hide");

    setTimeout(() => {
        mainSite.classList.add("show");
    }, 400);

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// ===============================
// LANGUAGE
// ===============================

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

let currentLanguage = "en";

function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    if (language === "ar") {

        document.body.classList.add("rtl");

        document.documentElement.dir = "rtl";

        languageText.textContent = "EN";

    } else {

        document.body.classList.remove("rtl");

        document.documentElement.dir = "ltr";

        languageText.textContent = "AR";

    }


    const translatedElements =
        document.querySelectorAll("[data-en][data-ar]");


    translatedElements.forEach(element => {

        element.textContent =
            element.getAttribute(`data-${language}`);

    });

}


languageBtn.addEventListener("click", () => {

    if (currentLanguage === "en") {

        changeLanguage("ar");

    } else {

        changeLanguage("en");

    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

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


// ===============================
// YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
