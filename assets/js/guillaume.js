const case14 = document.getElementById("case14");
const card14 = case14.querySelector(".card");
let gdtoggle = 0;

function animation(e) {
  console.log(e);
  e.preventDefault();
  if (e.target instanceof HTMLButtonElement) return;
  card14.classList.toggle("rotate");
  if (gdtoggle == 0) {
    card14.style.transformOrigin = "center";
    gdtoggle = 1;
  } else {
    card14.style.transformOrigin = "top left";
    gdtoggle = 0;
  }
}

case14.addEventListener("click", animation);

const musicHobby2 = document.getElementById("plm");
// Music animation
let sing = false;
const audio2 = new Audio();
audio2.src = "/assets/music/rick.mp3";
audio2.loop = true;
const playSing = () => {
  audio2.play();
  musicHobby2.classList.add("sing");
  sing = true;
};
const pauseSing = () => {
  audio2.pause();
  musicHobby2.classList.remove("sing");
  sing = false;
};
musicHobby2.addEventListener("click", () => {
  if (!sing) {
    playSing();
  } else {
    pauseSing();
  }
});

const musicHobby3 = document.getElementById("pam");
// Music animation
let sing1 = false;
const audio3 = new Audio();
audio3.src = "/assets/music/toc-toc.mp3";
audio3.loop = true;
const playchanson = () => {
  audio3.play();
  musicHobby3.classList.add("sing");
  sing1 = true;
};
const pausechanson = () => {
  audio3.pause();
  musicHobby3.classList.remove("sing");
  sing1 = false;
};
musicHobby3.addEventListener("click", () => {
  if (!sing1) {
    playchanson();
  } else {
    pausechanson();
  }
});

if (day > 14) {
  card14.classList.add("card-done");
  card14.innerHTML = `
  <div class="card-front">
    <h3>14</h3>
    <p>par Guillaume</>
  </div>
  
    `;
}
