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

// scroll from the targeted element using their id
export const navScroll = element => {
    element.preventDefault();
    // Matching Strategy
    if (element.target.classList.contains('nav__link')) {
        const id = element.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
}

export const tabsOnClick = e => {
    //declaration
    const clickedEl = e.target.closest('.operations__tab');
    // Guard Clause
    if (!clickedEl) return;
    // Active tab
    el.tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    clickedEl.classList.add('operations__tab--active');
    // Activate content
    el.tabsContent.forEach(content => console.log(content.classList.remove('operations__content--active')));
    document.querySelector(`.operations__content--${clickedEl.dataset.tab}`).classList.add('operations__content--active');
}