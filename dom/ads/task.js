const text = document.querySelectorAll('.rotator__case');
let i = 0;
  setInterval(allText = () => {
    if (i != text.length - 1) {
    if (i != 0) {
      text[i].className = 'rotator__case rotator__case_active';
      text[i - 1].className = 'rotator__case';
      i++;
    } else {
      text[text.length - 1].className = 'rotator__case';
      text[i].className = 'rotator__case rotator__case_active';
      i = i + 1;
    }
  } else {
    text[i - 1].className = 'rotator__case';
    text[i].className = 'rotator__case rotator__case_active';
    i = 0;
  }
  text[i].style.color = text[i].getAttribute('data-color')
}, text[i].getAttribute('data-speed'));
