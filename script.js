const email = document.getElementById("email");
const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return emailRegex.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Always prevent default form submission
  errorMessage.innerText = "";

  if (!email.value) {
    errorMessage.innerText = "Email is required.";
    return;
  }

  if (!isValidEmail(email.value)) {
    errorMessage.innerText = "Valid email required";
    return;
  }
  successMessage.style.display = "block";
  form.style.display = "none";
});
