const images = document.querySelectorAll('.slider__item');
const slides = document.querySelectorAll('.slider__arrow');
slides.forEach(function(slide, i) {
  slide.addEventListener('click', function(click) {
  click.preventDefault();
      const index = Array.from(images).findIndex(image => image.className == 'slider__item slider__item_active');
  if(i == 0) {
    if (index == 0) {
      images[index].className = 'slider__item';
      images[images.length - 1].className = 'slider__item slider__item_active';
    } else {
      images[index].className = 'slider__item';
      images[index - 1].className = 'slider__item slider__item_active';
    }
  } else {
    if (index == images.length - 1) {
      images[index].className = 'slider__item';
      images[0].className = 'slider__item slider__item_active';
    } else {
      images[index].className = 'slider__item';
      images[index + 1].className = 'slider__item slider__item_active';
    }
  }
  }, false);
});
