const hoursArray = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]

const table = document.getElementById('cookie-table');


// **** CONSTRUCTOR FUNCTION ****
function Store(location, minCust, maxCust, avgSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.cookiesPerHour = [];
  

  this.custPerHr = function() {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  };

  this.cookiesPurchased = function() {
     for (let hour = 0; hour <= 14; hour++) {
       let customers = this.custPerHr();
       let cookiesPurchased = Math.ceil(customers * this.avgSales);
       
       this.cookiesPerHour.push(cookiesPurchased);
    }
    console.log(this.location)
    console.log(this.cookiesPerHour);
  }
  this.cookiesPurchased();
  this.render = function () {
  }

} 

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);

//***table***

function createTable() {
  // Create the table element
  let table = document.createElement('table');

  // Append the table to the document body
  document.body.appendChild(table);

  // Create the table row for headings
  let rowHeading = document.createElement('tr');

  // Loop through hoursArray to create and append table headings (th)
  for (let i = 0; i < hoursArray.length; i++) {
    const hour = hoursArray[i];
    let th = document.createElement('th');
    th.innerText = hour;
    rowHeading.appendChild(th);
  }

  // Append the heading row to the table
  table.appendChild(rowHeading);

  // Create rows for each store and display city and cookies sold per hour
  const stores = [seattle, tokyo, dubai, paris, lima];

  for (let store of stores) {
    let row = document.createElement('tr');
    let cityCell = document.createElement('td');
    cityCell.innerText = store.location;
    row.appendChild(cityCell);

    for (let cookies of store.cookiesPerHour) {
      let cookiesSoldCell = document.createElement('td');
      cookiesSoldCell.innerText = cookies;
      row.appendChild(cookiesSoldCell);
    }

    // Append the row to the table
    table.appendChild(row);
  }
}

// Call the createTable function to generate the table with headings and store data
createTable();