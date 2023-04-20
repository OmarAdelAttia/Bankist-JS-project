'use strict';
import * as el from './elements';
import * as method from './functions';

for (let i = 0; i < el.btnsOpenModal.length; i++)
  el.btnsOpenModal[i].addEventListener('click', method.openModal);

el.btnCloseModal.addEventListener('click', method.closeModal);

el.overlay.addEventListener('click', method.closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !el.modal.classList.contains('hidden')) {
    method.closeModal();
  }
});
