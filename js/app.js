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

//waiting for the DOM to be fully loaded before executing any code
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const navigationList = document.querySelector("#navbar__list");
  
    // Build the navigation menu dynamically
    function buildNavigationMenu() {
      const fragment = document.createDocumentFragment();
  
      sections.forEach((section, index) => {
        const linkClass = index === 0 ? "menu__link active" : "menu__link";
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${section.id}" class="${linkClass}">${section.dataset.nav}</a>`;
        fragment.appendChild(listItem);
      });
  
      navigationList.appendChild(fragment);
    }
  
    buildNavigationMenu();
  
    // Add functionality to distinguish the active section
    function makeSectionActive() {
      const topThreshold = window.innerHeight * 0.2;
      const bottomThreshold = window.innerHeight - topThreshold;
  
      sections.forEach((section) => {
        const rectSection = section.getBoundingClientRect();
        const isActive = rectSection.top <= bottomThreshold && rectSection.bottom >= topThreshold;
  
        section.classList.toggle("active__section", isActive);
  
        const link = document.querySelector(`.nav__link[href='#${section.id}']`);
        link?.classList.toggle("active", isActive);
      });
    }
  
    document.addEventListener("scroll", makeSectionActive);
  
    //Add functionality to scroll to sections
    function scrollToSection(event) {
        if (event.target.nodeName.toLowerCase() === "a") {
          event.preventDefault();
          const sectionId = event.target.getAttribute("href");
          if (sectionId.includes("#section")) {
            // Scroll to the selected section smoothly
            const selectedSection = document.querySelector(sectionId);
            selectedSection.scrollIntoView({ behavior: "smooth" });
      
            // Add a class or style to the selected section for the effect
            selectedSection.classList.add("selected-section");
      
            // Remove the class or style after a delay (adjust the time based on your desired effect duration)
            setTimeout(() => {
              selectedSection.classList.remove("selected-section");
            }, 1000); // Adjust this time (in milliseconds) based on your desired effect duration
          }
        }
      }
      
  
    navigationList.addEventListener("click", scrollToSection);
  
    //function to manage scrolling 
    let isScrolling;
    window.addEventListener('scroll', function () {
      navigationList.classList.add("hidden");
      clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        navigationList.classList.remove("hidden");
      }, 1000);
    });
  
   // Add a scroll-to-top button
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
  