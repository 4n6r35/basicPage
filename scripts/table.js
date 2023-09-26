// Cargar la tabla de usuarios desde el archivo JSON
fetch('../data/data.json')
  .then(response => response.json())
  .then(data => {
    const tableData = document.getElementById('tableContent');
    const tbody = tableData.querySelector('tbody');

    data.users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.edad}</td>
        <td>${user.correo}</td>
        <td>${user.direccion}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

