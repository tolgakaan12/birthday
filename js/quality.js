const qualityCheck = document.getElementById("qualityCheck");

// Try to get the saved count from localStorage, or start from 1
let count = parseInt(localStorage.getItem("qualityCount")) || 1;

// Show the current count immediately
qualityCheck.textContent = `Quality Check: ${count}`;

// Update every 5 minutes (or 5 seconds for demo/testing)
setInterval(() => {
  count++;
  qualityCheck.textContent = `Quality Check: ${count}`;
  localStorage.setItem("qualityCount", count);
}, 5 * 1000); // or use 5 * 60 * 1000 for 5 minutes
