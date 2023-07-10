fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#itemsData tbody');

    data.forEach(group => {
      const { type, items } = group;
      items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index === 0 ? type : ''}</td>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td><input type="checkbox" name="${item.name}" />&nbsp;</td>
        `;
        tableBody.appendChild(row);
      });
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });