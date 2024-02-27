'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// document.addEventListener("DOMContentLoaded", function() {
//     // Select the elements
//     const header = document.querySelector("header");
//     const wa = document.querySelector("[data-wa-btn]");

//     // Add the "active" class to both elements
//     header.classList.add("active");
//     wa.classList.add("active");
// });

const scriptURL = 'https://script.google.com/macros/s/AKfycbw-4YQagI-GHLSOGmNUhTc2MMrKXNli4BajiDRiI99aWGxmn4ruvIcvohnx4cdhDr1d/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


document.addEventListener("DOMContentLoaded", function() {
        // Function to get current timestamp in IST
        function getCurrentTimestampIST() {
            var currentDate = new Date();
            var utcOffset = 5.5 * 60; // IST is UTC+5.5
            var istOffset = currentDate.getTimezoneOffset() + utcOffset;
            currentDate.setMinutes(currentDate.getMinutes() + istOffset);
            return currentDate.toISOString();
        }

        // Automatically populate the hidden input field with current timestamp in IST
        document.querySelector('form[name="contact-form"]').addEventListener("submit", function() {
            document.getElementById("timestamp").value = getCurrentTimestampIST();
        });
    });