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
     for (let hour = 0; hour <= 13; hour++) {
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

//***TABLE***
// referenced chatgpt for help
function createTable() {
  let table = document.createElement('table');
  table.classList.add('cookie-table');
  document.body.appendChild(table);

  let headerRow = document.createElement('tr');

  let blankCell = document.createElement('th');
  headerRow.appendChild(blankCell);

  // Loop through hoursArray to create and append table headings (th)
  for (let i = 0; i < hoursArray.length; i++) {
    const hour = hoursArray[i];
    let th = document.createElement('th');
    th.innerText = hour;
    headerRow.appendChild(th);
  }

  // "Daily Location Total" column header
  let dailyTotalHeader = document.createElement('th');
  dailyTotalHeader.innerText = 'Daily Location Total';
  headerRow.appendChild(dailyTotalHeader);

  table.appendChild(headerRow);

  // Create rows for each store and display city and cookies sold per hour
  const stores = [seattle, tokyo, dubai, paris, lima];

  for (let store of stores) {
    let row = document.createElement('tr');
    let cityCell = document.createElement('td');
    cityCell.innerText = store.location;
    row.appendChild(cityCell);

    let dailyTotal = 0;

    for (let cookies of store.cookiesPerHour) {
      let cookiesSold = document.createElement('td');
      cookiesSold.innerText = cookies;
      row.appendChild(cookiesSold);

      dailyTotal += cookies;
    }

    // "Daily Location Total" column for each store
    let dailyTotalCell = document.createElement('td');
    dailyTotalCell.innerText = dailyTotal;
    row.appendChild(dailyTotalCell);

    table.appendChild(row);
  }

  // Display hourly totals across all stores
  let totalsRow = document.createElement('tr');
  let totalsCell = document.createElement('td');
  totalsCell.innerText = 'Totals';
  totalsRow.appendChild(totalsCell);

  // Hourly totals array
  const hourlyTotals = new Array(hoursArray.length).fill(0);

  // Hourly totals across all stores
  for (let store of stores) {
    for (let i = 0; i < hoursArray.length; i++) {
      hourlyTotals[i] += store.cookiesPerHour[i];
    }
  }

  // Add hourly total cells to the "Totals" row
  for (let total of hourlyTotals) {
    let totalCell = document.createElement('td');
    totalCell.innerText = total;
    totalsRow.appendChild(totalCell);
  }

  // Total of "Daily Location Total" across all stores
  let dailyTotalSum = 0;
  for (let store of stores) {
    dailyTotalSum += store.cookiesPerHour.reduce((acc, val) => acc + val, 0);
  }
  let dailyTotalSumCell = document.createElement('td');
  dailyTotalSumCell.innerText = dailyTotalSum;
  totalsRow.appendChild(dailyTotalSumCell);

  table.appendChild(totalsRow);
}

createTable();