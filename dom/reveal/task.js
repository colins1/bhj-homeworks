document.addEventListener('scroll', function(event) {
  let x = document.documentElement.clientWidth  / 2;
  let y = document.documentElement.clientHeight / 2;
  let elem = document.elementFromPoint(x, y)
  if (elem.className == 'reveal') {
    elem.className = 'reveal reveal_active';
  }
});
