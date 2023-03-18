import { registerUser, authUser } from "./js/form-validation.js";

const username = document.getElementById("username");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailReg");
const password = document.getElementById("passwordReg");

const usernameLogin = document.getElementById("usernameLogin");
const passwordLogin = document.getElementById("passwordLogin");

const regEvent = (e) => {
  e.preventDefault();
  registerUser(
    username.value,
    email.value,
    firstName.value,
    lastName.value,
    password
  ).then(() => {
    document.getElementById("signupForm").reset();
    document.getElementById("username").focus();
  });
};
register.addEventListener("click", regEvent);

const authEvent = (e) => {
  e.preventDefault();
  authUser(usernameLogin.value, passwordLogin.value).then(() => {
    document.getElementById("loginForm").reset();
    document.getElementById("usernameLogin").focus();
  });
};
login.addEventListener("click", authEvent);

//password encryption
// const encryptPass = () => {
//   let pass = CryptoJS.AES.encrypt(password.value, password.value);
//   return pass.toString();
// };

//decrypt password
// const decryptPass = (dbpass) => {
//     let pass = CryptoJS.AES.decrypt(dbpass, passwordLogin.value);
//     return pass.toString(CryptoJS.enc.Utf8);
//   };
