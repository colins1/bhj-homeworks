const btn = document.querySelectorAll('.menu_sub');
btn.forEach(function(item, i) {
item.parentElement.querySelector('.menu__link').addEventListener('click', function(e) {
  e.preventDefault();
  if (item.className == 'menu menu_sub') {
    item.className = 'menu menu_sub menu_active';
    btn.forEach(function(itemOver, iOver) {
      if (iOver != i) {
        itemOver.className = 'menu menu_sub';
      }
    });
  } else {
    item.className = 'menu menu_sub';
  }
}, false);
});
