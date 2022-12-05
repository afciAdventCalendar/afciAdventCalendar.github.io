date = new Date();
day = date.getDate();
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
let toggleCard10 = 0;
// Quand la date est passée
if (day > 4) {
  card4.classList.add("card4-done");
  card4.innerHTML = `
    <h3>4</h3>
    <p>par Laurence</>`;
  card4.style.backgroundColor = "#4b2142";
}

// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case4.addEventListener("click", () => {
  if (toggleCard10 == 0) {
    card4.setAttribute("id", "card4");
    toggleCard10 = 1;
  } else {
    card4.removeAttribute("id");
    toggleCard10 = 0;
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
let sing = false;
const audio4 = new Audio();
audio4.src = "/assets/music/jingle-bells-meowy-christmas.mp3";
audio4.loop = true;
const playSing = () => {
  audio4.play();
  musicHobby4.classList.add("sing");
  sing = true;
};
const pauseSing = () => {
  audio4.pause();
  musicHobby4.classList.remove("sing");
  sing = false;
};
musicHobby4.addEventListener("click", () => {
  if (!sing) {
    playSing();
    // setTimeout(pauseSing, 8000);
  } else {
    pauseSing();
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
