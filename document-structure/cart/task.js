
document.querySelectorAll('.product__quantity-control_inc').forEach(item => {
item.addEventListener('click', (event) => {
    item.parentElement.querySelector('.product__quantity-value').textContent++;
}, false);
})

document.querySelectorAll('.product__quantity-control_dec').forEach(item => {
item.addEventListener('click', (event) => {
  if (item.parentElement.querySelector('.product__quantity-value').textContent > 1) {
    item.parentElement.querySelector('.product__quantity-value').textContent--;
  }
}, false);
})

document.querySelectorAll('.product__add').forEach(item => {
item.addEventListener('click', (event) => {
    const cartProducts = document.querySelector('.cart__products');
    let textHTML = `<div class="cart__product" data-id="${event.target.closest('.product').dataset.id}">
                      <img class="cart__product-image" src="${event.target.closest('.product').querySelector('img').currentSrc}">
                      <div class="cart__product-count">${event.target.closest('.product').querySelector('.product__quantity-value').textContent}</div>
                    </div>`;
    const cartProduct = document.querySelectorAll('.cart__product');
    if (cartProduct.length != 0) {
        const as = Array.from(cartProduct).find((element) => {if (element.dataset.id == event.target.closest('.product').dataset.id) {return element}});
        if (as != undefined) {
          let b = Number(as.querySelector('.cart__product-count').textContent.trim())
          let c = Number(event.target.closest('.product').querySelector('.product__quantity-value').textContent.trim())
          as.querySelector('.cart__product-count').textContent = b + c
        } else {
          cartProducts.insertAdjacentHTML('afterBegin', textHTML);
        }
    } else {
      cartProducts.insertAdjacentHTML('afterBegin', textHTML);
    }
}, false);
})
