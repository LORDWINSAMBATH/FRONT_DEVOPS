// Sélection des éléments
const loginOpenBtn = document.getElementById('login-open-btn');
const loginModal = document.getElementById('login-modal');
const loginCloseBtn = document.getElementById('login-close-btn');

const openSignupLink = document.getElementById('open-signup-link');
const signupModal = document.getElementById('signup-modal');
const signupCloseBtn = document.getElementById('signup-close-btn');

// 1. Ouvrir Log in depuis le menu
loginOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('show');
});

// 2. Fermer Log in avec la croix
loginCloseBtn.addEventListener('click', () => {
    loginModal.classList.remove('show');
});

// 3. Passer de Log in à Sign up au clic sur "create an account"
openSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('show');  // Ferme Log in
    signupModal.classList.add('show');    // Ouvre Sign up
});

// 4. Fermer Sign up avec la croix
signupCloseBtn.addEventListener('click', () => {
    signupModal.classList.remove('show');
});

// 5. Fermer n'importe quelle modale en cliquant à l'extérieur
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('show');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('show');
    }
});