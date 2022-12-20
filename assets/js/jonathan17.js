"use strict";
const card17 = document.querySelector("#case17 .card");
if (day > 17) {
  card17.classList.add("card-done", "lift");
  card17.innerHTML = `
       <h3>17</h3>
     <p>par Jonathan</>`;
}
const jb17case17 = document.querySelector(`#case17`);
let jb17card = jb17case17.querySelector(`.card`);
const jb17content = jb17case17.querySelector(`.card-content`);
const jb17wrap = jb17case17.querySelector(`.jb17Wrap`);
let jb17cardOpen = false;
const popSound = new Audio("./assets/music/break.mp3");
function jb17cardOpening() {
  if (jb17cardOpen == true) {
    jb17card.style.transform = "translate(0) rotate(0)";
    jb17cardOpen = false;
  } else {
    jb17card.style.transform = "rotateX(80deg) rotateY(-90deg) rotateZ(80deg)";
    jb17cardOpen = true;
  }
}
const card17HTML =
  /*HTML*/
  `
<span class="close">X</span>
<div class="jb17wrapperPaper">
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    <div class="jb17bubble"></div>
    </div>
    `;
function wrapperAppears() {
  const card17Container = jb17case17.querySelector(".card-container");
  card17Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card17HTML;
    let jb17wrapperPaper = document.querySelector(`.jb17wrapperPaper`);
    let jb17bubble = document.querySelectorAll(`.jb17bubble`);
    function bubblePop(e) {
      popSound.pause();
      popSound.currentTime = 0;
      popSound.play();
      e.target.classList.add("popped");
      e.target.removeEventListener("click", bubblePop);
      e.target.innerHTML =
        /* HTML */
        `
          <svg
            viewBox="0 0 588 610"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M130.718 0L305.384 157.27L324.468 56.1593L372 128.159L499.468 128.159L426.968 289.159L588 411.739L413.5 437.907L399.5 560.407L285.65 498.411L208 609.907L111 432.407L-0.000152588 411.739L130.718 343.907L-6.62396e-05 210.407L179.585 229.9L130.718 0Z"
              fill="url(#paint0_radial_144_55)"
              fill-opacity="0.2"
            />
            <path
              d="M305.875 157.363L324.73 57.4644L371.583 128.435L371.731 128.659L372 128.659L498.694 128.659L426.512 288.954L426.349 289.316L426.665 289.557L586.755 411.42L413.426 437.413L413.047 437.47L413.003 437.851L399.087 559.613L285.889 497.972L285.495 497.758L285.239 498.125L208.051 608.959L111.439 432.168L111.325 431.959L111.091 431.916L1.52001 411.513L130.948 344.351L131.548 344.04L131.075 343.558L1.33394 211.055L179.531 230.397L180.217 230.472L180.074 229.796L131.527 1.40125L305.05 157.642L305.71 158.237L305.875 157.363Z"
              stroke="url(#paint1_radial_144_55)"
              stroke-opacity="0.5"
            />
            <defs>
              <radialGradient
                id="paint0_radial_144_55"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(519 523.5) rotate(-137.386) scale(475.588 440.765)"
              >
                <stop stop-opacity="0" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_144_55"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(380 398.5) rotate(-134.232) scale(290.293 269.038)"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-opacity="0.5" />
              </radialGradient>
            </defs>
          </svg>
        `;
    }
    jb17bubble.forEach((element) => {
      element.addEventListener("click", bubblePop);
    });
    viewAnimation.style.display = "block";
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      if (jb17cardOpen == true) {
        jb17card.style.transform = "translate(0) rotate(0)";
        jb17cardOpen = false;
      }
    });
  });
}
jb17card.addEventListener("click", jb17cardOpening);
jb17wrap.addEventListener("click", wrapperAppears);
