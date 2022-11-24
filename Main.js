function slowmo() {
  var slowmos = document.querySelectorAll(".slowmo");

  for (var i = 0; i < slowmos.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = slowmos[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      slowmos[i].classList.add("active");
    } else {
      slowmos[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slowmo);