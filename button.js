function sailorWatch() {
  let firstName = prompt("What's your first name?");
  let watchSailor = prompt("Have you ever watched Sailor Moon?");

  if (watchSailor === "Yes") {
    alert = "Welcome back, Sailor" + firstName + "!";
  }
  if (watchSailor === "No") {
    alert = "Hope you'll join us soon in the Sailor Scouts" + firstName + "!";
  }
}

let sailorWatchButton = document.querySelector("button");
sailorWatchButton.addEventListener("click", sailorWatch);
