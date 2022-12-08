"use strict";
// case 15 et 20 dec
const main = document.querySelector("main");
const case15 = document.querySelector("#case15");
const img = document.querySelector("#case15 img");
const p = document.querySelector("#case15 p");
const card15 = document.querySelector("#case15 .card");

if (day >= 15) {
  case15.addEventListener("click", () => {
    card15.style.opacity = "0";
    img.style.animationName = "bclignote";
    p.style.animationName = "clignote";
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
    //curseur anim
    main.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor");
      const xPosition = e.offsetX;
      const yPosition = e.offsetY;

      const spanElement = document.createElement("span");

      spanElement.style.left = xPosition + "px";
      spanElement.style.top = yPosition + "px";

      const size = Math.random() * 100;
      spanElement.style.width = size + "px";
      spanElement.style.height = size + "px";
      cursor.appendChild(spanElement);
      setTimeout(() => {
        spanElement.remove();
      }, 2000);
    });
  });
}
