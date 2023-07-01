'use strict';
import * as el from './elements.js';
import * as method from './functions.js';

for (let i = 0; i < el.btnsOpenModal.length; i++)
  el.btnsOpenModal[i].addEventListener('click', method.openModal);

el.btnCloseModal.addEventListener('click', method.closeModal);

el.overlay.addEventListener('click', method.closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !el.modal.classList.contains('hidden')) {
    method.closeModal();
  }
});

el.btnScrollTo.addEventListener('click', method.scrollToFeatures);

// el.btnScrollTo.addEventListener('click', method.scrollToOperations);

// el.btnScrollTo.addEventListener('click', method.scrollToTestimonials);
