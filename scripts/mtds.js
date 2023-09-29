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
    <td>${cont + 1}</td>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
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
  const emailInput = document.getElementById("email");

  if (
    idInput.value.trim().length == 0 ||
    nameInput.value.trim().length == 0 ||
    lastnameInput.value.trim().length == 0 ||
    ageInput.value.trim().length == 0 ||
    emailInput.value.trim().length == 0
  ) {
    alert("Por favor, complete todos los campos.");
    return null;
  }

  let inputsData = {
    id: idInput.value,
    name: nameInput.value,
    lastname: lastnameInput.value,
    age: ageInput.value,
    email: emailInput.value,
  };
  return inputsData;
};

function save() {
  const userData = setInputs();
  let { id, lastname, name, age, email } = userData;
  let info = {
    id,
    name,
    lastname,
    age,
    email,
  };

  localStorage.setItem(id, JSON.stringify(info));

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("age").value = "";
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
