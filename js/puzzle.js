let hasStarted = false;


function swapTiles(cell1, cell2) {
  let temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      let row2 = Math.floor(Math.random() * 3 + 1);
      let col2 = Math.floor(Math.random() * 3 + 1);
      swapTiles("cell" + row + col, "cell" + row2 + col2);
    }
  }
  document.getElementById("winMessage").textContent = "";
  hasStarted = true; // 🟢 Enable win-checking after this
}

function clickTile(row, col) {
  const current = "cell" + row + col;
  const tile = document.getElementById(current).className;
  if (tile === "tile tile9") return;

  const directions = [
    [0, 1], [0, -1],
    [1, 0], [-1, 0]
  ];

  for (let [dr, dc] of directions) {
    let r = row + dr, c = col + dc;
    if (r >= 1 && r <= 3 && c >= 1 && c <= 3) {
      let neighbor = document.getElementById("cell" + r + c);
      if (neighbor.className.includes("tile9")) {
        swapTiles(current, "cell" + r + c);

        if (hasStarted) checkWin(); // 🛑 Only check win if game started

        return;
      }
    }
  }
}


function checkWin() {
  const order = [
    "tile tile1", "tile tile2", "tile tile3",
    "tile tile4", "tile tile5", "tile tile6",
    "tile tile7", "tile tile8", "tile tile9"
  ];

  for (let i = 0; i < 9; i++) {
    const row = Math.floor(i / 3) + 1;
    const col = (i % 3) + 1;
    const cell = document.getElementById("cell" + row + col);
    if (cell.className !== order[i]) return;
  }

  document.getElementById("winMessage").textContent = "🎉 Tebrikler, 2 saatlik uykulu hangover Memo kazandınız!";
}
