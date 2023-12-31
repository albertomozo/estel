const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");
const divImage = document.getElementById("divImage");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");
const formColor = document.getElementById("formColor");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

formColor.addEventListener("submit", searchByColor);

const products = [
  {
    productVersion: "iphone 14",
    colorName: "Beach",
    price: "€ 1.011",
    colorReference: "What gives you a piece of mind",
    description:
      "Blue likes to do things its own way and it doesn’t conform well to the wishes of others",
    shoppingLink: "#",
    image: "./img/iphone_beach3.png",
  },
  {
    productVersion: "iphone 14",
    colorName: "Night",
    price: "€ 1.011",
    colorReference: "The best light to watch the sky's brightest meteo shower",
    description:
      "A hypothetical force of nature that acts on dark matter to allow dark matter to interact with itself.",
    shoppingLink: "#",
    image: "./img/iphone_dark_night3.png",
  },
  {
    productVersion: "iphone 14",
    colorName: "Pearl",
    price: "€ 1.011",
    colorReference: "A pearl in one's palm",
    description:
      "White signifies the ability to stay calm and balanced, even in the midst of conflict. ",
    shoppingLink: "#",
    image: "./img/iphone_pearl3.png",
  },
  {
    productVersion: "iphone 14",
    colorName: "Lavender",
    price: "€ 1.011",
    colorReference: "lingers on the air and dreams",
    description:
      " It effortlessly blends warm and cool elements to create a stunning hue that turns heads. With its subtle sophistication and vibrant energy, lavender reels in passersby.",
    shoppingLink: "#",
    image: "./img/iphone_lavender3.png",
  },
  {
    productVersion: "iphone 14",
    colorName: "Scarlet",
    price: "€ 1.011",
    colorReference: "vibrant and eye-catching",
    description:
      " A warm orange shade that looks like a burning flame. It represents enthusiasm, energy. Exudes confidence and determination",
    shoppingLink: "#",
    image: "./img/iphone_scarlet3.png",
  },
];

document.addEventListener("DOMContentLoaded", printedProduct);

buttonRight.addEventListener("click", moveRight);
buttonLeft.addEventListener("click", moveLeft);

buttonSearch.addEventListener("submit", searchByColor);

//created elements to palce each key of product
const productV = document.createElement("h4");
productV.classList.add("uppercase", "font-montserrat", "text-lg");

const productName = document.createElement("h1");
productName.classList.add("font-garamond", "text-9xl", "font-bold", "my-6");

const productPrice = document.createElement("p");
productPrice.classList.add(
  "font-garamond",
  "italic",
  "text-7xl",
  "font-regular"
);

const colorEssence = document.createElement("p");
colorEssence.classList.add("font-garamond", "italic", "text-5xl", "mb-2");

const colorDescription = document.createElement("p");
colorDescription.classList.add(
  "font-monserrat",
  "text-lg",
  "font-extralight",
  "mb-4"
);
const productImage = document.createElement("img");
productImage.classList.add(
  "mr-0",
  "md:mr-0",
  "lg:mr-32",
  "lg:w-full",
  "md:w-full",
  "w-screen"
);
const productLink = document.createElement("button");
productLink.classList.add("underline", "underline-offset-8", "tracking-wide");

productLink.addEventListener("click", function () {
  shopNow(productLink);
});

let currentProduct;
function printedProduct() {
  //if (!currentProduct) {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];
  currentProduct = randomProduct;
  //}

  productV.textContent = `${randomProduct.productVersion}`;
  productName.textContent = `${randomProduct.colorName}`;
  productPrice.textContent = `${randomProduct.price}`;
  colorEssence.textContent = `${randomProduct.colorReference}`;
  colorDescription.textContent = `${randomProduct.description}`;

  productImage.src = `${randomProduct.image}`;
  productLink.textContent = "Shop now";
  productLink.href = `${randomProduct.shoppingLink}`;

  textOne.appendChild(productV);
  textOne.appendChild(productName);
  textOne.appendChild(productPrice);
  textTwo.appendChild(colorEssence);
  textTwo.appendChild(colorDescription);
  textTwo.appendChild(productLink);
  divImage.appendChild(productImage);

  document.body.className = `body-color-${randomIndex}`;
}

// function moveRight(currentProduct) {
//   // Get  index of the current displayed product
//   const findCurrentIndex = products.findIndex(
//     (product) => product === currentProduct
//   );
//   //let index = products.indexOf(findCurrentIndex);
//   let nextIndex = findCurrentIndex + 1;
//   //const currentIndex = products.indexOf(findProduct);

//   // si passa del length tornar a posar a = perquè torni a començar
//   if (nextIndex <= products.length) {
//     nextIndex = 0;
//   }

//   const nextProduct = products[nextIndex];
//   console.log(nextProduct);
//   printedProduct(nextProduct);
// }

// function moveLeft() {
//   const findCurrentIndex = products.findIndex(
//     (product) => product === currentProduct
//   );
//   //let index = products.indexOf(findCurrentIndex);
//   let nextIndex = findCurrentIndex - 1;
//   //const currentIndex = products.indexOf(findProduct);

//   // si passa del length tornar a posar a = perquè torni a començar
//   if (nextIndex < 0) {
//     nextIndex = 6;
//   }

//   const nextProduct = products[nextIndex];

//   printedProduct(nextProduct);
// }
function moveRight() {
  const currentIndex = products.findIndex(
    (product) => product === currentProduct
  );
  const nextIndex = (currentIndex + 1) % products.length;
  currentProduct = products[nextIndex];
  printedProduct();
}

function moveLeft() {
  const currentIndex = products.findIndex(
    (product) => product === currentProduct
  );
  const previousIndex = (currentIndex - 1 + products.length) % products.length;
  currentProduct = products[previousIndex];
  printedProduct();
}

// function searchByColor() {
//   let inputValue = `${inputSearch.value}`;

//   for (let i = 0; i < products.length; i++) {
//     console.log("console inputvalue", inputValue);
//     console.log("console array en posicion y name", products[i].colorName);
//     //console.log(Boolean(products[i].colorName) == inputValue);
//     if (inputValue === products[i].colorName.toLowerCase()) {
//       console.log("console en posicion i", products[2]);

//     } else {
//       alert("We cannot recognize the color...");
//     }

//     // if (
//     //   inputValue === "red" ||
//     //   inputValue === "rojo" ||
//     //   inputValue === "vermell"
//     // ) {
//     //   console.log(products[4]);
//     //   printedProduct(products[4]);
//     // } else if (
//     //   inputValue === "azul" ||
//     //   inputValue === "blue" ||
//     //   inputValue === "blau"
//     // ) {
//     //   console.log(products[0]);
//     //   printedProduct(products[0]);
//     // } else if (
//     //   inputValue === "negro" ||
//     //   inputValue === "gris" ||
//     //   inputValue === "black" ||
//     //   inputValue === "negre"
//     // ) {
//     //   console.log(products[1]);
//     //   printedProduct(products[1]);
//     // } else if (
//     //   inputValue === "blanc" ||
//     //   inputValue === "perla" ||
//     //   inputValue === "white" ||
//     //   inputValue === "blanco"
//     // ) {
//     //   console.log(products[2]);
//     //   printedProduct(products[2]);
//     // } else if (
//     //   inputValue === "lila" ||
//     //   inputValue === "lavanda" ||
//     //   inputValue === "purple"
//     // ) {
//     //   console.log(products[3]);
//     //   printedProduct(products[3]);
//     // } else {
//     //   alert("We cannot recognize the color...");
//     // }

//     inputValue = "";

//     //document.body.getElementsById = `buttonSearch-${randomIndex}`;
//   }
// }

function searchByColor(event) {
  event.preventDefault();

  const inputValue = inputSearch.value.toLowerCase();
  const foundProduct = products.find(
    (product) => product.colorName.toLowerCase() === inputValue
  );

  if (foundProduct) {
    currentProduct = foundProduct;
    printedProduct(currentProduct);
  } else {
    alert("No se pudo encontrar un producto con ese color.");
  }
}

function shopNow() {
  //reconeixer en quin producte esta en la posició

  alert(`${currentProduct.colorName} iphone has been added!`);
}
