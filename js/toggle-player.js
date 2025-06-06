const toggleBtn = document.getElementById('togglePlayerBtn');
const playerBar = document.getElementById('playerBar');
const playerContent = document.getElementById('playerContent');

let isVisible = true;

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;

  playerBar.classList.toggle('player-hidden', !isVisible);
  toggleBtn.textContent = isVisible ? '▼' : '▲';

  // Move the toggle button position
  toggleBtn.style.top = isVisible ? '-24px' : '0px';
});
