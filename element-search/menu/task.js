const menu = document.querySelectorAll('.menu_sub');
menu.forEach(function(item, i) {
item.parentElement.querySelector('.menu__link').addEventListener('click', function(click) {
  click.preventDefault();
  if (item.className == 'menu menu_sub') {
    item.className = 'menu menu_sub menu_active';
    menu.forEach(function(itemOver, iOver) {
      if (iOver != i) {
        itemOver.className = 'menu menu_sub';
      }
    });
  } else {
    item.className = 'menu menu_sub';
  }
}, false);
});
