// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 

const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

// Main Functions

/* TODO: Build the navigation dynamically by creating list items for each section */
const buildNav = () => {
    navbar.innerHTML = '';

    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('menu__link');
        listItem.textContent = section.dataset.nav;
        listItem.id = index + 1;
        listItem.addEventListener('click', scrollToSection);

        navbar.appendChild(listItem);
    });
};

/* TODO: Set the active sections based on the scroll position and toggle the corresponding navigation link */
const setActiveSections = () => {
    const threshold = 150;
    const activeSections = Array.from(sections).filter(section => {
        const { top } = section.getBoundingClientRect();
        return top >= -5 && top < threshold;
    });

    sections.forEach(section => {
        const isActive = activeSections.includes(section);
        toggleNavActiveClass(section.dataset.nav, isActive);
    });
};

/* TODO: Toggle the 'menu__active' class for the navigation link based on the scroll position */
const toggleNavActiveClass = (dataNav, set) => {
    const navId = dataNav.split(' ').pop();
    const navItem = document.getElementById(navId);
    navItem.classList.toggle('menu__active', set);
};

/* TODO: Scroll to the corresponding section when a navigation link is clicked */
const scrollToSection = (event) => {
    event.preventDefault();
    const navId = event.target.id;
    const targetSection = document.querySelector(`#section${navId}`);
    const top = targetSection.getBoundingClientRect().top;

    window.scrollBy({
        top,
        behavior: 'smooth',
    });
};

// Scroll-to-top button setup
const scrollUpButton = document.createElement("button");
scrollUpButton.textContent = "Scroll to Top";
scrollUpButton.classList.add("scroll-to-top", "hidden");
document.body.appendChild(scrollUpButton);

scrollUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* TODO: Show/hide the scroll-to-top button based on the scroll position */
window.addEventListener('scroll', function () {
    setActiveSections();

    if (document.documentElement.scrollTop > window.innerHeight) {
        scrollUpButton.classList.remove("hidden");
    } else {
        scrollUpButton.classList.add("hidden");
    }
});

// Events

document.addEventListener('DOMContentLoaded', buildNav);
