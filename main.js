import { registerUser, authUser } from "./js/form-validation.js";

const username = document.getElementById("username");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailReg");
// const password = document.getElementById("passwordReg");

const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");

const regEvent = (e) => {
  e.preventDefault();
  registerUser(username.value, email.value, firstName.value, lastName.value);
};
register.addEventListener("click", regEvent);

const authEvent = (e) => {
  e.preventDefault();
  authUser(usernameLogin.value, passwordLogin.value);
};
login.addEventListener("click", authEvent);
