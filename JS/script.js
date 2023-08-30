'use strict';
import * as el from './elements.js';
import * as method from './functions.js';

for (let i = 0; i < el.btnsOpenModal.length; i++)
  el.btnsOpenModal[i].addEventListener('click', method.openModal);

el.btnCloseModal.addEventListener('click', method.closeModal);

el.overlay.addEventListener('click', method.closeModal);

document.addEventListener('keydown', method.keyDown);

el.btnScrollTo.addEventListener('click', method.scrollToFeatures);

el.navLinks.addEventListener('click', method.navScroll);

el.tabsContainer.forEach( t => t.addEventListener('click', method.tabsOnClick));

// Menu fade animation
el.nav.addEventListener('mouseover', method.navMouseIn);

// Menu fade animation
el.nav.addEventListener('mouseout', method.navMouseOut);

// // sticky navigation
// window.addEventListener('scroll', method.widowScroll);

// sticky navigation
const headerObserver = new IntersectionObserver(method.stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${el.navHeight}px`
});

headerObserver.observe(el.header);

// reveal sections
const sectionObserver = new IntersectionObserver(method.revealSections, {
  root:null,
  threshold : .15 
});

el.allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images
const imgObserver = new IntersectionObserver(method.loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '100px'
});

el.imgs.forEach(img => imgObserver.observe(img));