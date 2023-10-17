const seattle = {
  minCust: 23, 
  maxCust: 65,
  avgSales: 6.3,
  cookiesPerHour: [],

  custPerHr: function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  },

  cookiesPurchased: function() {
    for (let hour = 0; hour<24; hour++) {
      let customers = this.custPerHr();
      let cookiesPurchased = Math.ceil(customers * this.avgSales);
      this.cookiesPerHour.push(cookiesPurchased);
    }
  }
};

seattle.cookiesPurchased();

const seattleList = document.createElement("ul");
document.body.appendChild(seattleList);

for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Hour ${i + 1}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleList.appendChild(listItem);
}

const tokyo = {
  minCust: 3, 
  maxCust: 24,
  avgSales: 1.2,
  cookiesPerHour: [],

  custPerHr: function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  },

  cookiesPurchased: function() {
    for (let hour = 0; hour<24; hour++) {
      let customers = this.custPerHr();
      let cookiesPurchased = Math.ceil(customers * this.avgSales);
      this.cookiesPerHour.push(cookiesPurchased);
    }
  }
};

tokyo.cookiesPurchased();

const tokyoList = document.createElement("ul");
document.body.appendChild(tokyoList);

for (let i = 0; i < tokyo.cookiesPerHour.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Hour ${i + 1}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoList.appendChild(listItem);
}

const dubai = {
  minCust: 11, 
  maxCust: 38,
  avgSales: 3.7,
  cookiesPerHour: [],

  custPerHr: function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  },

  cookiesPurchased: function() {
    for (let hour = 0; hour<24; hour++) {
      let customers = this.custPerHr();
      let cookiesPurchased = Math.ceil(customers * this.avgSales);
      this.cookiesPerHour.push(cookiesPurchased);
    }
  }
};

dubai.cookiesPurchased();

const dubaiList = document.createElement("ul");
document.body.appendChild(dubaiList);

for (let i = 0; i < dubai.cookiesPerHour.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Hour ${i + 1}: ${dubai.cookiesPerHour[i]} cookies`;
  dubaiList.appendChild(listItem);
}

const paris = {
  minCust: 20, 
  maxCust: 38,
  avgSales: 2.3,
  cookiesPerHour: [],

  custPerHr: function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  },

  cookiesPurchased: function() {
    for (let hour = 0; hour<24; hour++) {
      let customers = this.custPerHr();
      let cookiesPurchased = Math.ceil(customers * this.avgSales);
      this.cookiesPerHour.push(cookiesPurchased);
    }
  }
};

paris.cookiesPurchased();

const parisList = document.createElement("ul");
document.body.appendChild(parisList);

for (let i = 0; i < paris.cookiesPerHour.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Hour ${i + 1}: ${paris.cookiesPerHour[i]} cookies`;
  parisList.appendChild(listItem);
}

const lima = {
  minCust: 2, 
  maxCust: 16,
  avgSales: 4.6,
  cookiesPerHour: [],

  custPerHr: function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min) + min);
  },

  cookiesPurchased: function() {
    for (let hour = 0; hour<24; hour++) {
      let customers = this.custPerHr();
      let cookiesPurchased = Math.ceil(customers * this.avgSales);
      this.cookiesPerHour.push(cookiesPurchased);
    }
  }
};

lima.cookiesPurchased();

const limaList = document.createElement("ul");
document.body.appendChild(limaList);

for (let i = 0; i < lima.cookiesPerHour.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Hour ${i + 1}: ${lima.cookiesPerHour[i]} cookies`;
  limaList.appendChild(listItem);
}