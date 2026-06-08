// scripts/curtain-menu.js
// Purpose: Detects when menu button is pressed, and opens or closes overlay menu

/* ========== VANILLA JS EVENT DELEGATION LOGIC ========== */

// 1. Listen for click actions on the Document targeted at the Open Button ID
document.addEventListener("click", function(event) {
    // 1. Listen for clicks targeted at the Open Button ID
    if (event.target.id === "openBtn") {
        document.getElementById("curtainNavigation").style.height = "100%";
    }
    
    // 2. Listen for clicks targeted at the Close Button ID
    if (event.target.id === "closeBtn") {
        document.getElementById("curtainNavigation").style.height = "0%";
    }
});