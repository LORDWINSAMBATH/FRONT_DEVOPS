
const loginOpenBtn = document.getElementById('login-open-btn');
const loginModal = document.getElementById('login-modal');
const loginCloseBtn = document.getElementById('login-close-btn');

const openSignupLink = document.getElementById('open-signup-link');
const signupModal = document.getElementById('signup-modal');
const signupCloseBtn = document.getElementById('signup-close-btn');


loginOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('show');
});


loginCloseBtn.addEventListener('click', () => {
    loginModal.classList.remove('show');
});


openSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('show');  
    signupModal.classList.add('show');   
});


signupCloseBtn.addEventListener('click', () => {
    signupModal.classList.remove('show');
});


window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('show');
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('show');
    }
});