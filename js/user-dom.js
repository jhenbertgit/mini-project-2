const updateProfile = `<div class="card shadow">
<div class="card-body">
  <h5 class="card-title">Update Profile</h5>
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
        id="muniCity"
        name="muniCity"
        placeholder="Municipality"
        list="municipality"
      />
      <datalist id="municipality">
        <option value="Tigbauan"></option>
      </datalist>
      <label for="muniCity">Municipality/City</label>
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
  </form>
</div>
</div>`;

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

export { updateProfile, userInfo };
