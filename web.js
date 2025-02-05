// Add event listener to navbar toggle button with animation
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    // Toggle the 'show' class on the collapse element to show/hide the navbar
    const navbarCollapse = document.querySelector('.collapse');
    navbarCollapse.classList.toggle('show');

    // Add a fade-in effect to the navbar items
    navbarCollapse.querySelectorAll('.nav-link').forEach((link, index) => {
        link.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`;
    });
});

// Add event listener to contact form submit button with animation feedback
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();  // Prevent the default form submission (page reload)
    
    // Get form input values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Check for empty fields and animate feedback
    const formFeedback = document.createElement('div');
    formFeedback.classList.add('form-feedback');
    formFeedback.style.opacity = 0;
    document.querySelector('#contact').appendChild(formFeedback);

    if (name && email && message) {
        // Successful submission animation (Fade-in success message)
        formFeedback.innerHTML = 'Your message has been sent!';
        formFeedback.style.color = '#F1C40F';
        formFeedback.style.opacity = 1;
        formFeedback.style.animation = 'fadeIn 1s ease-in-out forwards';
        
        // Reset form fields after submission
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
    } else {
        // Error feedback (Shake animation for missing fields)
        formFeedback.innerHTML = 'Please fill out all fields before submitting.';
        formFeedback.style.color = '#E74C3C';
        formFeedback.style.animation = 'shake 0.5s ease-in-out';
        
        // Shake animation for each input field
        document.querySelectorAll('.form-control').forEach(input => {
            input.style.animation = 'shake 0.5s ease-in-out';
        });
    }

    // Optionally log the form submission (for debugging)
    console.log('Contact form submitted with:', { name, email, message });
});

// Portfolio card hover effect with scaling and glow
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 15px rgba(241, 196, 15, 0.7)';
        this.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
        this.style.transition = 'all 0.3s ease';
    });
});

// Animate portfolio cards sliding in as they come into view
document.addEventListener('DOMContentLoaded', function () {
    const portfolioCards = document.querySelectorAll('#portfolio .card');
    portfolioCards.forEach((card, index) => {
        card.style.animation = `slideInUp 1s ease-in-out ${index * 0.3}s forwards`;
    });
});
