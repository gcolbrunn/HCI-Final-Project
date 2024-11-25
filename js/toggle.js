// Used for toggle button between good/bad examples page

// Get the toggle button
const toggleButton = document.querySelector('.toggle-button');

// Get the main content area
const mainContent = document.querySelector('.main-content');

// Add click event listener to toggle button
toggleButton.addEventListener('click', function() {
    // Toggle the green-theme class on main-content
    mainContent.classList.toggle('green-theme');
});
