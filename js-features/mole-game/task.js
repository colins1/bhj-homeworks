function getHole (index) {
  const hole = document.getElementById(`hole${index}`);
    hole.onclick = function() {
      if (hole.className.includes( 'hole_has-mole' )) {
        const dead = document.getElementById("dead");
        if (Number(dead.textContent) == 9) {
          dead.textContent = 0;
          lost.textContent = 0;
          return alert("Вы победили!");
        }
        return dead.textContent = Number(dead.textContent) + 1;
      } else {
        const lost = document.getElementById("lost");
        if (Number(lost.textContent) == 9) {
          dead.textContent = 0;
          lost.textContent = 0;
          return alert("Вы проиграли!");
        }
        return lost.textContent = Number(lost.textContent) + 1;
      }
  };
}

for (let i = 1; i < 10; i++) {
  getHole(i);
}
