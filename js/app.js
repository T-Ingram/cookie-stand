const hoursArray = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]

const table = document.getElementById('cookie-table');

// **** CONSTRUCTOR FUNCTION ****
function Store(location, minCust, maxCust, avgSales, address, hours, contactInfo) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.cookiesPerHour = [];
  this.address = address;
  this.hours = hours;
  this.contactInfo = contactInfo;
  

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

const seattle = new Store('Seattle', 23, 65, 6.3, '1234 Main St. Seattle, Washington 98101', '6:00am-7:00pm', 'SeattleManager@gmail.com');
const tokyo = new Store('Tokyo', 3, 24, 1.2, '5678 East Blvd Tokyo, Japan 100-0000', '6:00am-7:00pm', 'TokyoManager@gmail.com');
const dubai = new Store('Dubai', 11, 38, 3.7, '1122 North St. Dubai, United Arab Emirates 00000', '6:00am-7:00pm', 'DubaiManager@gmail.com');
const paris = new Store('Paris', 20, 38, 2.3, '3344 South St. Paris, France 70123', '6:00am-7:00pm', 'ParisManager@gmail.com');
const lima = new Store('Lima', 2, 16, 4.6, '5566 West St. Lima, Peru 02002', '6:00am-7:00pm', 'LimaManager@gmail.com');

// Create rows for each store and display city and cookies sold per hour
const stores = [seattle, tokyo, dubai, paris, lima];

//***TABLE***
// referenced chatgpt for help
function createTable() {
  let table = document.createElement('table');
  table.classList.add('cookie-table');
  table.id = 'cookie-table';
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

  createHourlyTotals(table);
}

function createHourlyTotals(table) {

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

function locationInfo() {
  const stores = [seattle, tokyo, dubai, paris, lima];
  let main = document.createElement('main');
  document.body.appendChild(main);

  for (let store of stores) {
    let section = document.createElement('section'); //create section element
    main.appendChild(section); //add section element to main

    let locationName = document.createElement('h2'); //create new element
    locationName.innerText = store.location; //assign name to element
    section.appendChild(locationName); //add element to section

    let locationAddress = document.createElement('p'); //create new element
    locationAddress.innerText = store.address; //assign address to element
    section.appendChild(locationAddress); //add element to section

    let locationHours = document.createElement('p'); //create new element
    locationHours.innerText = store.hours; //assign hours to element
    section.appendChild(locationHours); //add element to section

    let locContactInfo = document.createElement('p'); //create new element
    locContactInfo.innerText = store.contactInfo; //assign contact info to element
    section.appendChild(locContactInfo); //add element to section
  }
}

function newLocation(event) {
  event.preventDefault(); //Prevent refresh of page
  const table = document.getElementById('cookie-table');//Assign cookie-table to "table" variable
  const locForm = document.getElementById('new-store-form');//Passed form to locform

  //Create new location object with form data
  let locName = locForm.elements['location'].value;
  let minCust = locForm.elements['min-customers'].value;//pulls from form data
  let maxCust = locForm.elements['max-customers'].value;
  let avgCookies = locForm.elements['avg-cookies'].value;
  const newestStore = new Store(locName, minCust, maxCust, avgCookies, '1', '1', '1');
  stores.push(newestStore);
  //Remove 'totals' row from table
  table.deleteRow(-1);
  //Insert new object into table
  let row = document.createElement('tr');
  let cityCell = document.createElement('td');
  cityCell.innerText = newestStore.location;
  row.appendChild(cityCell);

  let dailyTotal = 0;

  for (let cookies of newestStore.cookiesPerHour) {
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

  //Create new 'totals' row
  createHourlyTotals(table);

  //Clear form
  locForm.reset();
}

document.querySelector('button').addEventListener("click", newLocation);

 // ENABLE TO GET VSCODE TO PULL CORRECT FILES
// const pathName = window.location.pathname;
// if (pathName === "/index.html" || pathName === "/") {
//   locationInfo();
// } else if (pathName === "/sales.html") {
//   createTable();
// }
//ENABLE TO GET GITHUB TO PULL CORRECT FILES
const pathName = window.location.pathname;
if (pathName === "/cookie-stand/index.html" || pathName === "/cookie-stand/") {
  locationInfo();
} else if (pathName === "/cookie-stand/sales.html") {
  createTable();
}