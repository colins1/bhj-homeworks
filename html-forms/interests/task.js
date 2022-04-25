function checkedInterestCheck (input) {
  let ul = input.closest('ul');
  let li = input.closest('li');
  if (ul.className == '') {
    if (input.checked == true) {
      const parentChekbox = li.querySelectorAll('.interest__check');
      parentChekbox.forEach(function(chekbox) {
        chekbox.checked = true;
      });
    } else {
      const parentChekbox = li.querySelectorAll('.interest__check');
      parentChekbox.forEach(function(chekbox) {
        chekbox.checked = false;
      });
    }
  } else {
    const parentChekbox = ul.querySelectorAll('.interest__check');
    if (input.checked == true) {
      let parentUl = ul.parentElement;
      parentUl.querySelector('.interest__check').checked = true;
    } else {
      let tryeChecked = Array.from(parentChekbox).some(elem => elem.checked == true);
      if (tryeChecked) {
        let parentUl = ul.parentElement;
        parentUl.querySelector('.interest__check').checked = true;
      } else {
        let parentUl = ul.parentElement;
        parentUl.querySelector('.interest__check').checked = false;
      }
    }
  }
}

const allInterestCheck = document.querySelectorAll('.interest__check');
allInterestCheck.forEach(function(interestCheck) {
interestCheck.addEventListener('click', function(click) {
  checkedInterestCheck(interestCheck);
}, false);
});
