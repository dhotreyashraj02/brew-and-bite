/* =========================================================
   BREW & BITE
   Main JavaScript File
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION MENU
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a navigation link

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* =========================================================
   2. SMOOTH SCROLLING
========================================================= */

const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   3. MENU CATEGORY FILTER
========================================================= */

const menuFilters = document.querySelectorAll(".menu-filter");
const menuCards = document.querySelectorAll(".menu-card");

menuFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        menuFilters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedCategory =
            filter.getAttribute("data-category");


        menuCards.forEach(card => {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================================
   4. RESERVATION FORM
========================================================= */

const reservationForm =
    document.getElementById("reservation-form");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("guest-name").value.trim();

        const date =
            document.getElementById("guest-date").value;

        const time =
            document.getElementById("guest-time").value;

        const guests =
            document.getElementById("guest-count").value;


        if (!name || !date || !time || !guests) {

            alert("Please fill in all required fields.");

            return;

        }


        alert(
            `Thank you, ${name}! Your table reservation request has been received.`
        );


        reservationForm.reset();

    });

}


/* =========================================================
   5. CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("contact-name").value.trim();

        const email =
            document.getElementById("contact-email").value.trim();

        const message =
            document.getElementById("contact-message").value.trim();


        if (!name || !email || !message) {

            alert("Please fill in all required fields.");

            return;

        }


        alert(
            `Thank you, ${name}! Your message has been sent successfully.`
        );


        contactForm.reset();

    });

}


/* =========================================================
   6. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   7. HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


/* =========================================================
   8. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".menu-card, " +
    ".offer-card, " +
    ".gallery-item, " +
    ".why-card, " +
    ".testimonial-card, " +
    ".reservation-wrapper, " +
    ".contact-card, " +
    ".contact-form-wrapper"
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
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


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


/* =========================================================
   9. MINIMUM RESERVATION DATE
========================================================= */

const guestDate =
    document.getElementById("guest-date");


if (guestDate) {

    const today =
        new Date().toISOString().split("T")[0];

    guestDate.setAttribute(
        "min",
        today
    );

}


/* =========================================================
   10. BUTTON CLICK EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn, .offer-btn, .nav-cta"
    );


buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.classList.add("clicked");


        setTimeout(() => {

            this.classList.remove("clicked");

        }, 300);

    });

});


/* =========================================================
   11. WEBSITE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateActiveNavigation();

        updateHeader();

    }
);


/* =========================================================
   WEBSITE LOADED
========================================================= */

console.log(
    "BREW & BITE website JavaScript loaded successfully!"
);