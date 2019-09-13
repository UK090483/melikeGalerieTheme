// function InView() {
//   let callbacks = [];
//   let ticking = false;

//   window.addEventListener("scroll", function(e) {
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         handlescroll();
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });

//   this.subscribe = (selector, fn) => {
//     let elements = document.querySelectorAll(selector);
//     callbacks.push([elements, fn]);
//   };

//   this.initAll = o => {
//     callbacks.forEach(elements => {
//       elements[0].forEach(element => {
//         element.style.opacity = "0";
//       });
//     });
//   };

//   this.init = o => {
//     handlescroll();
//   };

//   function handlescroll() {
//     let result = {};
//     let w = window.innerWidth;
//     let h = window.innerHeight;

//     callbacks.forEach(e => {
//       e[0].forEach(element => {
//         e[1](checkElement(element), element);
//       });

//       function checkElement(element) {
//         let bs = element.getBoundingClientRect();
//         let bottom = h - bs.top;
//         let top = bs.top + bs.height;
//         result.inViewport = bottom > 0 && top > 0;
//         result.visibleComplete = bottom - bs.height > 0 && top - bs.height > 0;
//         result.inViewportProcent = bottom / (h + bs.height);
//         result.visibleCompleteProcent =
//           (bottom - top + (h - bs.height)) / 2 / (h - bs.height);
//         return result;
//       }
//     });
//   }
// }

// let inView = new InView();

// inView.subscribe(".ku-card-pic", hwatch);
// inView.initAll("0");
// inView.init();

// function hwatch(r, e) {
//   console.log(e);
//   // if (r.inViewport) {
//   //   if (r.inViewportProcent > 0.2) {
//   //     e.classList.add("hp-text--wrap-animation");
//   //   }
//   // } else {
//   //   e.classList.remove("hp-text--wrap-animation");
//   // }
// }
// import InView from "./inview";
// let inView = new InView();
// inView.subscribe("p", hwatch);
// function hwatch(r, e) {
//   if (r.inViewportProcent > 0.2) {
//     e.style.opacity = "1";
//   } else {
//     e.style.opacity = "0";
//   }
// }
