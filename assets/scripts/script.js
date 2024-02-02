// страницы базы знаний text-block (tb)

const tbPage = document.querySelectorAll(".text-block__page");
const tbBtn = document.querySelectorAll(".tb__btn");

// показывать первуюстраницу блока База Знаний
if (!document.querySelector(".tb__active-page")) {
  tbPage[0].classList.add("tb__active-page");
}
// const tbActivePage = document.querySelector(".tb__active-page");
console.log();
function showPage(btn) {
  if (!btn.classList.contains(".tb__active-btn")) {
    for (let i = 0; i < tbBtn.length; i++) {
      tbPage[i].classList.remove("tb__active-page");
      if (btn.classList.contains(`tb__btn-${i + 1}`)) {
        btn.classList.add("tb__active-btn");
        tbPage[i].classList.add("tb__active-page");
      }
    }
  }
}
tbBtn.forEach(function (btn) {
  // Вешаем событие клик на кнопки меню
  btn.addEventListener("click", () => {
    showPage(btn);
  });
});

// страница База Знаний

const backButton = document.querySelector(".button-back");
const navRightPage = document.querySelector(".nav-right");
const textBlockPage = document.querySelector(".text-block");

// ссылка  страница База Знаний
const bazaPage = document.querySelector(".baza-page");

// мерцание
function shiningEffect() {
  let tbActivePage = document.querySelector(".tb__active-page");
  tbActivePage.classList.remove("tb__active-page");
  tbActivePage.classList.add("tb__active-page_opacity");
  setTimeout(() => {
    for (let i = 0; i < tbPage.length; i++) {
      if (tbActivePage === tbPage[i]) {
        tbActivePage.classList.remove("tb__active-page_opacity");
        tbActivePage.classList.add("tb__active-page");
      }
    }
  }, 300);
}

// кнопка назад закрывает меню
function hideRightNavByBackBtn() {
  if (navRightPage) {
    navRightPage.classList.add("nav-right_inactive");
    shiningEffect();
  }
}
backButton.addEventListener("click", () => hideRightNavByBackBtn());

// кнопка База знаний открывает меню

function toggleRightNav() {
  if (document.querySelector(".nav-right_inactive")) {
    navRightPage.classList.remove("nav-right_inactive");
    shiningEffect();
  } else {
    navRightPage.classList.add("nav-right_inactive");
    shiningEffect();
  }
}
bazaPage.addEventListener("click", () => toggleRightNav());

// pop up
// перенести скрипт в отдельную папку
