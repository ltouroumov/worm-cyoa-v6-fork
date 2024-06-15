// theme-switcher.js

// Default project file
let projectFile = 'project.json';

// Create a button and bar for theme switching
const themeSwitcherDiv = document.getElementById('theme-switcher');

// Style the themeSwitcherDiv with Bootstrap classes
themeSwitcherDiv.classList.add('position-fixed', 'top-0', 'start-0', 'm-3');
themeSwitcherDiv.style.zIndex = 10000;
const button = document.createElement('button');
button.innerHTML = '☰';
button.classList.add('btn', 'dropdown-toggle');

const themeBar = document.createElement('div');
themeBar.classList.add('dropdown-menu', 'p-2', 'bg-white', 'shadow');

// Create theme options with Bootstrap classes
const autoOption = document.createElement('button');
autoOption.innerHTML = 'Auto';
autoOption.classList.add('btn', 'btn-light', 'w-100', 'mb-1');

const lightOption = document.createElement('button');
lightOption.innerHTML = 'Light';
lightOption.classList.add('btn', 'btn-light', 'w-100', 'mb-1');

const darkOption = document.createElement('button');
darkOption.innerHTML = 'Dark';
darkOption.classList.add('btn', 'btn-light', 'w-100');

// Add theme options to theme bar
themeBar.appendChild(autoOption);
themeBar.appendChild(lightOption);
themeBar.appendChild(darkOption);

// Add button and theme bar to the theme switcher div
themeSwitcherDiv.appendChild(button);
themeSwitcherDiv.appendChild(themeBar);

// Event listener to toggle the display of theme bar
button.addEventListener('click', () => {
    themeBar.classList.toggle('show');
});

// Function to set the project file and highlight the selected option
function setProjectFile(fileName) {
    projectFile = fileName;
    document.cookie = `theme=${fileName};path=/`;
    highlightSelectedOption();
    updateButtonAppearance();
    location.reload();
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Function to apply system appearance preference
function applySystemPreference() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    projectFile = prefersDarkScheme.matches ? 'project.json' : 'project_light.json';
    setProjectFile(projectFile);
}

// Function to highlight the selected option
function highlightSelectedOption() {
    autoOption.classList.remove('bg-dark', 'text-white');
    lightOption.classList.remove('bg-dark', 'text-white');
    darkOption.classList.remove('bg-dark', 'text-white');
    
    if (projectFile === 'project_light.json') {
        lightOption.classList.add('bg-dark', 'text-white');
    } else if (projectFile === 'project.json') {
        darkOption.classList.add('bg-dark', 'text-white');
    } else {
        autoOption.classList.add('bg-dark', 'text-white');
    }
}

// Function to update the button appearance based on the selected theme
function updateButtonAppearance() {
    button.classList.remove('btn-light', 'btn-dark');
    
    if (projectFile === 'project_light.json') {
        button.classList.add('btn-light');
    } else if (projectFile === 'project.json') {
        button.classList.add('btn-dark');
    } else {
        // Default appearance when auto is selected, you can adjust it as needed
        button.classList.add('btn-light');
    }
}

// Event listeners for theme options
autoOption.addEventListener('click', () => {
    applySystemPreference();
});

lightOption.addEventListener('click', () => {
    setProjectFile('project_light.json');
});

darkOption.addEventListener('click', () => {
    setProjectFile('project.json');
});

// Apply cookie preference or system preference on load
const themeCookie = getCookie('theme');
if (themeCookie) {
    projectFile = themeCookie;
} else {
    applySystemPreference();
}
highlightSelectedOption();
updateButtonAppearance();
