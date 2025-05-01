const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const one = document.getElementById("");
const addToCartBtn = document.getElementById("addToCart");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    // { el: document.getElementById("typing2"), text: "Super value deals" },
    {
      el: document.getElementById("typing4"),
      text: "Save more every Friday on our Friday's shopping promo prize",
    },
  ];

  texts.forEach((item, index) => {
    item.el.textContent = ""; // Clear text content before typing
    setTimeout(() => {
      typeEffect(item.el, item.text);
    }, index * 1000);
  });

  function typeEffect(element, text) {
    let i = 0;
    const speed = 40; // Adjust typing speed

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }
});

const removeCartItemButtons = document.getElementsByClassName("danger-btn");
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", removeCard);
}

const quantityInputs = document.getElementsByClassName("quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

const addToCartButtons = document.getElementsByClassName("fa-cart-shopping");
for (let i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

function removeCard(event) {
  let buttonClicked = event.target;
  buttonClicked.closest("tr").remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
function addToCartClicked (event){
let button = event.target
let shopItem = button.priceElement.priceElement
}
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("quantity-input")[0];
    let price = parseFloat(
      priceElement.innerText.replace("₦", "").replace(",", "")
    );
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total")[0].innerText = "₦ " + total;
}

// document.addEventListener("DOMContentLoaded", function () {
//   const addToCartButtons = document.querySelectorAll(".add-to-cart");

//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent the default link behavior
//       let shopItem = button.closest(".pro"); // Correctly select the closest parent with the class 'pro'
//       let title = shopItem.querySelector("h5").innerText;
//       let price = shopItem.querySelector("h4").innerText;
//       let imageSrc = shopItem.querySelector("img").src;

//       console.log("Title:", title);
//       console.log("Price:", price);
//       console.log("Image Source:", imageSrc);

//       // You can add additional logic here to handle adding the item to the cart
//     });
//   });
// });



// function addToCartClicked(event) {
//   event.preventDefault();
//   let button = event.target;
//   let shopItem = button.closest(".pro");
//   let title = shopItem.getElementsByTagName("h5")[0].innerText;
//   let price = shopItem.getElementsByTagName("h4")[0].innerText;
//   let imageSrc = shopItem.getElementsByTagName("img")[0].src;
//   console.log("Title:", title);
//   console.log("Price:", price);
//   console.log("Image Source:", imageSrc);
// }




