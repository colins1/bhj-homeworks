const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let jsonCode = Object.entries(JSON.parse(xhr.response))[1][1];
    document.querySelector('.poll__title').textContent = jsonCode.title;
    jsonCode.answers.forEach(function(textButton) {
    let parent = document.querySelector('#poll__answers');

    let buttons = document.createElement('button');
    buttons.textContent = textButton
    buttons.className = 'poll__answer'

    parent.appendChild(buttons);
    });


}
})
const btn = document.querySelector('#poll__answers');
  btn.addEventListener('click', (event) => {
    if (event.target.localName == 'button') {
      alert(`«Спасибо, ваш голос засчитан!»`)
    }
  }, false);
xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.send()
