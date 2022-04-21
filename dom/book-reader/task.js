const listActiv = document.querySelectorAll('.font-size');
listActiv.forEach(function(itemList, i) {
itemList.addEventListener('click', function(click) {
  click.preventDefault();
  const listClassRename = document.querySelector('.book');
  itemList.classList.add('font-size_active');
  listActiv.forEach((elementRemove, iremove) => {
    if (i != iremove) {
      if (iremove == 0) {
        elementRemove.className = 'font-size font-size_small';
      } else if(iremove == 1) {
        elementRemove.className = 'font-size';
      } else {
        elementRemove.className = 'font-size font-size_big';
      }
    }
  });
  if (i == 0) {
    listClassRename.className = 'book book_fs-small';
  } else if(i == 1) {
    listClassRename.className = 'book';
  } else {
    listClassRename.className = 'book book_fs-big';
  }
}, false);
});
