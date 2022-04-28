document.addEventListener('click', (event) => {
  if (event.srcElement.className == 'product__quantity-control product__quantity-control_dec') {
    if (event.srcElement.parentElement.querySelector('.product__quantity-value').textContent > 1) {
      event.srcElement.parentElement.querySelector('.product__quantity-value').textContent--;
    }
  } else if (event.srcElement.className == 'product__quantity-control product__quantity-control_inc') {
    event.srcElement.parentElement.querySelector('.product__quantity-value').textContent++;
  }
  if (event.srcElement.className == 'product__add') {
    const cartProducts = document.querySelector('.cart__products');
    let textHTML = `<div class="cart__product" data-id="${event.srcElement.closest('.product').dataset.id}">
                      <img class="cart__product-image" src="${event.srcElement.closest('.product').querySelector('img').currentSrc}">
                      <div class="cart__product-count">${event.srcElement.closest('.product').querySelector('.product__quantity-value').textContent}</div>
                    </div>`;

    const cartProduct = document.querySelectorAll('.cart__product');

    if (cartProduct.length != 0) {
      let check = 0
      cartProduct.forEach(function(cartProductElements) {
        if (cartProductElements.dataset.id == event.srcElement.closest('.product').dataset.id) {
          console.log(cartProductElements.querySelector('.cart__product-count'));
          let b = Number(cartProductElements.querySelector('.cart__product-count').textContent.trim())
          let c = Number(event.srcElement.closest('.product').querySelector('.product__quantity-value').textContent.trim())
          cartProductElements.querySelector('.cart__product-count').textContent = b + c
          check++
        }
      });
      if (check == 0) {
        cartProducts.insertAdjacentHTML('afterBegin', textHTML);
      }
    } else {
      cartProducts.insertAdjacentHTML('afterBegin', textHTML);
    }
  }
}, false);
