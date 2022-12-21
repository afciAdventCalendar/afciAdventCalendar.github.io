"user strict";
/**
 * Anime un titre d'apparition mot par mot
 * @param {String} selector
 */
function animateTitle(selector) {
  const title = document.querySelector(selector);
  if (title == null) {
    console.error("Impossible de trouver l'élément" + selector);
    return;
  }
  const children = Array.from(title.childNodes);
  let elements = [];
  children.forEach((child) => {
    if (child.nodeType == Node.TEXT_NODE) {
      const words = child.textContent.trim(" ").split(" ");
      let spans = words.map(wrapWord);
      elements = elements.concat(
        injectElementBetweenItems(spans, document.createTextNode(" "))
      );
    } else {
      elements.push(child);
    }
  });
  console.log(elements);
  title.innerHTML = "";
  elements.forEach((el) => {
    title.appendChild(el);
  });
  Array.from(title.querySelectorAll("span span")).forEach((span, k) => {
    span.style.animationDelay = k * 0.2 + "s";
  });
}
/** Entoure le mot de 2 span
 *
 * @param {string} word
 */
function wrapWord(word) {
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  span.appendChild(span2);
  span2.innerHTML = word;
  return span;
}
/**
 *
 * @param {HTMLElement[]} arr
 * @param {Node} element  Element injecter entre chaque partie du tableau
 * @return {Node[]}
 */
function injectElementBetweenItems(arr, element) {
  return arr
    .map((item, k) => {
      if (k == arr.length - 1) {
        return [item];
      }
      return [item, element.cloneNode()];
    })
    .reduce((acc, pair) => {
      acc = acc.concat(pair);
      return acc;
    }, []);
}
let fermeture = 0;
let opened = false;
function portes() {
  fermeture++;
  if (fermeture == 1) {
    // console.log(fermeture);
    fermeture = 0;
    const template = document.querySelector("#adel");

    const view = document.querySelector("#view-animation");
    if (opened) return;
    view.style.display = "block";
    view.append(template.content);
    opened = true;
    animateTitle(".porte");
    const card18Close = document.querySelector("#view-animation .close");
    card18Close.addEventListener("click", () => {
      console.log("test fermeture");
      view.textContent = "";
      view.style.display = "none";
    });
  }
}
const porte = document.querySelector("#case18 .card");
porte.style.backgroundColor = "black";
// console.log(porte);
porte.addEventListener("click", portes);
// animateTitle('.porte')
