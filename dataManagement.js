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
  let flag = true;
  while (flag) {
    let decision = prompt("Which product do you want to search?").toLowerCase();
    let found = false;
    for (product in menu) {
      if (decision === menu[product].name) {
        console.log(
          `product ID: ${product}, details: ${menu[product].name}, ${menu[product].price}`
        );
        alert(
          `product ID: ${product}, details: ${menu[product].name}, ${menu[product].price}`
        );
        found = true;
        break;
      }
    }
    if (found === false) {
      console.warn("the product doesn't exist in our database");
      alert("the product doesn't exist in our database");
    }
    let repeat = prompt("Do you want to search another product? type [y] yes or [n] no").toLowerCase();
    if (repeat === "no" || repeat === "n"){
      flag = false;
    }
  }
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
searchProduct();
