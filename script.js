document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll & Active Link highlighting ---
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('main section');

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {} // Add offset for header height

        navLinks.forEach((link) => link.classList.remove('active'));

        // Check if the corresponding link exists before adding the class
        if (navLinks[index]) {
             navLinks[index].classList.add('active');
        }
    }

    // Initial check in case the page loads on a specific section
    changeActiveLink();
    // Add event listener for scroll
    window.addEventListener('scroll', changeActiveLink);


    // --- Intersection Observer for Scroll Animations ---
    const scrollSections = document.querySelectorAll('.scroll-section');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible if you don't want animation to repeat
                // observer.unobserve(entry.target);
            }
            // Optional: Remove 'visible' class if you want animation to repeat when scrolling back up
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    scrollSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Optional: Contact Form Handler (Basic Example) ---
    // const contactForm = document.getElementById('contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (e) => {
    //         e.preventDefault(); // Prevent actual form submission
    //         alert('Thank you for your message! (This is a demo - no email sent)');
    //         // Here you would typically send data to a backend or service
    //         contactForm.reset(); // Clear the form
    //     });
    // }

});

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll & Active Link highlighting (remains the same) ---
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('main section');

    function changeActiveLink() {
        let index = sections.length;
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
             navLinks[index].classList.add('active');
        }
    }
    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);


    // --- Intersection Observer for Scroll Animations (remains the same) ---
    const scrollSections = document.querySelectorAll('.scroll-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: uncomment to animate only once
            }
            // else { entry.target.classList.remove('visible'); } // Optional: uncomment to re-animate
        });
    };
    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    scrollSections.forEach(section => sectionObserver.observe(section));


    // --- Contact Form Handler (Simulation) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default browser form submission

            // --- IMPORTANT ---
            // This is a FRONT-END ONLY simulation. No email is actually sent.
            // To send emails, you'd need a backend server or a service like
            // Formspree, Netlify Forms, EmailJS, etc.
            // --------------------

            // Simulate sending (replace with actual logic if using a service)
            formStatus.textContent = 'Sending...';
            formStatus.className = ''; // Reset classes

            // Simulate a delay (like a network request)
            setTimeout(() => {
                // Simulate success
                formStatus.textContent = 'Message sent successfully! (Demo)';
                formStatus.classList.add('success');
                contactForm.reset(); // Clear the form fields

                // Hide the message after a few seconds
                 setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                 }, 5000); // Hide after 5 seconds

                // --- OR ---
                // Simulate an error (uncomment to test error state)
                // formStatus.textContent = 'Failed to send message. Please try again. (Demo)';
                // formStatus.classList.add('error');

            }, 1500); // Simulate 1.5 second delay
        });
    }
});