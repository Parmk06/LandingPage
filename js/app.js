/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('.landing__container');
const navBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//Function to create a list item and append it to the navbar
function buildNav(){
    sections.forEach((paragraph, i) => {
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${paragraph.parentNode.id}" class="menu__link">Section ${i + 1}</a>`;
        navBar.appendChild(navItem);
    });
}

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


