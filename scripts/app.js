    const toggleButton = document.querySelector('.theme-switch input[type="checkbox"]');

    // Load the theme from local storage if available
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('light', currentTheme === 'light');
    }

    toggleButton.addEventListener('click', () => {
        // Toggle the class on the body
        document.body.classList.toggle('light');

        // Save the current theme in local storage
        const theme = document.body.classList.contains('light') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Update button text
        toggleButton.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
    });
