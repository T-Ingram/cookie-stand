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

// ****PROTOTYPE METHODS ****
// Store.prototype.randomCustomerGenerator = function(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// ****EXECUTABLE CODE****

// let cityName = new Store(23, 65, 6.3, [], seattle)

// cityArray.push(seattle, tokyo, dubai, paris, lima)


// const seattle = {
//   minCust: 23, 
//   maxCust: 65,
//   avgSales: 6.3,
//   cookiesPerHour: [],

//   cookiesPurchased: function() {
//     for (let hour = 6; hour <= 19; hour++) {
//       let customers = this.custPerHr();
//       let cookiesPurchased = Math.ceil(customers * this.avgSales);
//       this.cookiesPerHour.push(cookiesPurchased);
//     }
//   }
// };

// seattle.cookiesPurchased();

// const seattleList = document.createElement("ul");
// document.getElementById(`seattle`).appendChild(seattleList);

// // for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
// //   const formattedHour = (i + 6) % 12 === 0
// //   ? "12pm"
// //   : (i + 6 >= 12)
// //     ? `${i + 6 - 12}pm`
// //     : `${i + 6}am`;

//   const listItem = document.createElement("li");
//   listItem.textContent = `${formattedHour}: ${seattle.cookiesPerHour[i]} cookies`;
//   seattleList.appendChild(listItem);


// // const tokyo = {
// //   minCust: 3, 
// //   maxCust: 24,
// //   avgSales: 1.2,
// //   cookiesPerHour: [],

// //   custPerHr: function () {
// //     let min = Math.ceil(this.minCust);
// //     let max = Math.floor(this.maxCust);
// //     return Math.floor(Math.random() * (max - min) + min);
// //   },

// //   cookiesPurchased: function() {
// //     for (let hour = 6; hour <= 19; hour++) {
// //       let customers = this.custPerHr();
// //       let cookiesPurchased = Math.ceil(customers * this.avgSales);
// //       this.cookiesPerHour.push(cookiesPurchased);
// //     }
// //   }
// // };

// tokyo.cookiesPurchased();

// const tokyoList = document.createElement("ul");
// document.getElementById(`tokyo`).appendChild(tokyoList);

// // for (let i = 0; i < tokyo.cookiesPerHour.length; i++) {
// //   const formattedHour = (i + 6) % 12 === 0
// //   ? "12pm"
// //   : (i + 6 >= 12)
// //     ? `${i + 6 - 12}pm`
// //     : `${i + 6}am`;

//   // const listItem = document.createElement("li");
//   listItem.textContent = `${formattedHour}: ${tokyo.cookiesPerHour[i]} cookies`;
//   tokyoList.appendChild(listItem);


// // const dubai = {
// //   minCust: 11, 
// //   maxCust: 38,
// //   avgSales: 3.7,
// //   cookiesPerHour: [],

// //   custPerHr: function () {
// //     let min = Math.ceil(this.minCust);
// //     let max = Math.floor(this.maxCust);
// //     return Math.floor(Math.random() * (max - min) + min);
// //   },

// //   cookiesPurchased: function() {
// //     for (let hour = 6; hour <= 19; hour++) {
// //       let customers = this.custPerHr();
// //       let cookiesPurchased = Math.ceil(customers * this.avgSales);
// //       this.cookiesPerHour.push(cookiesPurchased);
// //     }
// //   }
// // };

// dubai.cookiesPurchased();

// const dubaiList = document.createElement("ul");
// document.getElementById(`dubai`).appendChild(dubaiList);

// // for (let i = 0; i < dubai.cookiesPerHour.length; i++) {
// //   const formattedHour = (i + 6) % 12 === 0
// //   ? "12pm"
// //   : (i + 6 >= 12)
// //     ? `${i + 6 - 12}pm`
// //     : `${i + 6}am`;

//   // const listItem = document.createElement("li");
//   listItem.textContent = `${formattedHour}: ${dubai.cookiesPerHour[i]} cookies`;
//   dubaiList.appendChild(listItem);


// // const paris = {
// //   minCust: 20, 
// //   maxCust: 38,
// //   avgSales: 2.3,
// //   cookiesPerHour: [],

// //   custPerHr: function () {
// //     let min = Math.ceil(this.minCust);
// //     let max = Math.floor(this.maxCust);
// //     return Math.floor(Math.random() * (max - min) + min);
// //   },

// //   cookiesPurchased: function() {
// //     for (let hour = 6; hour <= 19; hour++) {
// //       let customers = this.custPerHr();
// //       let cookiesPurchased = Math.ceil(customers * this.avgSales);
// //       this.cookiesPerHour.push(cookiesPurchased);
// //     }
// //   }
// // };

// paris.cookiesPurchased();

// const parisList = document.createElement("ul");
// document.getElementById(`paris`).appendChild(parisList);

// // for (let i = 0; i < paris.cookiesPerHour.length; i++) {
// //   const formattedHour = (i + 6) % 12 === 0
// //   ? "12pm"
// //   : (i + 6 >= 12)
// //     ? `${i + 6 - 12}pm`
// //     : `${i + 6}am`;

//   const listItem = document.createElement("li");
//   listItem.textContent = `${formattedHour}: ${paris.cookiesPerHour[i]} cookies`;
//   parisList.appendChild(listItem);


// // const lima = {
// //   minCust: 2, 
// //   maxCust: 16,
// //   avgSales: 4.6,
// //   cookiesPerHour: [],

// //   custPerHr: function () {
// //     let min = Math.ceil(this.minCust);
// //     let max = Math.floor(this.maxCust);
// //     return Math.floor(Math.random() * (max - min) + min);
// //   },

// //   cookiesPurchased: function() {
// //     for (let hour = 6; hour <= 19; hour++) {
// //       let customers = this.custPerHr();
// //       let cookiesPurchased = Math.ceil(customers * this.avgSales);
// //       this.cookiesPerHour.push(cookiesPurchased);
// //     }
// //   }
// // };

// lima.cookiesPurchased();

// const limaList = document.createElement("ul");
// document.getElementById(`lima`).appendChild(limaList);

// // for (let i = 0; i < lima.cookiesPerHour.length; i++) {
// //   const formattedHour = (i + 6) % 12 === 0
// //   ? "12pm"
// //   : (i + 6 >= 12)
// //     ? `${i + 6 - 12}pm`
// //     : `${i + 6}am`;

//   const listItem = document.createElement("li");
//   listItem.textContent = `${formattedHour}: ${lima.cookiesPerHour[i]} cookies`;
//   limaList.appendChild(listItem);

