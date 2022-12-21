"use strict";
const case21 = document.querySelector("#case21");
const card21 = case21.querySelector(".card");
case21.addEventListener("click", showDefault(case21));

const card21Container = case21.querySelector(".card-container");
const card21HTML = `
        <div class="card21-container">
          <div class="card-content">
          <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
            <div class="snowContainerKL">
              <div class="snowKL"></div>
              <div class="textLightKL">
                <span>I</span>
                <span>T</span>
                <span>'S</span>
                <span>C</span>
                <span>H</span>
                <span>R</span>
                <span>I</span>
                <span>S</span>
                <span>T</span>
                <span>M</span>
                <span>A</span>
                <span>S</span>
                <span>S</span>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>O</span>
                <span>N</span>
              </div>
              <img
                src="/assets/img/SantaKL.png"
                alt="SantaKL"
                id="SantaKL"
                class="SantaKL"
              />
              <div class="clickKL">
                <button class="b1KL">Ho ho ho !</button>
              </div>
              <div class="giftKL">
                <img
                  src="/assets/img/christmas-gift-28083.png"
                  alt="cadeau"
                  id="GiftKL"
                />
              </div>
              <div class="treeKL">
                <img
                  src="/assets/img/Transparent_Xmas_Tree_PNG_Clipart.png"
                  alt="Tree"
                />
              </div>
            </div>
            <div class="snowManKL">
              <img
                src="/assets/img/Snowman-Transparent-Images.png"
                alt="Snowman"
              />
            </div>
          </div>
          <audio id="myAudioKL">
            <source
              src="/assets/music/Christmas-Bells-Sound-Effect.mp3"
              type="audio/mpeg"
            />
          </audio>
          <audio id="myAudio2KL">
            <source
              src="/assets/music/Ho-Ho-Ho-Santa-Sound.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
`;
// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
if (window.innerWidth > 900) {
  card21Container.addEventListener("click", (e) => {
    if (e.target instanceof HTMLButtonElement) return;
    console.log("test");
    viewAnimation.innerHTML = card21HTML;
    viewAnimation.style.display = "block";
    const btnKL = document.querySelector(".b1KL");
    santaKL = document.querySelector("#SantaKL");
    btnKL.addEventListener("click", eventBtn);
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      santaKL = document.querySelector("#SantaKL");
      viewAnimation.style.display = "none";
      // card21Container.style.zIndex = 0;
      closeCard21();
    });
  });
}
function closeCard21() {
  card21.removeAttribute("id");
  card21.style.transformOrigin = "center";
  card21.style.opacity = 1;
  card21.classList.add("lift");
  card21.style.transformOrigin = "top left";
}
// -------------------------------------------------------
let btnKL = document.querySelector(".b1KL");
let santaKL = document.querySelector("#SantaKL");
const audio1KL = document.querySelector("#myAudioKL");
const audio2KL = document.querySelector("#myAudio2KL");
// Click animation Santa + audio play on background.
btnKL.addEventListener("click", eventBtn);
function eventBtn() {
  moveKL();
  jinglesKL();
  soundKL();
}
// Animaton Santa left to right
function moveKL() {
  const keyframes = [
    {
      left: "-100%",
    },
    {
      left: 0,
    },
    {
      left: "100%",
    },
  ];
  const options = {
    duration: 4000,
    iterations: 1,
    fill: "forwards",
  };
  santaKL.animate(keyframes, options);
}
// 1st audio
function jinglesKL() {
  console.log("testAudio");
  audio1KL.play();
}
// 2nd audio
function soundKL() {
  setTimeout(() => {
    audio2KL.play();
  }, 2000);
}
