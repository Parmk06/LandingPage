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

/*waiting for the DOM to be fully loaded before executing any code*/
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const navigationList = document.querySelector("#navbar__list");
  
    /*TODO: Build the navigation menu dynamically*/
    const  buildNavigationMenu= () => {
        const fragment = document.createDocumentFragment();
        sections.forEach((section, index) => {
        const linkClass = index === 0 ? "menu__link active" : "menu__link";
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${section.id}" class="${linkClass}">${section.dataset.nav}</a>`;
        fragment.appendChild(listItem);
      });
  
      /*appending elements to nav list*/
      navigationList.appendChild(fragment);
    }
  
    buildNavigationMenu();

  /*TODO: Add function to distinguish the active section from other*/
    const getOffset = (section) => Math.floor(section.getBoundingClientRect().top);
    const toggleActiveClass = (section, condition) => {
        section.classList.toggle('your-active-class', condition);
    };

    /* Function to handle section activation on scroll */
    const handleSectionActivation = () => {
        sections.forEach(section => {
            const offset = getOffset(section);
            const isInViewport = offset < 150 && offset >= -150;
            toggleActiveClass(section, isInViewport);
        });
    };
    /* Event listener for scrolling to trigger section activation */
    window.addEventListener('scroll', handleSectionActivation);

   /*TODO: Add a scroll-to-top button*/
    const scrollUpButton = document.createElement("button");
    scrollUpButton.textContent = "Scroll to Top";
    scrollUpButton.classList.add("scroll-to-top", "hidden");
    document.body.appendChild(scrollUpButton);
  
    scrollUpButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > window.innerHeight) {
        scrollUpButton.classList.remove("hidden");
      } else {
        scrollUpButton.classList.add("hidden");
      }
    });
});
  