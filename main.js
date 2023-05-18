let form1 = document.querySelector("#form");
let name1 = document.querySelector("#name");
let password1 = document.querySelector("#password");
let number1 = document.querySelector("#number");
let email = document.querySelector("#email");
let submit = document.querySelector("#btn");
let error = document.querySelector("#result");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!/^[a-zA-Z]+$/.test(name1.value)) {
    error.style.display = "block";
    error.textContent = "Please fill first input out of the Only letters.";
  } else if (!/^[a-zA-Z]{4}\d{4}$/.test(password1.value)) {
    error.style.display = "block";
    error.textContent =
      "Please enter your 1st 4 letters then 2nd 4 Numbers password";
  } else if (!/^[0-9]+$/.test(number1.value)) {
    error.style.display = "block";
    error.textContent = "Please fill out the Number input field.";
  } else {
    error.style.display = "none";
    localStorage.setItem("username", name1.value);
    localStorage.setItem("password", password1.value);
    alert("successfull signup");
    location.href =
      "./New folder/Swiggy-LoginPage/index.html";
  }
});
