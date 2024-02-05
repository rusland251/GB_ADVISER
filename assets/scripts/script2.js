class KnowledgeBase {
  constructor() {
    this.tbPages = document.querySelectorAll(".text-block__page");
    this.nrBtn = document.querySelectorAll(".nr__btn");
    this.navRightPage = document.querySelector(".nav-right");
    this.textBlockPage = document.querySelector(".text-block");
    this.backButton = document.querySelector(".button-back");
    this.bazaPage = document.querySelector(".baza-page");
    this.userBtn = document.querySelector(".header__user-block__user");
    this.userPopUp = document.querySelector(".header-user__pop-up");
    this.mobMenuBtn = document.querySelector(".mob-menu-btn");
    this.navPage = document.querySelector(".nav");
    this.header = document.querySelector(".header");
    this.screenWidth = window.screen.width;
    this.mobNavContainer = document.querySelector(".mob_nav-container");
    this.elY = 0;
    this.elY2 = 0;
    this.scrollY = 0;
    this.mnbLeftBtn = document.querySelector(".mnb__left-btn");
    this.mnbRightBtn = document.querySelector(".mnb__right-btn");
    this.mnbNavigate = document.querySelector(".mnb__navigate-btn");
    this.initialize();
  }

  initialize() {
    // Show the first page of the knowledge base
    if (!document.querySelector(".tb__active-page")) {
      this.tbPages[0].classList.add("tb__active-page");
      this.nrBtn[0].classList.add("nr__active-btn");
    }

    // Add click event listeners to the buttons
    this.nrBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.showPage(btn);
      });
    });

    this.backButton.addEventListener("click", () => {
      this.hideRightNavByBackBtn();
    });

    this.bazaPage.addEventListener("click", () => {
      this.toggleRightNav();
    });

    this.userBtn.addEventListener("click", () => {
      this.toogleUserPopUp();
    });

    this.mobNavContainer.addEventListener("click", () => {
      this.toogleMobMenuBtn();
    });

    this.mobMenuBtn.addEventListener("click", () => {
      this.toogleMobMenuBtn();
    });

    window.addEventListener("scroll", () => {
      this.handleScroll();
    });

    this.mnbRightBtn.addEventListener("click", () => {
      this.showNextPage();
    });

    this.mnbLeftBtn.addEventListener("click", () => {
      this.showPreviousPage();
    });

    this.mnbNavigate.addEventListener("click", () => {
      this.toogleMobMenuBtn();
      this.toggleRightNav();
    });

    if (this.screenWidth <= 576) {
      if (document.querySelector(".tb") === this.tbPages[0]) {
        this.mnbLeftBtn.style.visible = "hidden";
      }
    }
  }

  showPage(btn) {
    if (!btn.classList.contains(".tb__active-btn")) {
      for (let i = 0; i < this.nrBtn.length; i++) {
        this.tbPages[i].classList.remove("tb__active-page");
        this.nrBtn[i].classList.remove("nr__active-btn");
        if (btn.classList.contains(`nr__btn-${i + 1}`)) {
          btn.classList.add("nr__active-btn");
          if (this.screenWidth <= 576) {
            this.navPage.classList.remove("nav_active");
            this.mobNavContainer.classList.remove("mob_nav-container_active");
            document.querySelector("body").style.overflow = "auto";
          }
          this.tbPages[i].classList.add("tb__active-page");
        }
      }
    }
  }

  hideRightNavByBackBtn() {
    if (this.navRightPage) {
      this.navRightPage.classList.add("nav-right_inactive");
      this.shiningEffect();
    }
  }

  toggleRightNav() {
    if (document.querySelector(".nav-right_inactive")) {
      this.navRightPage.classList.remove("nav-right_inactive");
      this.shiningEffect();
    } else {
      this.navRightPage.classList.add("nav-right_inactive");
      this.shiningEffect();
    }
  }

  toogleUserPopUp() {
    this.userPopUp.classList.toggle("header-user__pop-up_active");
  }

  toogleMobMenuBtn() {
    if (!document.querySelector(".nav_active")) {
      this.navPage.classList.add("nav_active");
      this.navRightPage.classList.add("nav-right_inactive");
      document.querySelector("body").style.overflow = "hidden";
      this.mobNavContainer.classList.add("mob_nav-container_active");
      localStorage.setItem("pageScrollY", JSON.stringify(window.scrollY - 68));
    } else {
      this.navPage.classList.remove("nav_active");
      document.querySelector("body").style.overflow = "auto";
      this.mobNavContainer.classList.remove("mob_nav-container_active");
    }
  }

  handleScroll() {
    const height = this.header.offsetHeight + this.userBlock.offsetHeight;
    const pos = window.scrollY;
    const diff = this.scrollY - pos;
    this.elY = Math.min(0, Math.max(-height, this.elY + diff));
    this.header.style.transform = `translateY(${
      pos >= height ? this.elY : 0
    }px)`;
    this.scrollY = pos;
  }

  showNextPage() {
    let tbActivePage = document.querySelector(".tb__active-page");
    for (let i = 0; i <= this.tbPages.length; i++) {
      if (tbActivePage === this.tbPages[i] && this.tbPages[i + 1]) {
        tbActivePage.classList.remove("tb__active-page");
        this.tbPages[i + 1].classList.add("tb__active-page");
      }
    }
  }

  showPreviousPage() {
    let tbActivePage = document.querySelector(".tb__active-page");
    for (let i = 0; i <= this.tbPages.length; i++) {
      if (tbActivePage === this.tbPages[i] && this.tbPages[i - 1]) {
        tbActivePage.classList.remove("tb__active-page");
        this.tbPages[i - 1].classList.add("tb__active-page");
      }
    }
  }

  shiningEffect() {
    let tbActivePage = document.querySelector(".tb__active-page");
    tbActivePage.classList.remove("tb__active-page");
    tbActivePage.classList.add("tb__active-page_opacity");
    setTimeout(() => {
      for (let i = 0; i < this.tbPages.length; i++) {
        if (tbActivePage === this.tbPages[i]) {
          tbActivePage.classList.remove("tb__active-page_opacity");
          tbActivePage.classList.add("tb__active-page");
        }
      }
    }, 300);
  }
}

const knowledgeBase = new KnowledgeBase();
