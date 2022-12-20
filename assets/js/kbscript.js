"use strict";

const carte3 = document.querySelector("#case3");
carte3.addEventListener("click", animkb);

const kbcard = `
    <div id="KB_div">
        <div id="KB_PN"></div>
        <div id="KB_MM"></div>
        <div id="KB_danse"></div>
        <div id="KB_MC"></div>
        <div id="KB_text">C'EST BIENTOT NOEL</div>
    </div>
`;

const carddefault = carte3.innerHTML;

function animkb() {
  const h = document.querySelector("header");
  h.innerHTML += kbcard;
  const kbdiv = document.querySelector("#KB_div");
  kbdiv.classList.add("kbcardopen");
  carte3.removeEventListener("click", animkb);
  kbdiv.style.position = "fixed";
  h.style.zIndex = "100";
  kbdiv.style.zIndex = "100";
  kbdiv.addEventListener("click", () => {
    kbdiv.remove();
    kbdiv.classList.remove("kbcardopen");
    carte3.addEventListener("click", animkb);
    carte3.style.position = "relative";
  });
}
carte3.innerHTML = `<div class="card done lift"><h3>03</h3><p>par Kévin B.</></div>`;
const carte3Content = carte3.querySelector(".card");
carte3Content.style.backgroundColor = "#285460";

// deuxième carte
const case15 = document.querySelector("#case15");
const case15cont = document.querySelector("#case15 div .card-content");
const case15card = document.querySelector("#case15 .card");
const jono = new Audio("/assets/music/jono.mp3");
var musickb = false;

if (day > 15) {
  case15.addEventListener("click", () => {
    case15card.classList.toggle("ld-vanish");
    console.log(musickb);
    if (musickb == false) {
      jono.play();
      musickb = true;
    } else {
      jono.pause();
      musickb = false;
    }
  });
  case15card.classList.add("card-done");
  case15card.innerHTML = `
    <h3>15</h3>
    <p>par Kévin B.</>`;
}
