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

// scroll to Features
export const scrollToFeatures = function () {
    el.section1.scrollIntoView({ behavior: 'smooth' });
};

// // scroll to Features
// export const scrollToOperations = function () {
//     el.section1.scrollIntoView({ behavior: 'smooth' });
// };

// // scroll to Features
// export const scrollToTestimonials = function () {
//     el.section1.scrollIntoView({ behavior: 'smooth' });
// };