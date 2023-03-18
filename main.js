import { registerUser, authUser } from "./js/form-validation.js";

const login = document.getElementById("login");
const register = document.getElementById("register");

register.addEventListener("click", registerUser);
login.addEventListener("click", authUser);
