// 1. Sélectionner les éléments
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modalContainer = document.querySelector('.modal-container');

// 2. Ouvrir la modale au clic sur le bouton "Open"
openBtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

// 3. Fermer la modale au clic sur le bouton "Close"
closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});