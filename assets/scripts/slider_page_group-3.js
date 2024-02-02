// слайдер в блоке group-3 дополнительная информация slider-text (st)
const btn11 = document.querySelector(".st__btn11");
const btn10 = document.querySelector(".st__btn10");
const btn9 = document.querySelector(".st__btn9");
const page11 = document.querySelector(".st__page11");
const page10 = document.querySelector(".st__page10");
const page9 = document.querySelector(".st__page9");

function activeButton(page, btn) {
  // проверка на нажатые страницы
  const activePage = document.querySelectorAll(".st__active-page");
  const activeBtn = document.querySelectorAll(".st__active-btn");
  for (let i = 0; i <= activePage.length; i++) {
    if (activePage[i]) {
      activePage[i].classList.remove("st__active-page");
    }
    if (activeBtn[i]) {
      activeBtn[i].classList.remove("st__active-btn");
    }
  }
  // ----------
  page.classList.add("st__active-page");
  btn.classList.add("st__active-btn");
}

// btn.onclick = activeButton(page);

btn11.addEventListener("click", () => {
  activeButton(page11, btn11);
});

btn10.addEventListener("click", () => {
  activeButton(page10, btn10);
});

btn9.addEventListener("click", () => {
  activeButton(page9, btn9);
});
