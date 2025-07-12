const email = document.getElementById("email");
const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submitBtn");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return emailRegex.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Always prevent default form submission
  errorMessage.innerText = "";
  const emailValue = email.value;

  if (!emailValue) {
    errorMessage.innerText = "Email is required";
    return;
  }
  if (!isValidEmail(emailValue)) {
    errorMessage.innerText = "Valid email required";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsla(5, 100%, 95%, 1.00)";
    return;
  }
  successMessage.style.display = "block";
  form.style.display = "none";
});

email.addEventListener("focus", () => {
  email.style.borderColor = "hsl(0, 0%, 58%)";
  email.style.color = "";
  email.style.backgroundColor = "";
  
});
