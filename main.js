const form = document.querySelector("form");
const success = document.querySelector(".success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.checkValidity();

  success.innerHTML = "<p>Your Profile was created successfully</p>";
});
