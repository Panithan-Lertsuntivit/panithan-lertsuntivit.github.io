// scripts/curtain-menu.js
// Purpose: Detects when menu button is pressed, and opens or closes overlay menu

/* ==========================================================================
   BULLETPROOF EVENT DELEGATION LOGIC FOR MODULAR COMPONENTS
   ========================================================================== */

// 1. Listen for click actions on the Document targeted at the Open Button ID
$(document).on("click", "#openBtn", function() {
    // Target the injected overlay menu and roll height down to full viewport
    $("#curtainNavigation").css("height", "100%");
});

// 2. Listen for click actions on the Document targeted at the Close Button ID
$(document).on("click", "#closeBtn", function() {
    // Snap height configurations back up out of frame
    $("#curtainNavigation").css("height", "0%");
});