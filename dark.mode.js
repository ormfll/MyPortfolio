// dark-mode.js

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener for dark mode toggle button
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    darkModeToggle.addEventListener('click', toggleDarkMode);
});

