class MobileNavbar {
  constructor(menu, navList, navLink) {
    this.menu = document.querySelector(menu)
    this.navList = document.querySelector(navList)
    this.navLink = document.querySelectorAll(navLink)
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLink.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.10s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.menu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick)
  }

  init() {
    if (this.menu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();