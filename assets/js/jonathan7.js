"use strict";
const jb7case7 = document.querySelector(`#case7`);
let jb7card = jb7case7.querySelector(`.card`);
const jb7content = jb7case7.querySelector(`.card-content`);
const jb7link = jb7case7.querySelector(`.jb7link`);
let jb7cardOpen = false;
function jb7cardOpening() {
  if (jb7cardOpen == true) {
    jb7card.style.transform = "translate(0) rotate(0)";
    jb7cardOpen = false;
  } else {
    jb7card.style.transform = "rotateX(120deg) rotateZ(30deg)";
    jb7cardOpen = true;
  }
}
const card7HTML =
  /*HTML*/
  `
    <span class="close">X</span>
    <div class="jb7letter">
        <div class="jb7img">
            <img src="./assets/img/form.png">
            <div class="jb7form jb7hide">
            <h1 class="jb7hide">Lettre au père Noël</h1>
            <p class="jb7hide">Cette année le père noël se met au numérique.<br>Au lieu d'une traditionnelle lettre, remplissez ce formulaire et envoyez le au père noël.</p>
            <label for="jb7Plaintes">Tout d'abord dis moi ce qui te contrarie et que tu aimerais changer.</label>
            <label for="jb7Atouts">Ensuite, dis moi les choses qui te plaisent et que tu voudrais garder.</label>
            <label for="jb7Nom">Nom et prénom (facultatifs)</label>
            </div>
            <textarea id="jb7Plaintes" cols="30" rows="10"></textarea>
            <textarea id="jb7Atouts" cols="30" rows="7"></textarea>
            <button class="jb7Submit jb7hide">Submit</button>
            <input id="jb7Nom" type="text">
        </div>
    </div>
`;
function jb7letterAppears() {
  const card7Container = jb7case7.querySelector(".card-container");
  card7Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card7HTML;
    const jb7Plaintes = document.querySelector(`#jb7Plaintes`);
    const jb7Atouts = document.querySelector(`#jb7Atouts`);
    const jb7Nom = document.querySelector(`#jb7Nom`);
    viewAnimation.style.display = "block";
    const closer = document.querySelector(".close");
    const jb7Submit = document.querySelector(`.jb7Submit`);
    function jb7Finish() {
      let jb7canvas = document.createElement(`canvas`);
      let jb7ctx = jb7canvas.getContext(`2d`);
      jb7canvas.width = document.querySelector(`.jb7img`).offsetWidth;
      jb7canvas.height = document.querySelector(`.jb7img`).offsetHeight;
      let jb7img = new Image();
      jb7img.src = "./assets/img/form.png";
      jb7ctx.drawImage(jb7img, 0, 0, jb7canvas.width, jb7canvas.height);
      jb7ctx.font = "1.1rem serif";
      jb7ctx.fillStyle = "black";
      let jb7TextArray1 = jb7Plaintes.value.split(` `);
      let jb7TextArray2 = [];
      let jb7max = jb7TextArray1.length;
      for (let jb7i = 0; jb7i < jb7max; jb7i += 5) {
        for (let jb7j = 0; jb7j < 5; jb7j++) {
          let jb7pop = jb7TextArray1.shift();
          jb7TextArray2.push(jb7pop);
        }
        jb7ctx.fillText(
          `${jb7TextArray2.join(` `)}`,
          jb7canvas.width * 0.42,
          jb7canvas.height * 0.32 + jb7i * 6
        );
        jb7TextArray2 = [];
      }
      jb7TextArray1 = jb7Plaintes.value.split(` `);
      jb7TextArray2 = [];
      jb7max = jb7TextArray1.length;
      for (let jb7i = 0; jb7i < jb7max; jb7i += 5) {
        for (let jb7j = 0; jb7j < 5; jb7j++) {
          let jb7pop = jb7TextArray1.shift();
          jb7TextArray2.push(jb7pop);
        }
        jb7ctx.fillText(
          `${jb7TextArray2.join(` `)}`,
          jb7canvas.width * 0.42,
          jb7canvas.height * 0.64 + jb7i * 6
        );
        jb7TextArray2 = [];
      }
      jb7ctx.fillText(
        `${jb7Nom.value}`,
        jb7canvas.width * 0.42,
        jb7canvas.height * 0.955
      );
      let jb7saver = document.createElement(`a`);
      jb7saver.setAttribute(`download`, `Formulaire.png`);
      let jb7sauvegarde = jb7canvas.toDataURL("image/png");
      jb7saver.href = jb7sauvegarde;
      let jb7hide = document.querySelectorAll(`.jb7hide`);
      jb7link.textContent = "Nolwenn";
      jb7hide.forEach((element) => {
        element.style.opacity = 0;
      });
      setTimeout(() => {
        jb7hide.forEach((element) => {
          element.style.display = "none";
        });
        jb7saver.click();
      }, 1000);
    }
    jb7Submit.addEventListener("click", jb7Finish);
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      if (jb7cardOpen == true) {
        jb7card.style.transform = "translate(0) rotate(0)";
        jb7cardOpen = false;
      }
    });
  });
}
jb7card.addEventListener("click", jb7cardOpening);
jb7link.addEventListener("click", jb7letterAppears);

if (day > 7) {
  jb7card.classList.add("card-done");
  jb7card.innerHTML = `
  <div class="card-front">
    <h3>07</h3>
    <p>par Guillaume</>
  </div>
  <div class="card-back"></div>
    `;
}
