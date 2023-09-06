import * as el from './elements.js';

// Hide Modal
export const openModal = () => {
  el.modal.classList.remove('hidden');
  el.overlay.classList.remove('hidden');
};

// Display Modal
export const closeModal = () => {
  el.modal.classList.add('hidden');
  el.overlay.classList.add('hidden');
};

// esc btn
export const keyDown = e => {
  if (e.key === 'Escape' && !el.modal.classList.contains('hidden'))
    closeModal();
};

// page navigation

// scroll to Features
export const scrollToFeatures = () => el.section1.scrollIntoView({ behavior: 'smooth' });

// scroll from the targeted element using their id
export const navScroll = event => {
  event.preventDefault();
  // Matching Strategy
  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    if (id !== '#') document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
};

// change tab
export const tabsOnClick = e => {
  //declaration
  const clickedEl = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clickedEl) return;
  // Active tab
  el.tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedEl.classList.add('operations__tab--active');
  // Activate content
  el.tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clickedEl.dataset.tab}`)
    .classList.add('operations__content--active');
};

// Menu fade animation
export const handleHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    // declaration
    const linkElement = e.target;
    const siblings = linkElement.closest('.nav').querySelectorAll('.nav__link');
    const logo = linkElement.closest('.nav').querySelector('img');
    // controlling the opacity
    siblings.forEach(element =>
      element !== linkElement
        ? (element.style.opacity = opacity)
        : (element.style.opacity = 1)
    );
    logo.style.opacity = opacity;
  }
};

// passing "argument" into handler
export const navMouseIn = e => handleHover(e, 0.5);

// passing "argument" into handler
export const navMouseOut = e => handleHover(e, 1);

// sticky navigation
// export const widowScroll = () => {
//     const initialCoords = el.section1.getBoundingClientRect();
//     window.scrollY > initialCoords.top ? el.nav.classList.add('sticky') : el.nav.classList.remove('sticky');
// }
// bad performance on mobile with scroll

// sticky navigation
export const stickyNav = entries => {
  const [entry] = entries;
  entry.isIntersecting
    ? el.nav.classList.remove('sticky')
    : el.nav.classList.add('sticky');
};

// reveal sections
export const revealSections = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// lazy loading imgs
export const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // remove blur class
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  // stop observe
  observer.unobserve(entry.target);
};

// slider
export const slideDirection = (currentSlide = 0) => el.slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`));

export const createDots = () => el.slides.forEach((_, index) => el.dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`));

// change dots indecator
export const activateDot = slide => {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
};

export const init = () => {
    slideDirection();
    createDots();
    activateDot(0);
}