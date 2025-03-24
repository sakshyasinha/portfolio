const words = ["Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typewriter-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    let displayText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

    // Attach the blinking cursor inside the text
    typingElement.innerHTML = displayText + `<span class="blinking-cursor">|</span>`;
    
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using Email.js
    emailjs.send("service_sqql7hi", "template_jrs5txo", formData, "9suQlUstarBU2dqk5")
    .then(response => {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form after submission
    })
    .catch(error => {
        alert("Failed to send message. Please try again.");
        console.error("Error:", error);
    });
});


document.addEventListener("DOMContentLoaded", typeEffect);
