document.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();
    if (eventClick.srcElement.className == 'task__remove') {
      eventClick.path[1].remove()
    }
}, false);

const tasksList = document.querySelector('.tasks__list');


const button = document.querySelector('button');
button.addEventListener('click', (buttonEvent) => {
  let input = document.querySelector('input');
  if (input.value != '') {
    let textHTML = `<div class="task">
                       <div class="task__title">
                         ${input.value}
                       </div>
                       <a href="#" class="task__remove">&times;</a>
                   </div>`;
   tasksList.insertAdjacentHTML('afterBegin', textHTML);

   input.value = '';
  }

}, false);

document.addEventListener('keydown', (eventKeydown) => {
  let input = document.querySelector('input');
  if (eventKeydown.code == 'Enter') {
    if (input.value != '') {
      let textHTML = `<div class="task">
                      <div class="task__title">
                        ${input.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>
                  </div>`;
      tasksList.insertAdjacentHTML('afterBegin', textHTML);
    }
    input.value = '';
  }

}, false);
