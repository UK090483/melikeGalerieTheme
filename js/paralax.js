if (document.querySelector(".hero-image")) {
  const para = require("./rellax");
  const paralax = new para(".hero-image", {
    speed: -10,
    center: true,

    round: true,
    vertical: true,
    horizontal: false
  });
  // module.exports = paralax;
}
//
