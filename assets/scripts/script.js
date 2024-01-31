const btns = document.getElementsByClassName("slider-text__btn");
const pages = document.getElementsByClassName("slider-text__page");

for (let i = 0; i <= btns.length; i++) {
  if (btns[i]) {
    btns[i].addEventListener("click", () => {
      const activePage = document.getElementsByClassName(".st__active-page");
      activePage[i].classList.remove("st__active-page");
      pages[i].classList.add("st__active-page");
      btns[i].classList.add("st__active-btn");
    });
  }
}
