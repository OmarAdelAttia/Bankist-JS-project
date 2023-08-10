import * as el from './elements.js'

// styles

// Hide Modal
export const openModal = function () {
    el.modal.classList.remove('hidden');
    el.overlay.classList.remove('hidden');
};

// Display Modal
export const closeModal = function () {
    el.modal.classList.add('hidden');
    el.overlay.classList.add('hidden');
};

export const keyDown = function (e) {
    if (e.key === 'Escape' && !el.modal.classList.contains('hidden')) {
        closeModal();
    }
}

// page navigation

// scroll to Features
export const scrollToFeatures = function () {
    el.section1.scrollIntoView({ behavior: 'smooth' });
};

export const navScroll = function (element) {
    element.preventDefault();
    if (element.target.classList.contains('nav__link')) {
        const id = element.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
}