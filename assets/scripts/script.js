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
        if (screenWidth <= 576) {
          navPage.classList.remove("nav_active");
          mobNavContainer.classList.remove("mob_nav-container_active");
          document.querySelector("body").style.overflow = "auto";
        }
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
const mobNavContainer = document.querySelector(".mob_nav-container");
// document.body.style.maxHeight = `${block.offsetHeight}px`;
mobNavContainer.addEventListener("click", () => toogleMobMenuBtn());
mobMenuBtn.addEventListener("click", () => toogleMobMenuBtn());

function toogleMobMenuBtn() {
  if (!document.querySelector(".nav_active")) {
    navPage.classList.add("nav_active");
    navRightPage.classList.add("nav-right_inactive");
    document.querySelector("body").style.overflow = "hidden";
    mobNavContainer.classList.add("mob_nav-container_active");
    // console.log(textBlockPage.scrollHeight);
    // if (screenWidth <= 576) {
    // закидываю в сторэдж значение прокрутки по оси Y и вычитаю выстоу хедера 68
    localStorage.setItem("pageScrollY", JSON.stringify(window.scrollY - 68));
    //   let rslt = navPage.offsetHeight - header.offsetHeight;
    //   textBlockPage.style.maxHeight = `${rslt}px`;
    //   // textBlockPage.style.marginTop = `-${textBlockPage.scrollHeight - rslt}px`;
    // }
  } else {
    navPage.classList.remove("nav_active");
    document.querySelector("body").style.overflow = "auto";
    mobNavContainer.classList.remove("mob_nav-container_active");
    // if (screenWidth <= 576) {
    // const pageScrollY = localStorage.getItem("pageScrollY");
    // console.log(pageScrollY);
    //   textBlockPage.style.maxHeight = `100%`;
    //   textBlockPage.style.marginTop = `72px`;
    // window.scrollBy(0, pageScrollY);
    // }
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

  // if (pos >= height) {
  //   header.style.position = "fixed";
  // } else {
  //   header.style.position = header.style.position;
  // }

  header.style.transform = `translateY(${pos >= height ? elY : 0}px)`;

  scrollY = pos;
});

// Прокрутка страницы

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
      // mnbRightBtn.style.visibility = "visible";
      window.scrollTo(0, 0);
      testBtnNavBottom();
    }
  }
}

mnbNavigate.addEventListener("click", () => {
  console.log("asdas");
  toogleMobMenuBtn();
  toggleRightNav();
});

// проверка на кнопки

function testBtnNavBottom() {
  if (screenWidth <= 576) {
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
}
testBtnNavBottom();

// поиск по странице

function searchOnPage(event) {
  // Проверяем, была ли нажата клавиша Enter
  if (event.key === "Enter") {
    // Получаем значение поля ввода
    const searchText = document.querySelector(
      ".text-block__search-input__input"
    ).value;

    // Получаем все элементы <p> на странице
    const paragraphs = document.getElementsByTagName("p");

    // Проходимся по каждому элементу и проверяем наличие искомого текста
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i];
      let text = paragraph.innerText;

      // Разделяем текст на отдельные слова
      const words = text.split(" ");

      // Проходимся по каждому слову и проверяем, содержит ли оно искомую фразу
      for (let j = 0; j < words.length; j++) {
        const word = words[j];

        // Если слово содержит искомую фразу, выделяем его с помощью тега <mark>
        if (word.includes(searchText)) {
          const highlightedWord = "<mark>" + word + "</mark>";
          text = text.replace(word, highlightedWord);
        }
      }

      // Заменяем исходный текст на текст с выделенными словами
      paragraph.innerHTML = text;
    }
  }
}

// свайп влево

// Добавляем обработчик события для поля ввода
const searchInput = document.querySelector(".text-block__search-input__input");
searchInput.addEventListener("keydown", searchOnPage);

// var searchButton = document.querySelector(".text-block__search-input");
// searchButton.addEventListener("click", searchOnPage);

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
    toNextPage();
  }

  // Проверяем, был ли свайп вправо
  if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0) {
    // Закрываем элемент "nav"
    toPrevPage();
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
