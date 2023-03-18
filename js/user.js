import { updateProfile, userInfo } from "./user-dom.js";
import { updateUserProfile } from "./form-validation.js";
import { getProvince, getCities, getMunicipalities } from "./api.js";

let title = document.getElementById("title");
let userLink = document.getElementById("user-link");
let signoutLink = document.getElementById("signout-link");
let header = document.getElementById("header-text");
let updateProfileForm = document.getElementById("update-profile");
let userInfoTbl = document.getElementById("userInfo");

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
  getUsername();
  if (currentUser == null) {
    userLink.innerText = "Create new account";
    userLink.classList.replace("nav-link", "btn");
    userLink.classList.add("btn-primary");
    userLink.href = "index.html";

    signoutLink.innerText = "Login";
    signoutLink.classList.replace("nav-link", "btn");
    signoutLink.classList.add("btn-primary");
    signoutLink.href = "index.html";
  } else {
    title.innerText = `Blucare | ${currentUser.firstName} ${currentUser.lastName}`;
    userLink.innerText = currentUser.username;
    header.innerText = `${currentUser.firstName} ${currentUser.lastName}`;
    userInfoTbl.innerHTML = userInfo;
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
  }
};

const update = (e) => {
  e.preventDefault();
  let contactNo = document.getElementById("contact-no");
  let brgy = document.getElementById("brgy");
  let muniCity = document.getElementById("muniCity");
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
