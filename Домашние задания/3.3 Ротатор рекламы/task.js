(() => {
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      if (cases.length === 0) return;
  
      let currentIndex = 0;
      cases.forEach((item, index) => {
        if (item.classList.contains('rotator__case_active')) {
          currentIndex = index;
        }
      });

      const rotate = () => {
        cases[currentIndex].classList.remove('rotator__case_active');
  
        currentIndex = (currentIndex + 1) % cases.length;
  
        const activeCase = cases[currentIndex];
        activeCase.classList.add('rotator__case_active');

        if (activeCase.dataset.color) {
          activeCase.style.color = activeCase.dataset.color;
        }

        const speed = activeCase.dataset.speed ? parseInt(activeCase.dataset.speed) : 1000;
  
        setTimeout(rotate, speed);
      };

      const initialSpeed = cases[currentIndex].dataset.speed ? parseInt(cases[currentIndex].dataset.speed) : 1000;
      setTimeout(rotate, initialSpeed);
    });
  })();
  