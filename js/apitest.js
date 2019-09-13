// var apiTest = document.querySelector(".apitest");
// console.log(window.location);
// var oReq = new XMLHttpRequest();
// var url = window.location.href;
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", url + "myapi");
// oReq.send();

// function reqListener() {
//   console.log(this.response);
//   var res = JSON.parse(this.response);
//   res.forEach(function(element) {
//     var div = document.createElement("div");
//     var h1 = document.createElement("h1");
//     h1.innerHTML = element.header.title;
//     var h4 = document.createElement("h4");
//     h4.innerHTML = element.content;

//     if (element.pic) {
//       var pic = document.createElement("img");
//       pic.setAttribute("src", element.pic);
//       pic.setAttribute("width", "60px");
//       pic.setAttribute("height", "60px");
//       div.appendChild(pic);
//     }
//     div.appendChild(h1);
//     div.appendChild(h4);
//     apiTest.appendChild(div);
//   });
// }
