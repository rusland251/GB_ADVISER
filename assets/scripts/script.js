// страницы базы знаний tb__ text-block (tb)

const tbPages = document.querySelectorAll(".text-block__page");
const nrBtn = document.querySelectorAll(".nr__btn");

// показывать первую страницу блока База Знаний
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
        if (screenWidth <= 1100) {
          navPage.classList.remove("nav_active");
          mobNavContainer.classList.remove("mob_nav-container_active");
          document.querySelector("body").style.overflow = "auto";
        }
        tbPages[i].classList.add("tb__active-page");
      }
    }
    testBtnNavBottom();
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

// мерцание страниц
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
  if (navRightPage && screenWidth > 576) {
    navRightPage.classList.add("nav-right_inactive");
    shiningEffect();
  } else {
    toogleMobMenuBtn();
  }
}
backButton.addEventListener("click", () => hideRightNavByBackBtn());

// кнопка База знаний открывает меню

function toggleRightNav() {
  if (document.querySelector(".nav-right_inactive")) {
    navRightPage.style.height = `${navPage.scrollHeight}px`;
    navRightPage.classList.remove("nav-right_inactive");
    shiningEffect();
  } else {
    navRightPage.classList.add("nav-right_inactive");
    shiningEffect();
  }
}
bazaPage.addEventListener("click", () => toggleRightNav());

// pop up для user notifications chat
// перенести скрипт в отдельную папку

const userBtn = document.querySelector(".header__user-block__user");
const userPopUp = document.querySelector(".user__pop-up");
const userContainer = document.querySelector(".container__user__pop-up");
const userBtnSvg = document.querySelector(".header__user-block__svg");

function toggleUserPopUp() {
  userPopUp.classList.toggle("user__pop-up_active");
  userContainer.classList.toggle("container__user__pop-up_active");
  if (userBtnSvg.style.transform === "rotate(0.5turn)") {
    userBtnSvg.style.transform = "none";
  } else {
    userBtnSvg.style.transform = "rotate(0.5turn)";
  }
}

userBtn.addEventListener("click", () => toggleUserPopUp());
userContainer.addEventListener("click", () => toggleUserPopUp());

// //////////////////////////////////////////////////////////////////////////////////////
const notifPage = document.querySelector(".notifications-page");
const notifPageContainer = document.querySelector(
  ".notifications-page-container"
);

function toggleNotifPage() {
  notifPage.classList.toggle("notifications-page_active");
  notifPageContainer.classList.toggle("container__notifications-page_active");
}

notifPage.addEventListener("click", () => toggleNotifPage());
notifPageContainer.addEventListener("click", () => toggleNotifPage());

// //////////////////////////////////////////////////////////////////////////////////////
const chatPage = document.querySelector(".chat-page");
const chatPageContainer = document.querySelector(".chat-page-container");

function toggleChatPage() {
  chatPage.classList.toggle("chat-page_active");
  chatPageContainer.classList.toggle("container__chat-page_active");
}

chatPage.addEventListener("click", () => toggleChatPage());
chatPageContainer.addEventListener("click", () => toggleChatPage());

// //////////////////////////////////////////////////////////////////////////////////////

// меню в мобильной версии
const mobMenuBtn = document.querySelector(".mob-menu-btn");
const navPage = document.querySelector(".nav");
const header = document.querySelector(".header");
const screenWidth = window.screen.width;
const mobNavContainer = document.querySelector(".mob_nav-container");

mobNavContainer.addEventListener("click", () => toogleMobMenuBtn());
mobMenuBtn.addEventListener("click", () => toogleMobMenuBtn());

function toogleMobMenuBtn() {
  if (!document.querySelector(".nav_active")) {
    navPage.classList.add("nav_active");
    navRightPage.classList.add("nav-right_inactive");
    document.querySelector("body").style.overflow = "hidden";
    mobNavContainer.classList.add("mob_nav-container_active");
  } else {
    navPage.classList.remove("nav_active");
    document.querySelector("body").style.overflow = "auto";
    mobNavContainer.classList.remove("mob_nav-container_active");
  }
}

// подмненю в моб версии убирается

let elY = 0;
let elY2 = 0;
let scrollY = 0;
const userBlock = document.querySelector(".header__user-block");

window.addEventListener("scroll", function () {
  const height = header.offsetHeight + userBlock.offsetHeight; // высота хедера
  const pos = window.scrollY; // позиция скрола
  const diff = scrollY - pos;
  elY = Math.min(0, Math.max(-height, elY + diff));
  header.style.transform = `translateY(${pos >= height ? elY : 0}px)`;
  userPopUp.style.transform = `translateY(${pos >= height ? elY : 0}px)`;
  scrollY = pos;
  if (document.querySelector(".user__pop-up_active")) {
    toggleUserPopUp();
  }
});

// Перелистывание  страниц

const mnbLeftBtn = document.querySelector(".mnb__left-btn");
const mnbRightBtn = document.querySelector(".mnb__right-btn");
const mnbNavigate = document.querySelector(".mnb__navigate-btn");

mnbRightBtn.addEventListener("click", () => toNextPage());

function toNextPage() {
  let tbActivePage = document.querySelector(".tb__active-page");
  for (let i = 0; i <= tbPages.length; i++) {
    if (tbActivePage === tbPages[i] && tbPages[i + 1]) {
      tbActivePage.classList.remove("tb__active-page");
      tbPages[i + 1].classList.add("tb__active-page");
      nrBtn[i].classList.remove("nr__active-btn");
      nrBtn[i + 1].classList.add("nr__active-btn");
      // mnbLeftBtn.style.visibility = "visible";
      window.scrollTo(0, 0);
      testBtnNavBottom();
    }
  }
}

mnbLeftBtn.addEventListener("click", () => toPrevPage());

function toPrevPage() {
  let tbActivePage = document.querySelector(".tb__active-page");
  for (let i = 0; i <= tbPages.length; i++) {
    if (tbActivePage === tbPages[i] && tbPages[i - 1]) {
      tbActivePage.classList.remove("tb__active-page");
      tbPages[i - 1].classList.add("tb__active-page");
      nrBtn[i].classList.remove("nr__active-btn");
      nrBtn[i - 1].classList.add("nr__active-btn");
      window.scrollTo(0, 0);
      testBtnNavBottom();
    }
  }
}

mnbNavigate.addEventListener("click", () => {
  toogleMobMenuBtn();
  toggleRightNav();
});

// проверка на кнопки

function testBtnNavBottom() {
  if (document.querySelector(".tb__active-page") === tbPages[0]) {
    mnbLeftBtn.style.visibility = "hidden";
  } else {
    mnbLeftBtn.style.visibility = "visible";
  }

  if (
    document.querySelector(".tb__active-page") === tbPages[tbPages.length - 1]
  ) {
    mnbRightBtn.style.visibility = "hidden";
  } else {
    mnbRightBtn.style.visibility = "visible";
  }
}
testBtnNavBottom();

// поиск по странице tb-page

const createSearhMenu = (pageName, findText, num) =>
  `<div class="search-page-blk search-page-${num}">
<div class="page-name">${pageName}</div>
<div class="find-text">${findText}</div>
</div> `;

// для поиска по предложениям
function findingText(text, highlightedWord) {
  const sentences = text.split(". ");
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    if (sentence.includes(highlightedWord)) {
      return sentence.replace(
        highlightedWord,
        `<span style="background-color: yellow;">${highlightedWord}</span>`
      );
    }
  }
  return "";
}

function searchOnPage(event) {
  if (event.key === "Enter") {
    const searchText = document
      .querySelector(".text-block__search-input__input")
      .value.toLowerCase();

    const searchBlock = document.querySelector(".search-page");
    searchBlock.innerHTML = "";
    searchBlock.style.display = "flex";
    searchBlock.style.position = "absolute";

    for (let i = 0; i < tbPages.length; i++) {
      let text = tbPages[i].innerText;
      // const words = text.split(" ");
      const words = text.split(/\s+/);
      for (let j = 0; j < words.length; j++) {
        const word = words[j];
        if (word.toLowerCase() === searchText.toLowerCase()) {
          const highlightedWord = `<span style="background-color: yellow;">${word}</span>`;
          text = text.replace(word, highlightedWord);
          const findText = findingText(text, highlightedWord);
          const pageName =
            i === 0
              ? "Первичная настройка"
              : i === 1
              ? "Профиль пользователя"
              : i === 2
              ? "Изменение общих настроек"
              : i === 3
              ? "Дополнительные возможности"
              : i === 4
              ? "Отправка запросов"
              : i === 5
              ? "Работа со статистикой"
              : "Некорректное значение";
          const rslt = createSearhMenu(pageName, findText, i + 1);

          let newDiv = document.createElement("div");
          newDiv.innerHTML = rslt;
          searchBlock.appendChild(newDiv);
          j = words.length - 1;
        }
      }
    }
  }
  // ссылки на страницу из поиска
  const searchPageLinks = document.querySelectorAll(".search-page-blk");
  searchPageLinks.forEach(function (link) {
    link.addEventListener("click", () => {
      for (let i = 0; i < searchPageLinks.length; i++) {
        if (searchPageLinks[i] === link) {
          showPage(nrBtn[i]);
          document.querySelector(".search-page").innerHTML = "";
          document.querySelector(".search-page").style.display = "none";
        }
      }
    });
  });
}

// Добавляем обработчик события для поля ввода
const searchInput = document.querySelector(".text-block__search-input__input");

searchInput.addEventListener("keydown", searchOnPage);

// Устанавливаем начальные координаты для обработки свайпа
let startX = 0;
let startY = 0;

// Обработчик события touchstart
function handleTouchStart(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
}

// Обработчик события touchmove
function handleTouchMove(event) {
  if (!startX || !startY) {
    return;
  }

  const currentX = event.touches[0].clientX;
  const currentY = event.touches[0].clientY;

  const diffX = startX - currentX;
  const diffY = startY - currentY;

  // Проверяем, был ли свайп влево
  if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
    if (document.querySelector(".nav_active")) {
      toogleMobMenuBtn();
    }
  }
  // Проверяем, был ли свайп вправо
  if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0) {
    if (!document.querySelector(".nav_active")) {
      toogleMobMenuBtn();
    }
  }

  // Сбрасываем начальные координаты
  startX = 0;
  startY = 0;
}

// Добавляем обработчики событий касания
document
  .querySelector("body")
  .addEventListener("touchstart", handleTouchStart, false);
document
  .querySelector("body")
  .addEventListener("touchmove", handleTouchMove, false);
