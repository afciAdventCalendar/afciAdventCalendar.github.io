// date = new Date();
// day = date.getDate();
// CASE 11 -----------------------------------------------
const case11 = document.getElementById("case11");
const card11 = case11.querySelector(".card");
const card11Container = case11.querySelector(".card-container");
const card11HTML = `
        <div class="card11-container">
          <div class="card11-content">
          <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
            <h3 class="score-card11">0</h3>
            <div class="view-card11">
              <p class="message-card11">
                Attraper le maximun de boule de neige en cliquant dessus.
              </p>
              <p>
                MEILLEUR RECORD <span class="prenom-card11"></span> :
                <span id="record"></span>
              </p>
              <button id="play-card11">JOUER</button>
            </div>
          </div>
        </div>
`;
let toggleCard11 = 0;
// Quand la date est passée
if (day > 11) {
  card11.classList.add("card-done");
  card11.innerHTML = `
  <div class="card-front">
    <h3>11</h3>
    <p>par Laurence</>
  </div>
  <div class="card-back"></div>
    `;
}
// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case11.addEventListener("click", () => {
  if (toggleCard11 == 0) {
    toggleCard11 = 1;
    card11.classList.remove("lift");
    card11.style.transformOrigin = "center";
    card11.setAttribute("id", "card11");
    let anim = card11.animate(
      { transform: ["rotateY(0)", "rotateY(-1080deg)"] },
      { duration: 1000, fill: "forwards" }
    );
    setTimeout(() => {
      card11.style.opacity = 0;
      anim.cancel();
      card11Container.style.zIndex = 10;
    }, 1000);
  } else {
    toggleCard11 = 0;
    if (window.innerWidth <= 900) {
      closeCard11();
    }
  }
});
function closeCard11() {
  card11.removeAttribute("id");
  card11.style.transformOrigin = "center";
  card11.style.opacity = 1;
  card11.classList.add("lift");
  card11.style.transformOrigin = "top left";
}
// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
if (window.innerWidth > 900) {
  card11Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card11HTML;
    viewAnimation.style.display = "block";
    const closer = document.querySelector(".close");
    playCard11();
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      card11Container.style.zIndex = 0;
      closeCard11();
    });
  });
}

// CASE 4 ------------------------------------------------
const case4 = document.getElementById("case4");
const card4 = case4.querySelector(".card");
const card4HTML = `
        <div class="card-container">
          <div class="card-content">
            <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
            <div id="hobby-music-view">
              <img
                src="./assets/img/cat-christmas.jpg"
                alt="des chats qui chantent"
                class="hobby-img"
              />
            </div>
          </div>
        </div>
  `;
let toggleCard4 = 0;
// Quand la date est passée
if (day > 4) {
  card4.classList.add("card4-done");
  card4.innerHTML = `
    <h3>04</h3>
    <p>par Laurence</>`;
  card4.style.backgroundColor = "#4b2142";
}

// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case4.addEventListener("click", () => {
  if (toggleCard4 == 0) {
    card4.setAttribute("id", "card4");
    toggleCard4 = 1;
  } else {
    card4.removeAttribute("id");
    toggleCard4 = 0;
  }
});

// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
if (window.innerWidth > 900) {
  const card4Container = case4.querySelector(".card-container");
  card4Container.addEventListener("click", () => {
    viewAnimation.innerHTML = card4HTML;
    viewAnimation.style.display = "block";
    notesMusic();
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      pauseSing();
    });
  });
}

//----------------------------------------------------------------------
// Animation de la div Hobby Music dans case 4
const musicHobby4 = document.getElementById("hobby-music-4");
// Music animation
let sing4 = false;
const audio4 = new Audio();
audio4.src = "/assets/music/jingle-bells-meowy-christmas.mp3";
audio4.loop = true;
const playSing4 = () => {
  audio4.play();
  musicHobby4.classList.add("sing");
  sing4 = true;
};
const pauseSing4 = () => {
  audio4.pause();
  musicHobby4.classList.remove("sing");
  sing4 = false;
};
musicHobby4.addEventListener("click", () => {
  if (!sing4) {
    playSing4();
    // setTimeout(pauseSing, 8000);
  } else {
    pauseSing4();
  }
});
// Notes animation
const noteMaker = () => {
  const arrayNotes = [
    "/assets/svg/eighth-note.svg",
    "/assets/svg/half-note.svg",
    "/assets/svg/music-note.svg",
    "/assets/svg/quarter-note.svg",
    "/assets/svg/sixteenth-note.svg",
  ];
  // Création d'une variable aléatoire comprise entre 0 et 4 pour le choix d'une image issue du arrayNotes
  const choice = Math.round(Math.random() * 10 * 0.4);

  const noteLeft = document.createElement("img");
  noteLeft.classList.add("hobby-music");
  noteLeft.classList.add("cat-left");
  noteLeft.src = arrayNotes[choice];
  musicHobby4.appendChild(noteLeft);
  // Modification de la variable css --left grâce à setProperty
  noteLeft.style.setProperty("--left", Math.random() * 100 + "%");

  // On fait disparaître les notes une fois l'animation terminée, évite l'accumulation des notes hors de l'image
  setTimeout(() => {
    noteLeft.remove();
  }, 6000);
};
setInterval(noteMaker, 500);

// Animation de la div Hobby Music dans viewAnimation
function notesMusic() {
  const musicHobbyView = document.getElementById("hobby-music-view");
  // Music animation
  const audioView = new Audio();
  audioView.src = "/assets/music/jingle-bells-meowy-christmas.mp3";
  audioView.loop = true;
  const playSingView = () => {
    audioView.play();
    musicHobbyView.classList.add("sing");
    sing = true;
  };
  const pauseSingView = () => {
    audioView.pause();
    musicHobbyView.classList.remove("sing");
  };
  musicHobbyView.addEventListener("click", () => {
    if (!sing) {
      playSingView();
      // setTimeout(pauseSing, 8000);
    } else {
      pauseSingView();
    }
  });
  // Notes animation
  const noteMakerView = () => {
    const arrayNotes = [
      "/assets/svg/eighth-note.svg",
      "/assets/svg/half-note.svg",
      "/assets/svg/music-note.svg",
      "/assets/svg/quarter-note.svg",
      "/assets/svg/sixteenth-note.svg",
    ];
    // Création d'une variable aléatoire comprise entre 0 et 4 pour le choix d'une image issue du arrayNotes
    const choiceView = Math.round(Math.random() * 10 * 0.4);
    const noteLeft = document.createElement("img");
    noteLeft.classList.add("hobby-music");
    noteLeft.classList.add("cat-left");
    noteLeft.src = arrayNotes[choiceView];
    musicHobby4.appendChild(noteLeft);
    musicHobbyView.appendChild(noteLeft);
    // Modification de la variable css --left grâce à setProperty
    noteLeft.style.setProperty("--left", Math.random() * 100 + "%");
    // On fait disparaître les notes une fois l'animation terminée, évite l'accumulation des notes hors de l'image
    setTimeout(() => {
      noteLeft.remove();
    }, 6000);
  };
  setInterval(noteMakerView, 500);
}
