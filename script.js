// ========== TYPEWRITER EFFECT ==========
const words = ["Web Developer", "Full-Stack Engineer", "AI Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typewriter-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayText = isDeleting
    ? currentWord.substring(0, charIndex - 1)
    : currentWord.substring(0, charIndex + 1);

  typingElement.innerHTML = displayText + '<span class="blinking-cursor">|</span>';
  charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 150);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ========== EMAIL.JS CONTACT FORM ==========
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_sqql7hi", "template_jrs5txo", formData, "9suQlUstarBU2dqk5")
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    });
});
