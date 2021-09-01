let bg = document.getElementById("bg");
let tree = document.getElementById("tree");
let sheet = document.getElementById("sheet");
let tittle = document.getElementById("tittle");
let wild = document.getElementById("wild");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.2 + "px";
  tree.style.left = -value * 0.2 + "px";
  sheet.style.top = value * 1 + "px";
  tittle.style.marginTop = value * 3 + "px";
  wild.style.marginLeft = -value * 2 + "px";
  wild.style.marginTop = -value * 3 + "px";
});