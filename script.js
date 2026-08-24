const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const progressBar = document.getElementById("progressBar");
const logoCard = document.getElementById("logoCard");

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");


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

    progressBar.style.width =
        `${progress}%`;

});


/* =========================
   3D LOGO
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

    revealElements.forEach(element => {
        element.classList.add("show");
    });

}


/* =========================
   TRANSLATIONS
========================= */

const translations = {

    en: {

        pill: "💜 Built for teens, powered by opportunities",

        home: "Home",
        about: "About",
        opportunities: "Opportunities",
        links: "Links",
        join: "Join Us",

        heroTitle: "Teens Opportunities",
        heroSpan: "For Upgrowth",

        heroText:
            "TOFU is a youth-focused initiative helping teens discover opportunities, learn new skills and grow.",

        joinTofu: "Join TOFU",
        discover: "Discover Opportunities",

        discoverSmall: "Discover",
        learn: "Learn",
        grow: "Grow",

        ourStory: "OUR STORY",

        started: "TOFU started with",
        marketing: "Marketing.",
        building: "Now we're building",
        opportunitiesWord: "opportunities.",

        story1:
            "TOFU started as a Marketing Team helping people, initiatives, events and small businesses through content, social media and branding.",

        story2:
            "But we wanted to do more. Today, TOFU is a youth-focused initiative that helps teens discover opportunities and take their next step.",

        then: "Then",
        marketingMedia: "Marketing & Media",

        now: "Now",
        youthOpportunities: "Youth Opportunities",

        whatWeDo: "WHAT WE DO",

        findYour: "Find your next",
        opportunity: "opportunity.",

        opportunitiesText:
            "We help young people discover opportunities that can help them learn and grow.",

        scholarships: "Scholarships",
        scholarshipsText:
            "Discover scholarships and educational opportunities.",

        courses: "Courses",
        coursesText:
            "Learn new skills through courses and educational programs.",

        competitions: "Competitions",
        competitionsText:
            "Challenge yourself and gain real experience.",

        events: "Events",
        eventsText:
            "Find events where you can learn, connect and meet new people.",

        moreOpportunities: "More Opportunities",
        moreOpportunitiesText:
            "Volunteering, programs, collaborations and more.",

        stayConnected: "STAY CONNECTED",

        tofuOne: "TOFU, one click away.",

        followUs:
            "Follow us and never miss our latest updates.",

        volunteerApplication: "Volunteer Application",
        joinTeam: "Join the TOFU team",

        whatsapp: "WhatsApp Channel",
        latestUpdates: "Latest updates & opportunities",

        followInstagram: "Follow TOFU Media",
        followFacebook: "Follow our Facebook page",

        ready: "READY?",

        nextOpportunity: "Your next opportunity",
        mightStart: "might start with",

        joinDescription:
            "Join us, discover opportunities and grow with the community.",

        becomeVolunteer: "Become a Volunteer",

        fullName:
            "Teens Opportunities For Upgrowth",

        backTop: "Back to top ↑",

        footerText:
            "Made for young dreamers & doers 💜"
    },


    ar: {

        pill: "💜 معمول للمراهقين، ومدعوم بالفرص",

        home: "الرئيسية",
        about: "عن TOFU",
        opportunities: "الفرص",
        links: "الروابط",
        join: "انضم إلينا",

        heroTitle: "فرص للشباب",
        heroSpan: "من أجل التطور",

        heroText:
            "TOFU هي مبادرة شبابية بتساعد المراهقين يكتشفوا الفرص، ويتعلموا مهارات جديدة، ويتطوروا.",

        joinTofu: "انضم إلى TOFU",
        discover: "اكتشف الفرص",

        discoverSmall: "اكتشف",
        learn: "اتعلم",
        grow: "اتطور",

        ourStory: "قصتنا",

        started: "بدأت TOFU بـ",
        marketing: "التسويق.",
        building: "ودلوقتي بنبني",
        opportunitiesWord: "فرص.",

        story1:
            "بدأت TOFU كتيم متخصص في التسويق بيساعد الأشخاص والمبادرات والفعاليات والمشروعات الصغيرة من خلال المحتوى والسوشيال ميديا والـ Branding.",

        story2:
            "لكن كنا عايزين نعمل أكتر. النهارده TOFU بقت مبادرة شبابية بتساعد المراهقين يكتشفوا الفرص ويبدأوا خطوتهم الجاية.",

        then: "زمان",
        marketingMedia: "تسويق وإعلام",

        now: "دلوقتي",
        youthOpportunities: "فرص للشباب",

        whatWeDo: "إحنا بنعمل إيه؟",

        findYour: "اكتشف فرصتك",
        opportunity: "الجاية.",

        opportunitiesText:
            "بنساعد الشباب يكتشفوا فرص تساعدهم يتعلموا ويتطوروا.",

        scholarships: "المنح الدراسية",
        scholarshipsText:
            "اكتشف المنح الدراسية والفرص التعليمية.",

        courses: "الكورسات",
        coursesText:
            "اتعلم مهارات جديدة من خلال الكورسات والبرامج التعليمية.",

        competitions: "المسابقات",
        competitionsText:
            "اتحدى نفسك واكتسب خبرة حقيقية.",

        events: "الإيفنتات",
        eventsText:
            "اكتشف إيفنتات تقدر تتعلم فيها وتتواصل وتقابل ناس جديدة.",

        moreOpportunities: "فرص أكتر",
        moreOpportunitiesText:
            "تطوع، برامج، تعاونات وفرص أكتر.",

        stayConnected: "خليك متابعنا",

        tofuOne: "TOFU على بُعد ضغطة واحدة.",

        followUs:
            "تابعنا ومتفوّتش آخر التحديثات والفرص.",

        volunteerApplication: "فورم التطوع",

        joinTeam:
            "انضم لفريق TOFU",

        whatsapp: "قناة واتساب",

        latestUpdates:
            "آخر التحديثات والفرص",

        followInstagram:
            "تابع TOFU Media",

        followFacebook:
            "تابع صفحتنا على فيسبوك",

        ready: "جاهز؟",

        nextOpportunity:
            "فرصتك الجاية",

        mightStart:
            "ممكن تبدأ مع",

        joinDescription:
            "انضم لينا، اكتشف الفرص واتطور مع مجتمع TOFU.",

        becomeVolunteer:
            "انضم كمتطوع",

        fullName:
            "فرص الشباب من أجل التطور",

        backTop:
            "العودة للأعلى ↑",

        footerText:
            "معمول للشباب اللي عندهم أحلام وبيسعوا يحققوها 💜"
    }

};


/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage(language) {

    const elements =
        document.querySelectorAll("[data-key]");


    elements.forEach(element => {

        const key =
            element.getAttribute("data-key");

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    /* Page direction */

    if (language === "ar") {

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

        document.body.classList.add("arabic");

    } else {

        document.documentElement.lang = "en";

        document.documentElement.dir = "ltr";

        document.body.classList.remove("arabic");

    }


    /* Active button */

    if (enBtn && arBtn) {

        if (language === "ar") {

            arBtn.classList.add("active");
            enBtn.classList.remove("active");

        } else {

            enBtn.classList.add("active");
            arBtn.classList.remove("active");

        }

    }


    /* Save language */

    localStorage.setItem(
        "tofuLanguage",
        language
    );

}


/* =========================
   LANGUAGE BUTTONS
========================= */

if (enBtn) {

    enBtn.addEventListener("click", () => {

        changeLanguage("en");

    });

}


if (arBtn) {

    arBtn.addEventListener("click", () => {

        changeLanguage("ar");

    });

}


/* =========================
   LOAD LANGUAGE
========================= */

const savedLanguage =
    localStorage.getItem("tofuLanguage") || "en";

changeLanguage(savedLanguage);


/* =========================
   FOOTER YEAR
========================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}
