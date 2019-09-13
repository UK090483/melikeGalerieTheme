export default function InView() {
  let callbacks = [];
  let ticking = false;

  window.addEventListener("scroll", function(e) {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handlescroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  this.subscribe = (selector, fn) => {
    let elements = document.querySelectorAll(selector);
    callbacks.push([elements, fn]);
  };

  function handlescroll() {
    let result = {};
    let w = window.innerWidth;
    let h = window.innerHeight;

    callbacks.forEach(e => {
      e[0].forEach(element => {
        e[1](checkElement(element), element);
      });

      function checkElement(element) {
        let bs = element.getBoundingClientRect();
        let bottom = h - bs.top;
        let top = bs.top + bs.height;
        result.inViewport = bottom > 0 && top > 0;
        result.visibleComplete = bottom - bs.height > 0 && top - bs.height > 0;
        result.inViewportProcent = bottom / (h + bs.height);
        result.visibleCompleteProcent =
          (bottom - top + (h - bs.height)) / 2 / (h - bs.height);
        return result;
      }
    });
  }
}
