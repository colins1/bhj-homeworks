function tooltipAdd (click) {
  const textHTML = `<div class="tooltip" data-position="bottom" style="left: ${click.target.offsetLeft}px;">${click.target.title}</div>`;
  click.target.insertAdjacentHTML('afterEnd', textHTML);
  click.target.nextSibling.classList.add("tooltip_active");
}

document.querySelectorAll('.has-tooltip').forEach(item => {
item.addEventListener('click', function(click) {
  click.preventDefault();
    const tooltipSearch = item.parentNode.parentNode.querySelector('.tooltip');
    if (tooltipSearch == null || tooltipSearch.className != 'tooltip tooltip_active') {
      tooltipAdd(click);
  } else {
    if (tooltipSearch.previousSibling.innerText != click.target.innerText) {
      tooltipAdd(click);
    }
    tooltipSearch.remove();
  }
}, false);
})
