const tooltipAll = document.querySelectorAll('.has-tooltip');
tooltipAll.forEach(function(tooltip, i) {
tooltip.addEventListener('click', function(click) {
  click.preventDefault();
  let textHTML = `<div class="tooltip" data-position="bottom" style="left: ${tooltip.offsetLeft}px;">${tooltip.title}</div>`;
  let searchTooltip = document.querySelectorAll('.tooltip');
  let searchTooltipActive = document.querySelector('.tooltip.tooltip_active');
  if (searchTooltip.length != 0) {
    searchTooltipActive.className = 'tooltip';
    searchTooltip.forEach(function(tooltipRemove) {
        tooltipRemove.remove();
    });
  } else {
    tooltip.insertAdjacentHTML('beforeEnd', textHTML);
    let searchTooltipforADD = document.querySelector('.tooltip');
    if (searchTooltipforADD.className != 'tooltip tooltip_active') {
      searchTooltipforADD.classList.add("tooltip_active");
    } else {
      searchTooltipforADD.className = 'tooltip';
    }
  }
}, false);
});
