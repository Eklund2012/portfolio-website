/*
TODO make light mode look good
const toggleButton = document.querySelector('.theme-switch input[type="checkbox"]');
const socialIcons = document.querySelectorAll('.social-icon');

// Load the theme from local storage if available
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.toggle('light', currentTheme === 'light');
    updateIconSources(currentTheme);
}

toggleButton.addEventListener('click', () => {
    // Toggle the theme on the body
    document.body.classList.toggle('light');
    
    // Get the new theme
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    
    // Save the theme to local storage
    localStorage.setItem('theme', theme);
    
    // Update icon sources based on the theme
    updateIconSources(theme);
});

// Function to update icon sources based on the theme
function updateIconSources(theme) {
    socialIcons.forEach(icon => {
        icon.src = theme === 'light' ? icon.dataset.lightSrc : icon.dataset.darkSrc;
    });
}*/

function toggleSection(contentId) {
    const content = document.getElementById(contentId);

    // Toggle the 'open' class only on mobile
    if (window.innerWidth <= 768) {
        content.classList.toggle('open');
    }
}


