const tooltipAll = document.querySelectorAll('.has-tooltip');
document.addEventListener('click', function(click) {
  click.preventDefault();

  if (click.target.className == 'has-tooltip') {
    let tooltipSearch = click.target.querySelector('.tooltip');
    if (tooltipSearch == null || tooltipSearch.className != 'tooltip tooltip_active') {
    allTooltip = document.querySelectorAll('.tooltip');
    let textHTML = `<div class="tooltip" data-position="bottom" style="left: ${click.target.offsetLeft}px;">${click.target.title}</div>`;
    click.target.insertAdjacentHTML('beforeEnd', textHTML);
    click.target.querySelector('.tooltip').classList.add("tooltip_active");
    if (allTooltip.length >= 1) {
      allTooltip.forEach(function(tooltipRemove) {
      if (tooltipRemove.parentNode.title != click.srcElement.title) {
          tooltipRemove.remove();
      }
      });
    }
  } else {
    tooltipSearch.remove();
  }
    }
}, false);
