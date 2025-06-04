// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Form validation and submission
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const city = form.querySelector('input[placeholder="City"]').value.trim();
  const role = form.querySelector("select").value;

  if (!name || !city || !role) {
    alert("Please fill in all the fields 🐾");
    return;
  }

  // Optional: show a success message
  alert(`Thank you, ${name}! 🐶 You’ve joined the movement from ${city} as a ${role}.`);

  // Reset form
  form.reset();
});

// Optional: Mobile menu toggle (if you build a hamburger menu)
