const tasksList = document.querySelector('.tasks');
const taskList = document.querySelector('.tasks__list');
const input = document.querySelector('input');

function addContent (input, taskList) {
  if (input.value.trim() != '') {
    let textHTML = `<div class="task">
                       <div class="task__title">
                         ${input.value.trim()}
                       </div>
                       <a href="#" class="task__remove">&times;</a>
                   </div>`;
    taskList.insertAdjacentHTML('afterBegin', textHTML);
    input.value = '';
  }
}
tasksList.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();
    if (eventClick.target.className == 'task__remove') {
      eventClick.path[1].remove()
    }
    if (eventClick.target.className =='tasks__add') {
      addContent(input, taskList);
    }
}, false);

document.addEventListener('keydown', (eventKeydown) => {
  if (eventKeydown.code == 'Enter') {
    addContent(input, taskList);
  }
}, false);
