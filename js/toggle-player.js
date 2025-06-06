const toggleBtn = document.getElementById('togglePlayerBtn');
const playerContent = document.getElementById('playerContent');

let isVisible = true;

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;

  // Toggle visibility
  playerContent.style.display = isVisible ? 'block' : 'none';

  // Change arrow direction
  toggleBtn.textContent = isVisible ? '▼' : '▲';

  // Move button down when hidden
  toggleBtn.style.top = isVisible ? '-24px' : '8px';
});
