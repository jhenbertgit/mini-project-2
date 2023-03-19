import { registerUser, authUser } from "./js/form-validation.js";

const regEvent = (event) => {
  event.preventDefault();
  let username = document.getElementById("username");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("emailReg");

  registerUser(username.value, email.value, firstName.value, lastName.value);
};
register.addEventListener("click", regEvent);

const authEvent = (event) => {
  event.preventDefault();
  let usernameLogin = document.getElementById("usernameLogin");
  let passwordLogin = document.getElementById("passwordLogin");

  authUser(usernameLogin.value, passwordLogin.value);
};
login.addEventListener("click", authEvent);
