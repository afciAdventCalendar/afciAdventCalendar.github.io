"use strict";
// case 15 et 20 dec
const case10 = document.querySelector("#case10");
const img = document.querySelector("#case10 img");
const p = document.querySelector("#case10 p");
const card10 = document.querySelector("#case10 .card");
const close = document.querySelector("#case10 h4");

card10.addEventListener("click", animCard10);
//curseur anim

function animCard10() {
  card10.classList.remove("card", "lift");
  img.style.animationName = "bclignote";
  p.style.animationName = "clignote";
  close.style.animationName = "clignote";
  const scale = [
    {
      transform: "scale(0.1)",
      borderRadius: "50px",
    },
    {
      transform: "scale(1)",
      borderRadius: "0px",
    },
  ];
  const options = {
    duration: 1000,
    fill: "forwards",
  };
  img.animate(scale, options);
  document.body.addEventListener("mousemove", guirlande);
}

function guirlande(e) {
  const xPosition = e.pageX;
  const yPosition = e.pageY;

  const spanElement = document.createElement("span");
  spanElement.classList.add("guirlande");
  spanElement.style.left = xPosition + "px";
  spanElement.style.top = yPosition + "px";

  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";
  document.body.prepend(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 2000);
}

close.addEventListener("click", () => {
  card10.classList.add("card", "lift");
  document.body.removeEventListener("mousemove", guirlande);
  // mise à jour du contenu de la face
  caseDone(card10, "Louis", 10);
});
