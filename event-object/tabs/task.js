const list = document.querySelectorAll('.tab');
const listContent = document.querySelectorAll('.tab__content');
list.forEach(function(itemList, i) {
  itemList.addEventListener('click', function(click) {
  click.preventDefault();
  list[i].className = 'tab tab_active';
  listContent[i].className = 'tab__content tab__content_active';
  list.forEach(function(listOut, iout) {
    if(iout != i){
      list[iout].className = 'tab';
      listContent[iout].className = 'tab__content';
    }
  });
}, false);
});
