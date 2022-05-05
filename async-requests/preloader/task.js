const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let jsonCode = JSON.parse(xhr.response);
    const img = document.querySelector('img');
    img.classList.remove('loader_active');
    Object.entries(jsonCode.response.Valute).forEach(function(valute) {

    let parent = document.querySelector('#items');
    let divsItem = document.createElement('div');
    divsItem.className = 'item'
    let divItemCode = document.createElement('div');
    divItemCode.className = 'item__code'
    divItemCode.textContent = valute[1].CharCode
    let divItemValue = document.createElement('div');
    divItemValue.className = 'item__value'
    divItemValue.textContent = valute[1].Value
    let divItemCurrency = document.createElement('div')
    divItemCurrency.className = 'item__currency'
    divItemCurrency.textContent = 'руб.'

    parent.appendChild(divsItem);
    divsItem.appendChild(divItemCode);
    divsItem.appendChild(divItemValue);
    divsItem.appendChild(divItemCurrency);
  });
}
})



xhr.open('POST', 'https://netology-slow-rest.herokuapp.com')

xhr.send()
