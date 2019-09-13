var no_mobile_from = 840;
var add_scrolled_from = 50;
var nav_mob = document.querySelector(".nav--mobile-nav");
var body = document.querySelector("body");
var nav = document.querySelector("nav");

if (nav) {
  var nav_btn = nav.querySelector(".nav--mobile-btn");
  var nav_links = nav.querySelectorAll("a");

  bindEvents();

  function bindEvents() {
    nav_links.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });
    if (nav_btn) {
      nav_btn.addEventListener("click", e => {
        toggleNav();
      });
    }

    window.addEventListener("scroll", () => {
      add_scroled_class();
    });
    window.addEventListener("resize", () => {
      close_menu_if_wp_to_big();
    });
  }

  function toggleNav() {
    if (nav_mob.classList.contains("nav--open")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function openMobileNav() {
    nav.classList.remove("scrolled");
    nav_mob.classList.add("nav--open");
    nav_btn.classList.add("nav--mobile-btn-open");
    body.style.overflow = "hidden";
    stopBodyScrolling(true);
  }

  function closeMobileNav() {
    body.style.overflow = "scroll";
    stopBodyScrolling(false);
    nav_mob.classList.remove("nav--open");
    nav_btn.classList.remove("nav--mobile-btn-open");
    add_scroled_class();
  }

  function close_menu_if_wp_to_big() {
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (w > no_mobile_from && nav.classList.contains("nav--open")) {
      closeMobileNav();
    }
  }

  var oldY = 0;
  var scrollLenght = 0;
  var hidden = false;
  function add_scroled_class() {
    var y = window.scrollY;
    var navClasslist = nav.classList;

    if (y > oldY && !navClasslist.contains("nav--scrolled")) {
      scrollLenght++;
      if (scrollLenght > 50) {
        navClasslist.add("nav--scrolled");
        scrollLenght = 0;
      }
    } else if (y < oldY && navClasslist.contains("nav--scrolled")) {
      navClasslist.remove("nav--scrolled");
    }

    if (
      y > add_scrolled_from &&
      !navClasslist.contains("nav--scrolled-small")
    ) {
      navClasslist.add("nav--scrolled-small");
    } else if (
      y < add_scrolled_from &&
      navClasslist.contains("nav--scrolled-small")
    ) {
      navClasslist.remove("nav--scrolled-small");
    }
    oldY = y;
  }

  function stopBodyScrolling(bool) {
    if (bool === true) {
      document.body.addEventListener("touchmove", freezeVp, false);
    } else {
      document.body.removeEventListener("touchmove", freezeVp, false);
    }
  }
  var freezeVp = function(e) {
    e.preventDefault();
  };
}
