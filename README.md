# Manipulating the DOM-Landing Page Project

## Project Description

This project involves building an interactive Landing Page with a dynamic Navigation Bar. The main focus is on manipulating the Document Object Model (DOM) using JavaScript to create an engaging user experience.

## Table of Contents
- [Instructions]
- [Download]
- [Usage]
- [Development]
- [Contribute]
- [License&Copyright]


### Instructions
The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

The following key tasks were accomplished:

1. **Building the Navigation Bar:** The `buildNavigationMenu` function was created, executed by a foreach loop, and supported by other helper methods to dynamically generate the navigation menu.

2. **Implementing Smooth Scroll Behavior:** The `scroll` event listener was utilized to achieve smooth scrolling between sections, enhancing the overall user experience.

3. **Identifying Active Section:** Functions using if statements and the `getBoundingClientRect` method were added to identify the section in the viewport and provide it with a special class (`your-active-class`). The corresponding link in the NavBar is also assigned an active class to highlight the selected section.

4. **Toggling NavBar Visibility:** A function was introduced to toggle the NavBar visibility based on user interaction with the webpage. The `scroll` event listener and the `setTimeout` method were employed for this purpose.

5. **Scroll to Top Button:** A "Scroll to Top" button was appended to the page footer using JS and CSS. This button enables users to easily return to the home page without manual scrolling.

#### Installation/Download
To install this project from git:
- Clone the repository to your GitHub account.
- Download the project as a ZIP file or clone it using Git (`git clone`).
To download the received file
- Unzip the folder by extracting it.

## Usage
After installation or downloading, unzip the file and open it in any code text editor, such as Visual Studio Code.

## Development
- **JS Version:** ES6
-**Node.js** v20.10.0

The project consists of four files:
- `css/styles.css`
- `index.html`
- `js/app.js`
- `README.md`

Each file includes specific modifications and comments above each step of the modification. The CSS file underwent changes to achieve the current screen interface style, with responsiveness on all screen types.

## Contribute
- Udacity
- MDN Documents

## License & Copyright
© Udacity - Modified By Parminder Kaur
