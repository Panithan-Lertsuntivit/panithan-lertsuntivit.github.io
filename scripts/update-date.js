// scripts/update-date.js
// Purpose: For date updates for the website

// Automatic copyright year update
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// Manually setting the update date
const lastUpdatedDate = "June 2026";

// Code finds the 'last-updated' span and inserts the date
document.getElementById('last-updated').textContent = lastUpdatedDate;