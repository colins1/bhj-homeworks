const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let jsonCode = JSON.parse(xhr.response);
    const img = document.querySelector('img');
    img.classList.remove('loader_active');
    Object.entries(jsonCode.response.Valute).forEach(function(valute) {
      console.log(valute)
    let textHTML = `<div class="item">
                    <div class="item__code">
                    ${valute[1].CharCode}
                    </div>
                    <div class="item__value">
                    ${valute[1].Value}
                    </div>
                    <div class="item__currency">
                    руб.
                    </div></div>`;
    let blockItems = document.querySelector('#items');
    blockItems.insertAdjacentHTML('afterBegin', textHTML);
  });
}
})

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com')

xhr.send()
