(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".porte6");
    const card6 = document.querySelector("#case6 .card-content");
    if (day > 6) {
      const porte6 = document.querySelector("#case6 .porte6");
      porte6.classList.add("card6-done");
      porte6.innerHTML = `
            <h3>06</h3>
             <p>par Jody</>`;
      porte6.style.backgroundColor = "#4b2142";
    }
    elements.forEach((elem) => {
      elem.addEventListener("click", () => {
        toggleDoor(elem);
      });
    });
    function toggleDoor(element) {
      element.classList.toggle("ouverture");
      card6.addEventListener("click", () => {
        element.classList.remove("ouverture");
      });
    }
  });
})();
