// Creation of a restaurant vegan sushi restaurant data management program
// Creation of the object with name and price
const menu = {
  1: {
    id: 1,
    name: "tofu sushi burrito",
    price: 28000,
  },
  2: {
    id: 2,
    name: "pepita roll",
    price: 30000,
  },
  3: {
    id: 3,
    name: "tropical roll",
    price: 31000,
  },
  4: {
    id: 4,
    name: "yasay roll",
    price: 31000,
  },
  5: {
    id: 5,
    name: "mushroom sushi burrito",
    price: 28000,
  },
};
console.log(`Object menu: ${menu}`);

// convert the object to a new set of products
const menuSet = new Set(Object.values(menu).map((menu) => menu.name));
console.log(`Set of unique products of the menu: ${menuSet}`);

//Create a map to add a category to each product
const menuMap = new Map([
  ["sushi burrito", "tofu sushi burrito"],
  ["sushi roll", "pepita roll"],
  ["sushi roll", "tropical roll"],
  ["sushi roll", "yasay roll"],
  ["sushi burrito", "mushroom sushi burrito"],
]);

//iterates the Object menu
for (const product in menu) {
  console.log(
    `product ID: ${product}, details: ${menu[product].name}, ${menu[product].price}`
  );
}

function searchProduct() {
  let found = false
  const decision = document.getElementById("search");
  const bodyTable = document.getElementById("table-dates");
  bodyTable.innerHTML = "";
  const result = document.getElementById("productResult");
  decision.innerHTML = "";
  result.innerHTML = "";
  //search one product in the object menu with for...in
  for (product in menu) {
    if (decision.value.toLowerCase() === menu[product].name) {
      result.innerHTML = `
          <strong>ID:</strong> ${product}<br>
          <strong>Nombre:</strong> ${menu[product].name}<br>
          <strong>Precio:</strong> ${menu[product].price}
      `;
      found = true
      break;
    }
  }
  if (!found) {
    alert("We couldn't find that product")
  }
  decision.value = ""
}

//iterates the Set menuSet
for (const product of menuSet) {
  console.log(`Unique product: ${product}`);
}

//iterates the Map menuMap with forEach
menuMap.forEach((product, category) => {
  console.log(`Category: ${category}, product: ${product}`);
});

//function call
function tableProducts() {
  console.log("Signed in");
  // create a table in HTML
  const result = document.getElementById("productResult");
  const bodyTable = document.getElementById("table-dates");
  bodyTable.innerHTML = "";
  result.innerHTML = "";
  //create a field in each row
  for (let dates in menu) {
    const product = menu[dates];
    const row = document.createElement("tr");
    const idField = document.createElement("td");
    idField.textContent = product.id;
    const nameField = document.createElement("td")
    nameField.textContent = product.name;
    const priceField = document.createElement("td")
    priceField.textContent = product.price;
    row.appendChild(idField);
    row.appendChild(nameField);
    row.appendChild(priceField);
    bodyTable.appendChild(row)
  }
}