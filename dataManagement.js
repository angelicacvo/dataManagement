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

//search one product in the object menu with for...in
function searchProduct() {
  let encontrado = false
  const decision = document.getElementById("search");
  const bodyTable = document.getElementById("table-dates");
  bodyTable.innerHTML = "";
  const resultado = document.getElementById("resultadoProducto");
  decision.innerHTML = "";
  resultado.innerHTML = "";
  for (product in menu) {
    if (decision.value === menu[product].name) {
      resultado.innerHTML = `
          <strong>ID:</strong> ${product}<br>
          <strong>Nombre:</strong> ${menu[product].name}<br>
          <strong>Precio:</strong> ${menu[product].price}
      `;
      encontrado = true
      break;
    }
  }
  if (!encontrado) {
    alert("Producto no encontrado")
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
  console.log("entra")
  const resultado = document.getElementById("resultadoProducto");
  const bodyTable = document.getElementById("table-dates");
  bodyTable.innerHTML = "";
  resultado.innerHTML = "";
  for (let dates in menu) {
    const product = menu[dates];
    const row = document.createElement("tr");
    const celdaID = document.createElement("td");
    celdaID.textContent = product.id;
    const celdaNombre = document.createElement("td")
    celdaNombre.textContent = product.name;
    const celdaPrecio = document.createElement("td")
    celdaPrecio.textContent = product.price;
    row.appendChild(celdaID);
    row.appendChild(celdaNombre);
    row.appendChild(celdaPrecio);
    bodyTable.appendChild(row)
  }
}