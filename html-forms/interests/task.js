function listActiv1 (listActiv2) {
  let a = listActiv2.parentElement.parentElement.parentElement;
  let b = listActiv2.parentElement.parentElement;
  if (a.className == '') {
    if (listActiv2.checked == true) {
      const listActiv3 = b.querySelectorAll('.interest__check');
      listActiv3.forEach(function(itemList2) {
        itemList2.checked = true;
      });
    } else {
      const listActiv3 = b.querySelectorAll('.interest__check');
      listActiv3.forEach(function(itemList2) {
        itemList2.checked = false;
      });
    }
  } else {
    const listActiv3 = a.querySelectorAll('.interest__check');
    if (listActiv2.checked == true) {
      let q = a.parentElement;
      q.querySelector('.interest__check').checked = true;
    } else {
      let t = Array.from(listActiv3).some(elem => elem.checked == true);
      if (t) {
        let q = a.parentElement;
        q.querySelector('.interest__check').checked = true;
      } else {
        let q = a.parentElement;
        q.querySelector('.interest__check').checked = false;
      }
    }
  }
}

const listActiv = document.querySelectorAll('.interest__check');
listActiv.forEach(function(itemList, i) {
itemList.addEventListener('click', function(click) {
  console.log(listActiv1(itemList));
}, false);
});
