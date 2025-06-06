const qualityCheck = document.getElementById("qualityCheck");
let count = 1;

setInterval(() => {
  count++;
  qualityCheck.textContent = `Quality Check: ${count}`;
}, 5 * 1000);
