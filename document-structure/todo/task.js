document.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();
    if (eventClick.srcElement.className == 'task__remove') {
      eventClick.path[1].remove()
    }
}, false);

const tasksInput = document.querySelector('.tasks__input');
tasksInput.addEventListener('input', function() {
  const tasksList = document.querySelector('.tasks__list');
  const button = document.querySelector('button');
  button.addEventListener('click', (buttonEvent) => {
    if (this.value != '') {
      console.log(this.value);
      let textHTML = `<div class="task">
                         <div class="task__title">
                           ${this.value}
                         </div>
                         <a href="#" class="task__remove">&times;</a>
                     </div>`;
     tasksList.insertAdjacentHTML('afterBegin', textHTML);
     this.value = '';
    }
  });
  document.addEventListener('keydown', (eventKeydown) => {
    if (eventKeydown.code == 'Enter') {
      if (this.value != '') {
        let textHTML = `<div class="task">
                        <div class="task__title">
                          ${this.value}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                    </div>`;
        tasksList.insertAdjacentHTML('afterBegin', textHTML);
      }
       this.value = '';
    }
  }, false);
}, false);
