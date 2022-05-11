const b = document.querySelector('#signin__btn')
b.onclick = function() {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
      let jsonCode = JSON.parse(xhr.response);
      console.log(jsonCode);
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')

      xhr.send()
  }
  })
}
