
const navToggler = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-ul');
const navLinks = document.querySelectorAll('.nav-link');

allEventListners();

function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

