const case12 = document.querySelector("#case12");
// const card12Container = case12.querySelector(".card-container");
const card12Content = case12.querySelector(".card-content");
const card12 = case12.querySelector(".card");
const card12HTML = `
    <div class="circular-bg">
    <div class="close">
              <div class="cross"></div>
              <div class="cross"></div>
            </div>
        <div class="moon">
        </div> 
        <div class="snores">
          <div class="snore snore1">Joyeux</div>
          <div class="snore snore2">noël</div>
          
        </div>
        <div class="santa">
          <div class="disc"></div>
          
          <div class="hat">
            <div class="hat-space"></div>
          </div>
          <div class="furr"></div>
          
          <div class="face">
            <div class="eyebrows eyebrows--left"></div>
            <div class="eyebrows eyebrows--right"></div>
            <div class="nose"></div>
            <div class="beard">
              <div class="beard--left"></div>
              <div class="beard--right"></div>
            </div>
            <div class="mouth"> </div>
          </div>
          <div class="hand--up">
          <div class="arm--right"></div>
            
          <div class="hand--right"></div>
            
          </div>
          <div class="hand--left"></div>
          <div class="stomach">
            <div class="belt-buckle"></div>
          </div>
          <div class="leg--up"></div>
          <div class="leg--down"></div>
          
        </div>
        <div class="christmas-tree">
            <div class="tree-top4"></div>
            <div class="tree-top3"></div>
            <div class="tree-top2"></div>
            <div class="tree-top1"></div>
            <div class="tree-bottom"></div>
        </div>
        <div class="christmas-tree-small">
            <div class="tree-top4"></div>
            <div class="tree-top3"></div>
            <div class="tree-top2"></div>
            <div class="tree-top1"></div>
            <div class="tree-bottom"></div>
        </div>
        <div class="christmas-tree-white">
            <div class="tree-top4"></div>
            <div class="tree-top3"></div>
            <div class="tree-top2"></div>
            <div class="tree-top1"></div>
            <div class="tree-bottom"></div>
        </div>
        <div class="gift gift--orange">
          <div class="gift-bow--left"></div>
          <div class="gift-bow--right"></div>
          <div class="gift-ribbon"></div>
          <div class="gift-top"></div>
          <div class="gift-bottom"></div>
        </div>
        <div class="gift">
          <div class="gift-bow--left"></div>
          <div class="gift-bow--right"></div>
          <div class="gift-ribbon"></div>
          <div class="gift-top"></div>
          <div class="gift-bottom"></div>
        </div>
      </div>
`;
// card12Content.innerHTML = card12HTML;

// Quand la date est passée
if (day > 12) {
  card12.classList.add("card-done");
  card12.innerHTML = `
    <h3>12</h3>
    <p>par Judicael</>`;
}

// Ouverture de la carte et découverte de l'animation
// Ajout d'un id sur la card pour venir annuler et remplacer l'effet de la classe .lift
case12.addEventListener("click", () => {
  card12.setAttribute("id", "card12");
  card12.style.zIndex = 0;
});

// Si l'utilisateur n'est pas sur un smartphone
// Mise en plein écran via la div viewAnimation
const card12Container = case12.querySelector(".card-content");
if (window.innerWidth > 900) {
  card12Container.addEventListener("click", () => {
    console.log("test");
    viewAnimation.innerHTML = card12HTML;
    viewAnimation.style.display = "flex";
    const closer = document.querySelector(".close");
    closer.addEventListener("click", () => {
      viewAnimation.innerHTML = "";
      viewAnimation.style.display = "none";
      card12Container.style.zIndex = 0;
      closeCard12();
    });
  });
}
function closeCard12() {
  card12.removeAttribute("id");
  card12.style.transformOrigin = "center";
  card12.style.opacity = 1;
  card12.classList.add("lift");
  card12.style.transformOrigin = "top left";
  card12.style.zIndex = 0;
}
