//province names in <option> tag
const getProvince = async () => {
  try {
    const response = await fetch("https://psgc.gitlab.io/api/provinces.json");
    if (!response.ok) {
      throw new Error("Server is busy!");
    }
    return await response.json();
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
};

//cities names in <option> tag
const getCities = async () => {
  try {
    const response = await fetch("https://psgc.gitlab.io/api/cities.json");
    if (!response.ok) {
      throw new Error("Server is busy!");
    }
    return await response.json();
    // for (let cityObj of responseData) {
    //   const { name } = cityObj;
    //   const opt = document.createElement("option");
    //   const text = document.createTextNode(name);
    //   opt.appendChild(text);
    //   opt.setAttribute("value", `${name}`);
    //   document.querySelector("select").appendChild(opt);
    //   console.log(name);
    // }
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
};

//municipalities names in <option> tag
const getMunicipalities = async () => {
  try {
    const response = await fetch(
      "https://psgc.gitlab.io/api/municipalities.json"
    );
    if (!response.ok) {
      throw new Error("Server is busy!");
    }
    return await response.json();
    // for (let munObj of responseData) {
    //   const { name } = munObj;
    //   const opt = document.createElement("option");
    //   const text = document.createTextNode(name);
    //   opt.appendChild(text);
    //   opt.setAttribute("value", `${name}`);
    //   document.querySelector("select").appendChild(opt);

    //   console.log(name);
    // }
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
};

// const getUserInfo = async () => {
//   try {
//     const response = await fetch(
//       "https://login-auth-37058-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
//     );
//     if (!response.ok) {
//       throw new Error("Database is unreachable");
//     }
//     return await response.json();
//   } catch (err) {
//     alert(`${err.name}: ${err.message}`);
//   }
// };


export { getProvince, getCities, getMunicipalities };
