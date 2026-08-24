// ===============================
// START SCREEN
// ===============================

const startScreen = document.getElementById("startScreen");
const mainSite = document.getElementById("mainSite");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    startScreen.classList.add("hide");

    setTimeout(function () {
        mainSite.classList.add("show");
    }, 400);

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
});

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
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

    // تغيير اتجاه الصفحة
    if (language === "ar") {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.body.classList.add("rtl");

        languageText.textContent = "EN";

    } else {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.body.classList.remove("rtl");

        languageText.textContent = "AR";
    }


    // ترجمة كل العناصر
    const elements =
        document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(function (element) {

        const translation =
            element.getAttribute("data-" + language);

        if (translation) {
            element.textContent = translation;
        }

    });

}


// الضغط على زر اللغة
languageBtn.addEventListener("click", function () {

    if (currentLanguage === "en") {

        changeLanguage("ar");

    } else {

        changeLanguage("en");

    }

});


// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.1
    });


revealElements.forEach(function (element) {
    observer.observe(element);
});


// ===============================
// YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
