const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const signUpBtn = document.querySelector(".free-trail-btn");

const errorMessage = document.querySelectorAll(".error-message");
console.log(errorMessage);
const inputs_together = [firstName, lastName, email, password];

const placeholders = inputs_together.map(function (e) {
  return e.getAttribute("placeholder");
});
console.log(placeholders);

signUpBtn.addEventListener("click", function () {
  inputs_together.forEach(function (e, index) {
    if (e.value.length === 0) {
      errorMessage[index].classList.remove("error-message-display-off");
      e.classList.add("input-error");
      if (index === 2) {
        e.setAttribute("placeholder", "email@example.com");
      } else {
        e.setAttribute("placeholder", "");
      }
    }
    if (e.value.length > 0) {
      errorMessage[index].classList.add("error-message-display-off");
      e.classList.remove("input-error");
      e.setAttribute("placeholder", `${placeholders[index]}`);
    }
  });
});
