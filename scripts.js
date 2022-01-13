const container = document.querySelector(".container");
const allBox = container.children;
const containerWidth = container.offsetWidth;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;

responsive = [
  { breakPoint: { width: 0, item: 1 } },
  { breakPoint: { width: 600, item: 2 } },
  { breakPoint: { width: 1000, item: 3 } },
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      items = responsive[i].breakPoint.item;
    }
  }

  start();
}

function start() {
  var totalItemsWidth = 0;
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].style.width = containerWidth / items - margin + "px";
    allBox[i].style.margin = margin / 2 + "px";
    totalItemsWidth += containerWidth / items;
    totalItems++;
  }
  container.style.width = totalItemsWidth + "px";
}

window.onload = load();

let currentActive = 0;

next.addEventListener("click", () => {
  currentActive++;

  jumpSlideWidth = jumpSlideWidth + containerWidth;
  container.style.marginLeft = -jumpSlideWidth + "px";

  console.log(currentActive);

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  jumpSlideWidth = containerWidth - jumpSlideWidth;
  container.style.marginLeft = jumpSlideWidth + "px";

  console.log(currentActive);

  update();
});

function update() {
  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === items) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
