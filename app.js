// const firstName = document.getElementById("first-name");
// const lastName = document.getElementById("last-name");
// const email = document.getElementById("email");
// const password = document.getElementById("pass");

// Getting constants and variables for the input error:
const signUpBtn = document.querySelector(".free-trail-btn");

const inputs_together = [...document.querySelectorAll(".input")];
console.log(inputs_together);

const errorMessage = document.querySelectorAll(".error-message");

//const inputs_together = [firstName, lastName, email, password];

// Mapping the array to store all the place holders in this const array
const placeholders = inputs_together.map((e) => e.getAttribute("placeholder"));

// When the user clicks on the submit button, runs this event listener
signUpBtn.addEventListener("click", function () {
  // Goes through each input box to check if the user put any data in it
  inputs_together.forEach(function (e, index) {
    // If nothing is inside the specific input in the arrray
    if (e.value.length === 0) {
      // turns the error message CCS display on
      errorMessage[index].classList.remove("error-message-display-off");
      // turns the input error CSS design on.
      e.classList.add("input-error");

      // If the email input doesn't have any input, then turns on the example placeholder for user.
      if (index === 2) {
        e.setAttribute("placeholder", "email@example.com");
      } else {
        // Turns off placeholder names if user doesn't enter data and submits
        e.setAttribute("placeholder", "");
      }
    }

    // If the user has data on the input.
    if (e.value.length > 0) {
      // Turns off the error message and input error design from CSS by adding and removing classes
      errorMessage[index].classList.add("error-message-display-off");
      e.classList.remove("input-error");

      // Sets back placeholders what they were previously when submit is clicked withe the data filled out correctly.
      e.setAttribute("placeholder", `${placeholders[index]}`);
    }
  });
});
