export const openModal = function () {
    el.modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

export const closeModal = function () {
    el.modal.classList.add('hidden');
    el.overlay.classList.add('hidden');
};