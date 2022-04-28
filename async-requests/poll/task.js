const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let jsonCode = Object.entries(JSON.parse(xhr.response))[1][1];
    document.querySelector('.poll__title').textContent = jsonCode.title;
    jsonCode.answers.forEach(function(textButton) {
    let textHTML = `<button class="poll__answer">
                      ${textButton}
                    </button>`;
    let pollButtons = document.querySelector('#poll__answers');
    pollButtons.insertAdjacentHTML('afterBegin', textHTML);
    });
}
})
const btn = document.querySelector('#poll__answers');
  btn.addEventListener('click', (event) => {
    if (event.target.localName == 'button') {
      alert(`«Спасибо, ваш голос засчитан!» вы выбрали ${event.target.innerText}`)
    }
  }, false);
xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php')

xhr.send()
