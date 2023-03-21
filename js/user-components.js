const updateProfile = `<h5 class="card-title mb-2">Update Profile</h5>
<form id="update-form">
<div class="form-floating mb-3">
<input
  type="text"
  class="form-control rounded-3"
  id="contact-no"
  name="contact-no"
  placeholder="Contact Number"
      />
  <label for="contact-no">Contact Number</label>
  </div>
  
  <h6 class="card-subtitle mb-2 text-muted">Address</h6>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control rounded-3"
      id="brgy"
      name="brgy"
      placeholder="House No. St., Brgy."
    />
    <label for="brgy">House No. St., Brgy.</label>
  </div>

  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control rounded-3"
      id="muni"
      name="muni"
      placeholder="Municipality"
      list="municipalities"
    />
    <datalist id="municipalities"></datalist>
    <label for="muni">Municipality</label>
  </div>

  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control rounded-3"
      id="prov"
      name="prov"
      placeholder="Province"
      list="provinces"
    />
    <datalist id="provinces"></datalist>
    <label for="prov">Province</label>
  </div>

  <button
    id="updateBtn"
    type="submit"
    class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
  >
    Submit
  </button>
</form>`;

const userInfo = `<table class="table table-borderless">
<tbody>
  <tr>
    <td>Complete Address:</td>
    <td id="address"></td>
  </tr>
  <tr>
    <td>Contact Number:</td>
    <td id="contact"></td>
  </tr>
</tbody>
</table>`;

//card1
const card1 = document.createElement("div");
const divInner = document.createElement("div");
const img = document.createElement("img");
const h5 = document.createElement("h5");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const span1 = document.createElement("span");

const text1 = document.createTextNode("Dr. Wong");
const text2 = document.createTextNode("Surgeon");

const cardTitle1 = document.createTextNode("Status: Online");

card1.setAttribute("class", "card");
img.setAttribute("src", "../assets/profile/dr.wong.jpg");
img.setAttribute("class", "card-img-top");
img.setAttribute("alt", "image");
divInner.setAttribute("class", "card-body");
h5.setAttribute("class", "card-title");
p1.setAttribute("class", "card-text");
p2.setAttribute("class", "card-text");
span1.setAttribute("class", "badge text-bg-success");

card1.appendChild(img);
card1.appendChild(divInner);
divInner.appendChild(h5);
h5.appendChild(span1);
span1.appendChild(cardTitle1);
divInner.appendChild(p1);
divInner.appendChild(p2);
p1.appendChild(text1);
p2.appendChild(text2);

//card2
const card2 = document.createElement("div");
const divInner2 = document.createElement("div");
const img2 = document.createElement("img");
const h5_2 = document.createElement("h5");
const p1_2 = document.createElement("p");
const p2_2 = document.createElement("p");
const span2 = document.createElement("span");

const text3 = document.createTextNode("Dr. Santos");
const text4 = document.createTextNode("Pediatrician");
const cardTitle2 = document.createTextNode("Status: Online");

card2.setAttribute("class", "card");

card2.appendChild(img2);
card2.appendChild(divInner2);
divInner2.appendChild(h5_2);
h5_2.appendChild(span2);
span2.appendChild(cardTitle2);
divInner2.appendChild(p1_2);
divInner2.appendChild(p2_2);
p1_2.appendChild(text3);
p2_2.appendChild(text4);

img2.setAttribute("src", "../assets/profile/dr.santos.jpg");
img2.setAttribute("class", "card-img-top");
img2.setAttribute("alt", "image");
divInner2.setAttribute("class", "card-body");
h5_2.setAttribute("class", "card-title");
p1_2.setAttribute("class", "card-text");
p2_2.setAttribute("class", "card-text");
span2.setAttribute("class", "badge text-bg-success");

//card3
const card3 = document.createElement("div");
const divInner3 = document.createElement("div");
const img3 = document.createElement("img");
const h5_3 = document.createElement("h5");
const p1_3 = document.createElement("p");
const p2_3 = document.createElement("p");
const span3 = document.createElement("span");

const text5 = document.createTextNode("Dr. Chua");
const text6 = document.createTextNode("Dentist");
const cardTitle3 = document.createTextNode("Status: Online");

card3.setAttribute("class", "card");

card3.appendChild(img3);
card3.appendChild(divInner3);
divInner3.appendChild(h5_3);
h5_3.appendChild(span3);
span3.appendChild(cardTitle3);
divInner3.appendChild(p1_3);
divInner3.appendChild(p2_3);
p1_3.appendChild(text5);
p2_3.appendChild(text6);

img3.setAttribute("src", "../assets/profile/dr.chua.jpg");
img3.setAttribute("class", "card-img-top");
img3.setAttribute("alt", "image");
divInner3.setAttribute("class", "card-body");
h5_3.setAttribute("class", "card-title");
p1_3.setAttribute("class", "card-text");
p2_3.setAttribute("class", "card-text");
span3.setAttribute("class", "badge text-bg-success");

// const h6 = document.createElement("h6");
// const text = document.createTextNode("Available Doctors");
// h6.setAttribute("class", "fw-bold");
// h6.appendChild(text);

const div = document.createElement("div");
div.setAttribute("class", "col d-flex justify-content-evenly");

div.appendChild(card1);
div.appendChild(card2);
div.appendChild(card3);

export { updateProfile, userInfo, div };
