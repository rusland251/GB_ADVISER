// страницы базы знанийtb__ text-block (tb)

const tbPages = document.querySelectorAll(".text-block__page");
const nrBtn = document.querySelectorAll(".nr__btn");

// показывать первуюстраницу блока База Знаний
if (!document.querySelector(".tb__active-page")) {
  tbPages[0].classList.add("tb__active-page");
  nrBtn[0].classList.add("nr__active-btn");
}

function showPage(btn) {
  if (!btn.classList.contains(".tb__active-btn")) {
    for (let i = 0; i < nrBtn.length; i++) {
      tbPages[i].classList.remove("tb__active-page");
      nrBtn[i].classList.remove("nr__active-btn");
      if (btn.classList.contains(`nr__btn-${i + 1}`)) {
        btn.classList.add("nr__active-btn");
        tbPages[i].classList.add("tb__active-page");
      }
    }
  }
}
nrBtn.forEach(function (btn) {
  // Вешаем событие клик на кнопки меню
  btn.addEventListener("click", () => {
    showPage(btn);
  });
});

// страница База Знаний

const backButton = document.querySelector(".button-back");
const navRightPage = document.querySelector(".nav-right");
const textBlockPage = document.querySelector(".text-block");

// кнопка страница База Знаний
const bazaPage = document.querySelector(".baza-page");

// мерцание
function shiningEffect() {
  let tbActivePage = document.querySelector(".tb__active-page");
  tbActivePage.classList.remove("tb__active-page");
  tbActivePage.classList.add("tb__active-page_opacity");
  setTimeout(() => {
    for (let i = 0; i < tbPages.length; i++) {
      if (tbActivePage === tbPages[i]) {
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
  console.time("База Знаний");
  if (document.querySelector(".nav-right_inactive")) {
    navRightPage.classList.remove("nav-right_inactive");
    shiningEffect();
  } else {
    navRightPage.classList.add("nav-right_inactive");
    shiningEffect();
  }
  console.timeEnd("База Знаний");
}
bazaPage.addEventListener("click", () => toggleRightNav());

// pop up
// перенести скрипт в отдельную папку

const userBtn = document.querySelector(".header__user-block__user");
const userPopUp = document.querySelector(".header-user__pop-up");

function toogleUserPopUp() {
  userPopUp.classList.toggle("header-user__pop-up_active");
}

userBtn.addEventListener("click", () => toogleUserPopUp());

// меню в мобильной версии
const mobMenuBtn = document.querySelector(".mob-menu-btn");
const navPage = document.querySelector(".nav");
const header = document.querySelector(".header");
const screenWidth = window.screen.width;
// document.body.style.maxHeight = `${block.offsetHeight}px`;
mobMenuBtn.addEventListener("click", () => toogleMobMenuBtn());

function toogleMobMenuBtn() {
  if (!document.querySelector(".nav_active")) {
    navPage.classList.add("nav_active");
    console.log(textBlockPage.scrollHeight);
    if (screenWidth <= 576) {
      // закидываю в сторэдж значение прокрутки по оси Y и вычитаю выстоу хедера 68
      localStorage.setItem("pageScrollY", JSON.stringify(window.scrollY - 68));
      let rslt = navPage.offsetHeight - header.offsetHeight;
      textBlockPage.style.maxHeight = `${rslt}px`;
      // textBlockPage.style.marginTop = `-${textBlockPage.scrollHeight - rslt}px`;
    }
  } else {
    navPage.classList.remove("nav_active");
    if (screenWidth <= 576) {
      const pageScrollY = localStorage.getItem("pageScrollY");
      console.log(pageScrollY);
      textBlockPage.style.maxHeight = `100%`;
      textBlockPage.style.marginTop = `72px`;
      window.scrollBy(0, pageScrollY);
    }
  }
}

// подмненю в моб версии убирается

// let elY = 0;
// let scrollY = 0;
// window.addEventListener("scroll", function () {
//   const el = document.querySelector(".header");
//   const height = el.offsetHeight;
//   const pos = window.scrollY;
//   const diff = scrollY - pos;
//   console.log(height);
//   elY = Math.min(0, Math.max(-height, elY + diff));
//   el.style.position =
//     pos >= height ? "fixed" : pos === 0 ? "absolute" : el.style.position;
//   el.style.transform = `translateY(${
//     el.style.position === "fixed" ? elY : 0
//   }px)`;

//   scrollY = pos;
// });
