let userLink = document.getElementById("user-link");
let signoutLink = document.getElementById("signout-link");
let header = document.getElementById("header-text");
var currentUser = null;

function getUsername() {
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if (keepLoggedIn == "yes") {
    currentUser = JSON.parse(localStorage.getItem("user"));
  } else {
    currentUser = JSON.parse(sessionStorage.getItem("user"));
  }
}

function signOut() {
  sessionStorage.removeItem("user");
  localStorage.removeItem("user");
  localStorage.removeItem("keepLoggedIn");
  window.location = "user-page.html";
}

window.onload = function () {
  getUsername();
  if (currentUser == null) {
    userLink.innerText = "Create new account";
    userLink.classList.replace("nav-link", "btn");
    userLink.classList.add("btn-success");
    userLink.href = "index.html";

    signoutLink.innerText = "Login";
    signoutLink.classList.replace("nav-link", "btn");
    signoutLink.classList.add("btn-success");
    signoutLink.href = "index.html";
  } else {
    userLink.innerText = currentUser.username;
    header.innerText = `Welcome, ${currentUser.firstName}`;
    userLink.classList.replace("nav-link", "btn");
    userLink.classList.remove("btn-success");
    userLink.href = "#";

    signoutLink.innerText = "Sign Out";
    signoutLink.classList.replace("nav-link", "btn");
    signoutLink.classList.remove("btn-success");
    signoutLink.href = "javascript:signOut()";
  }
};
