/*=========================================
        AGROVISION - SCRIPT.JS
=========================================*/

/*==========================
        NAVBAR SCROLL
==========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/*==========================
      COUNTER ANIMATION
==========================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            const speed = 200;

            const updateCounter = () => {

                const count = +counter.innerText;

                const increment = Math.ceil(target / speed);

                if (count < target) {

                    counter.innerText = count + increment;

                    setTimeout(updateCounter, 10);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================
      SCROLL REVEAL
==========================*/

const reveals = document.querySelectorAll(".glass-card");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(card => {

    card.classList.add("reveal");

    revealObserver.observe(card);

});

/*==========================
      MARKET SEARCH
==========================*/

const search = document.getElementById("marketSearch");

if (search) {

    search.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const rows = document.querySelectorAll("#marketTable tr");

        rows.forEach(row => {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(filter) ? "" : "none";

        });

    });

}

/*==========================
      CONTACT FORM
==========================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}


/*==========================
      SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================
      BUTTON RIPPLE EFFECT
==========================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

/*==========================
      PAGE LOADER EFFECT
==========================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .5s";

        document.body.style.opacity = "1";

    }, 100);

});

/*==========================
      CURRENT YEAR
==========================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
/* ==========================================
   LOGIN / REGISTER FORM TOGGLE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loginBox = document.getElementById("loginBox");
    const registerBox = document.getElementById("registerBox");

    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    if (showRegister) {

        showRegister.addEventListener("click", function () {

            loginBox.style.display = "none";
            registerBox.style.display = "block";

            registerBox.classList.add("fade-in");

        });

    }

    if (showLogin) {

        showLogin.addEventListener("click", function () {

            registerBox.style.display = "none";
            loginBox.style.display = "block";

            loginBox.classList.add("fade-in");

        });

    }

});


/* ==========================================
   LOGIN FORM
========================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Login Successful!");

        this.reset();

    });

}


/* ==========================================
   REGISTER FORM
========================================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Registration Successful!");

        document.getElementById("registerBox").style.display = "none";
        document.getElementById("loginBox").style.display = "block";

        this.reset();

    });

}