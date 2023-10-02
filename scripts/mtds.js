// const btnReset = document.getElementById("reset");

function updateTable() {
  const table = document.getElementById("tableContent");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  const keys = Object.keys(localStorage);
  keys.forEach((key, cont) => {
    const value = localStorage.getItem(key);
    const user = JSON.parse(value);

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.gender}</td>
    <td>${user.phone}</td>
    <td>${user.country}</td>
    <td class="email">${user.email}</td>
    `;
    tbody.appendChild(row);
  });
}

/------------------------------METODOS-------------------------------------/;

const setInputs = () => {
  const idInput = document.getElementById("id");
  const nameInput = document.getElementById("name");
  const lastnameInput = document.getElementById("lastname");
  const ageInput = document.getElementById("age");
  const genderSelect = document.getElementById("gender");
  const phoneInput = document.getElementById("phone");
  const countryInput = document.getElementById("country");
  const emailInput = document.getElementById("email");

  if (
    idInput.value.trim().length == 0 ||
    nameInput.value.trim().length == 0 ||
    lastnameInput.value.trim().length == 0 ||
    ageInput.value.trim().length == 0 ||
    phoneInput.value.trim().length == 0 ||
    countryInput.value.trim().length == 0 ||
    emailInput.value.trim().length == 0
  ) {
    alert("Por favor, complete todos los campos ya que son obligatorios.");
    return null;
  }

  const optionSelect = genderSelect.options[genderSelect.selectedIndex].value;
  console.log(optionSelect);

  let inputsData = {
    id: idInput.value,
    name: nameInput.value,
    lastname: lastnameInput.value,
    age: ageInput.value,
    gender: optionSelect,
    phone: phoneInput.value,
    country: countryInput.value,
    email: emailInput.value,
  };
  return inputsData;
};

function save() {
  const userData = setInputs();
  let { id, lastname, name, age, gender, phone, country, email } = userData;

  // Validar que el ID no está registrado en el localStorage
  if (localStorage.getItem(id) !== null) {
    alert("El ID ya está registrado.");
    return;
  }

  let info = {
    id,
    name,
    lastname,
    age,
    gender,
    phone,
    country,
    email,
  };

  console.log(gender);

  localStorage.setItem(id, JSON.stringify(info));

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("country").value = "";
  document.getElementById("email").value = "";
  document.getElementById("dialog").style.display = "none";

  updateTable();
}

function resetInput() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
}
