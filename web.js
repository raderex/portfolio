// Add event listener to navbar toggle button
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.collapse').classList.toggle('show');
});

// Add event listener to contact form submit button
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log('Contact form submitted!');
});