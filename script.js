const email = document.getElementById("email");
const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Always prevent default form submission

  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("Email is required.");
  } else if (!emailPattern.test(email.value)) {
    messages.push("Please enter a valid email address.");
  }

  // Check if there is a validation error message; if so, display it and stop form submission
  if (messages.length > 0) {
    errorMessage.innerText = messages.join(", ");
    return;
  }

  // If no errors, show success message
  successMessage.style.display = "block";
  form.style.display = "none";
});
