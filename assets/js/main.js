// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went, Make sure that ${selector} exists or is typed correctly.`);  
};
//Nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormcontainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormcontainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormcontainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => { 
    if(event.key === 'Escape') searchFormcontainer.classList.remove('activated');
});
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click',  () => {
    // Add light theme on click
    bodyElement.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
          slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }   
});
   