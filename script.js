// ===============================
// START SCREEN
// ===============================

const startScreen = document.getElementById("startScreen");
const mainSite = document.getElementById("mainSite");
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        startScreen.classList.add("hide");

        setTimeout(function () {
            mainSite.classList.add("show");
        }, 400);
    });
}

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
}

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (nav) nav.classList.remove("open");
    });
});

// ===============================
// LANGUAGE SWITCHER
// ===============================

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

let currentLanguage = "en";

function changeLanguage(language) {
    currentLanguage = language;

    if (language === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        document.body.classList.add("rtl");
        if (languageText) languageText.textContent = "EN";
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        document.body.classList.remove("rtl");
        if (languageText) languageText.textContent = "AR";
    }

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(function (element) {
        const translation = element.getAttribute("data-" + language);
        if (translation) {
            element.textContent = translation;
        }
    });
}

if (languageBtn) {
    languageBtn.addEventListener("click", function () {
        if (currentLanguage === "en") {
            changeLanguage("ar");
        } else {
            changeLanguage("en");
        }
    });
}

// ===============================
// SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
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
// FOOTER YEAR
// ===============================

const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
// ===============================
// 3D MOUSE PARALLAX FOR CARDS
// ===============================

const interactiveCards = document.querySelectorAll('.card, .link-card, .about-big');

interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8; // درجة التميل العمودي
        const rotateY = ((x - centerX) / centerX) * 8;  // درجة التميل الأفقي

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
});
