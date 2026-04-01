
/* ================================
   1. WELCOME FUNCTION
================================ */
function welcome() {
    alert("Welcome to Tourism Website! Explore India.");
}


/* ================================
   2. FORM VALIDATION
================================ */
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.innerText = "";

    if (name === "") {
        error.innerText = "Enter your name!";
        error.style.color = "red";
        return false;
    }

    if (email === "") {
        error.innerText = "Enter your email!";
        error.style.color = "red";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Invalid email!";
        error.style.color = "red";
        return false;
    }

    if (message === "") {
        error.innerText = "Enter your message!";
        error.style.color = "red";
        return false;
    }

    error.innerText = "Form submitted successfully!";
    error.style.color = "green";

    return false;
}


/* ================================
   3. ACTIVE NAVIGATION BOX
================================ */
window.onload = function () {

    let links = document.querySelectorAll("nav a");
    let currentPage = window.location.href;

    links.forEach(function(link) {
        if (currentPage.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });

};


/* ================================
   4. SCROLL EFFECT
================================ */
window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {
        console.log("Scrolling page...");
    }

});


/* ================================
   5. EXTRA FEATURE
================================ */
function showPlace(name) {
    alert("You selected: " + name);
}


/* ================================
   6. PAGE LOAD MESSAGE
================================ */
window.addEventListener("load", function () {
    console.log("Website Loaded Successfully!");
});