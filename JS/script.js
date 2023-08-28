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

el.nav.addEventListener('mouseover', method.navMouseIn);

el.nav.addEventListener('mouseout', method.navMouseOut)
