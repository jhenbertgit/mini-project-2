import { updateProfile, userInfo, div, loginForm } from "./user-components.js";
import { updateUserProfile } from "./form-validation.js";
import { getProvince, getMunicipalities } from "./api.js";
import { authUser } from "./form-validation.js";

let title = document.getElementById("title");
let userLink = document.getElementById("user-link");
let signoutLink = document.getElementById("signout-link");
let fullName = document.getElementById("full-name");
let lastLogin = document.getElementById("last-login");
let lastLoginLabel = document.getElementById("last-login-label");
let updateProfileForm = document.getElementById("update-profile");
let userInfoTbl = document.getElementById("userInfo");
let userForm = document.getElementById("user-form");

let column = document.getElementById("col");

let currentUser = null;

const getUsername = () => {
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if (keepLoggedIn == "yes") {
    currentUser = JSON.parse(localStorage.getItem("user"));
  } else {
    currentUser = JSON.parse(sessionStorage.getItem("user"));
  }
};

//make signOut() function global level since ES module do not use global scope
window.signOut = () => {
  sessionStorage.removeItem("user");
  localStorage.removeItem("user");
  localStorage.removeItem("keepLoggedIn");
  window.location = "user-page.html";
};

window.onload = () => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
  getUsername();
  if (currentUser == null) {
    document.body.setAttribute("class", "cover");
    userLink.innerText = "Create new account";
    userLink.classList.replace("nav-link", "btn");
    userLink.classList.add("btn-primary");
    userLink.href = "index.html";

    userForm.innerHTML = loginForm;

    // signoutLink.innerText = "Login";
    // signoutLink.classList.replace("nav-link", "btn");
    // signoutLink.classList.add("btn-primary");
    // signoutLink.href = "index.html";

    document.getElementById("login").addEventListener("click", authEvent);
  } else {
    title.innerText = `Blucare | ${currentUser.firstName} ${currentUser.lastName}`;
    userLink.innerText = currentUser.username;
    lastLoginLabel.innerText = "Last Logged-in: ";

    column.setAttribute("class", "col-12 bg-body-tertiary rounded-3 p-3 my-2");
    userInfoTbl.setAttribute(
      "class",
      "col-md-8 bg-body-tertiary shadow rounded-3 p-2 mb-2"
    );
    updateProfileForm.setAttribute(
      "class",
      "col bg-body-tertiary shadow rounded-3 p-2"
    );
    lastLogin.innerText = new Date(
      Date.parse(currentUser?.lastLoggedIn)
    ).toLocaleDateString("en-US", options);
    fullName.innerText = `${currentUser.firstName} ${currentUser.lastName}`;

    userInfoTbl.innerHTML = userInfo;

    userInfoTbl.insertAdjacentElement("beforeend", div);
    updateProfileForm.innerHTML = updateProfile;

    userLink.classList.replace("nav-link", "btn");
    userLink.classList.remove("btn-success");
    userLink.href = "#";

    address.innerText = `${currentUser.address?.brgy}, ${currentUser.address?.muniCity}, ${currentUser.address?.province}`;
    contact.innerText = currentUser?.contactNo;

    signoutLink.innerText = "Sign Out";
    signoutLink.classList.replace("nav-link", "btn");
    signoutLink.classList.remove("btn-success");
    signoutLink.href = "javascript:signOut()";

    document.getElementById("updateBtn").addEventListener("click", update);

    /**list of Provinces rendered in Province input in the
     * update profile form
     */
    getProvince().then((responseData) => {
      for (let provinceObj of responseData) {
        const { name } = provinceObj;
        const opt = document.createElement("option");
        const text = document.createTextNode(name);
        opt.appendChild(text);
        opt.setAttribute("value", `${name}`);
        document.getElementById("provinces").appendChild(opt);
      }
    });

    /**list of Municipalities rendered in Municipalty input in the
     * update profile form
     */
    getMunicipalities().then((responseData) => {
      for (let munObj of responseData) {
        const { name } = munObj;
        const opt = document.createElement("option");
        const text = document.createTextNode(name);
        opt.appendChild(text);
        opt.setAttribute("value", `${name}`);
        document.getElementById("municipalities").appendChild(opt);
      }
    });
  }
};

const update = (event) => {
  event.preventDefault();
  let contactNo = document.getElementById("contact-no");
  let brgy = document.getElementById("brgy");
  let muniCity = document.getElementById("muni");
  let province = document.getElementById("prov");

  updateUserProfile(
    contactNo.value,
    brgy.value,
    muniCity.value,
    province.value,
    currentUser.username
  ).then(() => {
    document.getElementById("update-form").reset();
    document.getElementById("contact-no").focus();
  });
};

const authEvent = (event) => {
  event.preventDefault();
  let usernameLogin = document.getElementById("usernameLogin");
  let passwordLogin = document.getElementById("passwordLogin");

  authUser(usernameLogin.value, passwordLogin.value);
};
