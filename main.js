const form = document.querySelector("form");
const message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.checkValidity();

  // CREATE SUCCESS MESSAGE

  const success = document.createElement("p");
  success.className = "success";
  success.textContent = "Your Profile was created successfully";

  message.appendChild(success);
});
