const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const one = document.getElementById("")

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
    { el: document.getElementById("typing2"), text: "Super value deals" },
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
    const speed = 50; // Adjust typing speed

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

