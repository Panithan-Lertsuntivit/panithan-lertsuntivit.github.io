// scripts/typing.js
// Purpose: Handles the typewriter animation for the intro header.

document.addEventListener('DOMContentLoaded', function() {
    
    // Finding the element
    const container = document.getElementById('typewriter-text');
    
    // - - - SAFETY CHECK - - -
    // Stop if there isn't any text to type
    if (!container) return; 

    // Retrieving content - reading attributes from HTML
    const textToType = container.getAttribute('data-text');
    const textElement = document.getElementById('text-content');

    // Animation Settings
    const typingSpeed = 60;     // Speed in ms
    const deleteSpeed = 30;
    const pauseTime = 2000;     // Wait time in ms

    // Variables
    let charIndex = 0;          // Character index
    let isDeleting = false;     // Typing or Deleting logic variable

    // typing function / loop
    function typeWriter() {
        
        // = = = = MODE 1: DELETING = = = =
        // When deleting, there is no care about charIndex.
        if (isDeleting) {
            
            let currentHTML = textElement.innerHTML;

            // if Deletion Complete then Switch to Typing
            if (currentHTML === "") {
                isDeleting = false;
                setTimeout(typeWriter, typingSpeed);
                return; // Stop here, wait for the timeout
            }

            // Delete one character 
            textElement.innerHTML = currentHTML.slice(0, -1);
            
            // Loop again fast
            setTimeout(typeWriter, deleteSpeed);
            return; // Stop here, wait for the timeout
        }

        // = = = = MODE 2: TYPING = = = =        
        // Check if the whole string has been typed
        if (charIndex >= textToType.length) {
            return; // Stop forever
        }

        const char = textToType.charAt(charIndex);

        // Check for Pipe "|" to switch to deleting
        if (char === "|") {
            isDeleting = true;
            charIndex++; // Skip the pipe so we don't type it later
            setTimeout(typeWriter, pauseTime); // Wait 1s, then start deleting
        }
        
        // Type Normal Character
        else {
            textElement.innerHTML += char;
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start the engine
    typeWriter();
});