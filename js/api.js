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
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
};

export { getProvince, getMunicipalities };
