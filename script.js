document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Reveal Animation
    const sections = document.querySelectorAll('.section');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });

    // Random Email Generator
    function generateRandomEmail() {
        const names = ['john', 'jane', 'alex', 'sam', 'chris', 'morgan', 'taylor', 'jordan', 'casey', 'jamie'];
        const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'example.com'];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomNumber = Math.floor(Math.random() * 1000);
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        
        return `${randomName}${randomNumber}@${randomDomain}`;
    }

    const emailElement = document.getElementById('random-email');
    if (emailElement) {
        const randomEmail = generateRandomEmail();
        emailElement.textContent = randomEmail;
        emailElement.href = `mailto:${randomEmail}`;
    }
});

