(() => {
    const menuLinks = document.querySelectorAll('.menu__link');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const menuItem = link.closest('.menu__item');
        if (!menuItem) return;
  
        const subMenu = menuItem.querySelector('.menu_sub');
  
        if (subMenu) {
          event.preventDefault();

          const navContainer = link.closest('.menu');
  
          if (navContainer) {
            const openSubMenus = navContainer.querySelectorAll('.menu_sub.menu_active');
            openSubMenus.forEach(openMenu => {
              if (openMenu !== subMenu) {
                openMenu.classList.remove('menu_active');
              }
            });
          } else {
            document.querySelectorAll('.menu_sub.menu_active').forEach(openMenu => {
              if (openMenu !== subMenu) {
                openMenu.classList.remove('menu_active');
              }
            });
          }
  
          subMenu.classList.toggle('menu_active');

          return false;
        }
      });
    });
  })();
  