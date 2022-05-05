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
  }
}

const allInterestCheck = document.querySelectorAll('.interest__check');
allInterestCheck.forEach(function(interestCheck) {
interestCheck.addEventListener('click', function(click) {
  checkedInterestCheck(interestCheck);
}, false);
});
