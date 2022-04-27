/*document.addEventListener('keydown', (event) => {
            if (this.currentSymbol.textContent == event.key) {
	            this.success();
            } else {
	            this.fail();
            }
        });*/

function eva(ev) {
  ev.remove();
}
document.addEventListener('click', (event1) => {
  if (event1.srcElement.className == 'task__remove') {
    let n = event1.path[1]
    n.remove()
  }
  console.log(event1)
}, false);



const tooltipAll = document.querySelector('.tasks__input');
tooltipAll.addEventListener('input', function() {
  const tooltipAll11 = document.querySelector('button');
  tooltipAll11.addEventListener('click', (event1) => {
            if (this.value != '') {
              console.log(this.value);
              let textHTML = `<div class="task">
                                 <div class="task__title">
                                   ${this.value}
                                 </div>
                                 <a href="#" class="task__remove">&times;</a>
                             </div>`;
               const tooltipAll1 = document.querySelector('.tasks__list');
               tooltipAll1.insertAdjacentHTML('afterBegin', textHTML);
               this.value = '';
            }
  });
  document.addEventListener('keydown', (event) => {



  if (event.code == 'Enter') {
    if (this.value != '') {
   let textHTML = `<div class="task">
                      <div class="task__title">
                        ${this.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                  </div>`;
    const tooltipAll1 = document.querySelector('.tasks__list');
    tooltipAll1.insertAdjacentHTML('afterBegin', textHTML);
 }
   this.value = '';
 }

 }, false);
}, false);
