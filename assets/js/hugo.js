"use strict";
const body = document.querySelector("body");

let currentTop = 300,
  scalingDifficulty = 1,
  scalingDifficultyAmount = 20,
  spawnTiming = 20;

// -------------------- Named functions -----------------------

function createGameWindow() {
  let createWidow = document.createElement("div");
  createWidow.classList = "hdnp-tile";
  body.onload = body.prepend(createWidow);
  console.log(body);
}

function createGameplateforms() {
  const hdnpTile = document.querySelector(".hdnp-tile");
  let createFloor = document.createElement("div");
  let createRoof = document.createElement("div");
  createRoof.classList = "hdnp-floor";
  createFloor.classList = "hdnp-roof";
  hdnpTile.append(createFloor);
  hdnpTile.append(createRoof);
}
function createCharacter() {
  const hdnpTile = document.querySelector(".hdnp-tile");
  let createCharacter = document.createElement("div");
  createCharacter.classList = "hdnp-character";
  hdnpTile.append(createCharacter);
}
function createObstacle() {
  const hdnpTile = document.querySelector(".hdnp-tile");
  let createObstacle = document.createElement("div");
  createObstacle.classList = "hdnp-obstacle";
  if (Math.random() > 0.5) {
    createObstacle.top = 170;
  } else {
    createObstacle.top = 120;
  }
  scalingDifficultyAmount = 0;

  hdnpTile.append(createObstacle);
}
function switchFloorRoof() {
  const hdnpTile = document.querySelector(".hdnp-tile");
  let hdnpCharacter = document.querySelector(".hdnp-character");
  hdnpCharacter.classList.toggle("reversedGravity");
}
function movingObstacles(params) {
  if (params.left != null) {
    params.style.left = `${params.left}px`;

    params.left = params.left - scalingDifficulty;

    if (params.left < 0) {
      params.remove();
    }
  } else {
    params.style.top = `${params.top}px`;
    // params.style.backgroundColor = "black"
    params.left = 280;
    if (scalingDifficulty < 6) {
      scalingDifficulty = scalingDifficulty + 1;
    }
  }
}
function hitboxes(a) {
  const hdnpTile = document.querySelector(".hdnp-tile");

  let hdnpCharacter = document.querySelector(".hdnp-character"),
    c = a.getBoundingClientRect().x,
    d = hdnpCharacter.getBoundingClientRect().x + 80;

  if (c < d) {
    if (
      a.style.top == "120px" &&
      hdnpCharacter.classList[1] == "reversedGravity"
    ) {
      clearInterval(refreshGame);
      clearInterval(refreshSpawn);
      hdnpTile.innerHTML = "<span>Perdu !</span>";
      scalingDifficulty = 1;
      scalingDifficultyAmount = 20;
      spawnTiming = 20;
      hdnpTile.style.display = "flex";
      hdnpTile.style.backgroundColor = "#a41e1e";
      hdnpTile.style.color = "white";
      document.removeEventListener("keypress", keyBinding);

      setTimeout(() => {
        hdnpTile.remove();
      }, 2000);
    } else if (
      a.style.top == "170px" &&
      hdnpCharacter.classList[1] !== "reversedGravity"
    ) {
      clearInterval(refreshGame);
      clearInterval(refreshSpawn);
      hdnpTile.innerHTML = "<span>Perdu !</span>";
      scalingDifficulty = 1;
      scalingDifficultyAmount = 20;
      spawnTiming = 20;
      hdnpTile.style.display = "flex";
      hdnpTile.style.backgroundColor = "#a41e1e";
      hdnpTile.style.color = "white";
      document.removeEventListener("keypress", keyBinding);

      setTimeout(() => {
        hdnpTile.remove();
      }, 2000);
    }
  }
}
function intervales() {
  refreshSpawn = setInterval(() => {
    if (
      document.querySelector(".hdnp-tile") != null &&
      scalingDifficultyAmount == spawnTiming
    ) {
      createObstacle();
      if (spawnTiming > 4) {
        spawnTiming--;
      }
    }

    scalingDifficultyAmount++;
  }, 100);

  refreshGame = setInterval(() => {
    let obstacles = document.querySelectorAll(".hdnp-obstacle");
    let hdnpCharacter = document.querySelector(".hdnp-character");
    obstacles.forEach((e) => {
      movingObstacles(e);
      hitboxes(e);
    });
  }, 16);
}
function keyBinding(e) {
  if (e.key == " ") {
    switchFloorRoof();
  }
}
// -------------------- eventListener -----------------------
function createListener() {
  document.addEventListener("keypress", keyBinding);
}

// ------------------ setInterval ---------------------

// --------------------- reading -----------------------
const button = document.querySelector(".hdnp-btn");
let refreshGame, refreshSpawn;

function createGame() {
  createGameWindow();
  const hdnpTile = document.querySelector(".hdnp-tile");
  createListener();
  createGameplateforms();
  createCharacter();
  switchFloorRoof();
  intervales();
}
button.addEventListener("click", () => {
  console.log("test");
  if (document.querySelector(".hdnp-tile") == null) {
    createGame();
  }
});
