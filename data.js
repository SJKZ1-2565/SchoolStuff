const url = 'https://raw.githubusercontent.com/SJKZ1-2565/SchoolStuff/master/data.json'; // Replace with the actual URL to your JSON file
  
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderTable(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderTable(data) {
  const tableHead = document.querySelector('#data-table thead');
  const tableBody = document.querySelector('#data-table tbody');

  // Clear existing data
  tableHead.innerHTML = '';
  tableBody.innerHTML = '';

  if (data.length === 0) return;

  // Populate table headers
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);

  // Populate table rows
  data.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = row[header];
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}

// Fetch data on page load
document.addEventListener('DOMContentLoaded', fetchData);

var x = document.getElementById("myVar");
x.textContent = "6/2";