// scripts/update-date.js
// Purpose: For date updates for the website

// Automatic copyright year update
const copyrightEl = document.getElementById('copyright-year');
if (copyrightEl) {
    copyrightEl.textContent = new Date().getFullYear();
}

// Manually setting the update date
const lastUpdatedDate = "July 2026";

// Code finds the 'last-updated' span and inserts the date safely
const lastUpdatedEl = document.getElementById('last-updated');
if (lastUpdatedEl) {
    lastUpdatedEl.textContent = lastUpdatedDate;
}