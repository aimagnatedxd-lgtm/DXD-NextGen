const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// IMPORTANT: Replace this with your real WhatsApp number in international format.
// Example for India: 919876543210
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

document.getElementById("leadForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const leadType = document.getElementById("leadType").value;
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `DXD NextGen Enquiry%0A%0AType: ${encodeURIComponent(leadType)}%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message || "I want to know more about Robotics, AI and Coding programs.")}`;

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please edit script.js and replace WHATSAPP_NUMBER with your real WhatsApp number before publishing.");
    return;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});
