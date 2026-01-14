// scripts/fade-in.js
// Purpose: Detects when elements scroll into view and triggers a fade-in animation.

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Select all elements that we want to animate
    // (We will add the class 'fade-in-section' to HTML elements later)
    const faders = document.querySelectorAll('.fade-in-section');

    // 2. Set up the Observer Options
    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the item is visible
        rootMargin: "0px 0px -50px 0px" // Optional: Wait until it's slightly up the screen
    };

    // 3. Create the Observer
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            
            // If the element is NOT intersecting (not on screen), do nothing
            if (!entry.isIntersecting) {
                return;
            } 
            
            // If it IS on screen:
            else {
                // Add the class that triggers CSS animation
                entry.target.classList.add('is-visible');
                
                // Stop watching this specific element (animate only once)
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // 4. Start watching all faders
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});