function playCard11() {
  const viewContainerCard11 = document.querySelector(
    "#view-animation .card11-container"
  );
  const counterDisplay = document.querySelector(
    "#view-animation .score-card11"
  );
  const viewCard11 = document.querySelector("#view-animation .view-card11");
  const spanRecord = document.querySelector("#view-animation #record");
  const spanPrenomCard11 = document.querySelector(
    "#view-animation .prenom-card11"
  );
  const btnPlayCard11 = document.querySelector("#view-animation #play-card11");
  const messageCard11 = document.querySelector(
    "#view-animation .message-card11"
  );
  let intervalCard11;
  let recordCard11 = 22;
  let counterCard11 = 0;
  let prenomCard11 = "Père Noël";
  // Affichage des spans prenom et record
  if (spanRecord) spanRecord.textContent = recordCard11;
  if (spanPrenomCard11) spanPrenomCard11.textContent = prenomCard11;
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    console.log(bubble);
    viewContainerCard11.appendChild(bubble);
    console.log(viewContainerCard11);
    const size = getRandomNumber(80, 100) + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.left = getRandomNumber(10, 90) + "%";
    bubble.addEventListener("click", () => {
      counterCard11++;
      counterDisplay.textContent = counterCard11;
      bubble.remove();
    });
    // On fait disparaître les bulles à la fin de l'animation anim dure 8s donc pour setTimeout 8000
    setTimeout(() => {
      //bubble.remove();
    }, 10000);
  };
  // Lancement du jeu au click
  if (btnPlayCard11) {
    btnPlayCard11.addEventListener("click", () => {
      console.log("test play");
      counterCard11 = 0;
      btnPlayCard11.textContent = "JOUER";
      btnPlayCard11.disabled = true;
      intervalCard11 = setInterval(bubbleMaker, 800);
      setTimeout(() => {
        clearInterval(intervalCard11);
        if (counterCard11 > recordCard11) {
          recordCard11 = counterCard11;
          messageCard11.textContent = "NOUVEAU RECORD !!!";
          spanRecord.textContent = recordCard11;
        } else {
          messageCard11.textContent = "Moins bien !!!";
        }
        btnPlayCard11.textContent = "REJOUER";
        btnPlayCard11.disabled = false;
      }, 10000);
    });
  }

  function getRandomNumber(min, max) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
    randomNumber = randomNumber / 4294967296;
    return Math.floor(randomNumber * (max - min + 1) + min);
  }
}
