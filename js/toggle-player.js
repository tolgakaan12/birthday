const toggleBtn = document.getElementById('togglePlayerBtn');
const playerBar = document.getElementById('playerBar');
const playerContent = document.getElementById('playerContent');

let isVisible = true;
toggleBtn.textContent = isVisible ? '▼' : '▲';
toggleBtn.style.top = '-24px';


toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;

  playerBar.classList.toggle('player-hidden', !isVisible);
  toggleBtn.textContent = isVisible ? '▼' : '▲';

  toggleBtn.style.top = isVisible ? '-24px' : '0px';
});
s