document.addEventListener('DOMContentLoaded', () => {
    // Select all sections that need animation
    const sections = document.querySelectorAll('.section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // The observer callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the section comes into view
                entry.target.classList.add('visible');
                // Stop observing after it has animated once
                observer.unobserve(entry.target);
            }
        });
    };

    // Create and start the observer
    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});