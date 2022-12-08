(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".porte6");
    elements.forEach((elem) => {
      elem.addEventListener("click", () => {
        toggleDoor(elem);
      });
    });

    function toggleDoor(element) {
      element.classList.toggle("ouverture");
    }
  });
})();
