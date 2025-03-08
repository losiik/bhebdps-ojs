(() => {
    function getHole(index) {
      return document.getElementById(`hole${index}`);
    }
  
    function resetStats() {
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
    }

    function clickHandler(event) {
      const hole = event.currentTarget;
      if (hole.classList.contains('hole_has-mole')) {
        let deadCounter = Number(document.getElementById('dead').textContent);
        deadCounter++;
        document.getElementById('dead').textContent = deadCounter;

        if (deadCounter === 10) {
          alert('Победа!');
          resetStats();
        }
      } else {
        let lostCounter = Number(document.getElementById('lost').textContent);
        lostCounter++;
        document.getElementById('lost').textContent = lostCounter;

        if (lostCounter === 5) {
          alert('Поражение!');
          resetStats();
        }
      }
    }
  
    for (let i = 1; i <= 9; i++) {
      const hole = getHole(i);
      if (hole) {
        hole.addEventListener('click', clickHandler);
      }
    }
  })();