document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".header__toggle .header__bars");
    const menuClose = document.querySelector(".isClose");
    const menu = document.querySelector(".header__main");
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
      menu.classList.add("is-active");
    });
    menuClose.addEventListener("click", function () {
      menu.classList.remove("is-active");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !e.target.matches(".header__bars")) {
        menu.classList.remove("is-active");
      }
    });
  });