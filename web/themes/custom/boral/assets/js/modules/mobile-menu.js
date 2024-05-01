/**
 * DVB mobile-menu.js
 */

// import '../../pcss/navigation/mobile-button.pcss';
// import '../../pcss/navigation/mobile-menu.pcss';

export default class Module {
  constructor() {
    // Mobile menu button that will toggle open and close.
    this.button = document.getElementById('mobile-nav-button')
    this.bind(this.button)
  }

  // Open the menu and toggle the button class.
  bind(button) {
    const activeClass = 'is-active'
    const menu = document.querySelector(button.dataset.bsTarget)

    menu.addEventListener('show.bs.offcanvas', () => {
      button.classList.add(activeClass)
    })

    menu.addEventListener('hidden.bs.offcanvas', () => {
      button.classList.remove(activeClass)
    })
  }
}
