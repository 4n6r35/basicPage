const tableData = document.getElementById("tableContent");
const tbody = tableData.querySelector("tbody");
const btnListar = document.getElementById("listar");
let visible = false;

btnListar.addEventListener("click", function () {
  if (!visible) {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        tbody.innerHTML = "";
        data.user.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.lastname}</td>
            <td>${user.age}</td>
            <td class="gen">${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.pais}</td>          
            <td class="email">${user.email}</td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }
});
