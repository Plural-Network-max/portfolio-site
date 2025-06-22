// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("HV_skfhjmRkZ3Xhvj"); // Replace with your Public Key
})();

// Listen for form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("your_service_id", "your_template_id", this)
    .then(function () {
      alert("✅ Email sent successfully!");
    }, function (error) {
      alert("❌ Failed to send email: " + JSON.stringify(error));
    });
});
// Toggle navbar menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
