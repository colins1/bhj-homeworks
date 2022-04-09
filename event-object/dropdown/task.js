const listActiv = document.querySelectorAll('.dropdown__value');
listActiv.forEach(function(itemList, i) {
itemList.addEventListener('click', function(click) {
  click.preventDefault();
  const listRename = document.querySelector('.dropdown__list');
  if(listRename.className == 'dropdown__list') {
    listRename.className = 'dropdown__list dropdown__list_active';
    const listRenameActiv = document.querySelectorAll('.dropdown__link');
    listRenameActiv.forEach(function(itemListRename, i) {
    itemListRename.addEventListener('click', function(click) {
      click.preventDefault();
      itemList.textContent = itemListRename.textContent;
      listRename.className = 'dropdown__list';
    }, false);
    });
  } else {
    listRename.className = 'dropdown__list';
  }
}, false);
});
