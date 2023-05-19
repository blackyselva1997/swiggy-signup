let form = document.querySelector("#form");
let name1 = document.querySelector("#name");
let pass = document.querySelector("#pass");
let confirm1 = document.querySelector("#cnf");
let submit = document.querySelector("#btn");
let error = document.querySelector("#result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!(localStorage.getItem("username") == name1.value)) {
    error.style.display = "block";
    error.textContent = "Please fill first input in text";
  } else if (!(localStorage.getItem("password") == pass.value)) {
    error.style.display = "block";
    error.textContent =
      "Please enter your 1st 4 letters then 2nd 4 Numbers password";
  } else {
    error.style.display = "none";
    location.href = "./Todo-List-Swiggy-Card/index.html";
  }
});
