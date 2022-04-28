document.addEventListener('submit', (event) => {
  event.preventDefault()
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('readystatechange', () => {
    const progress = document.getElementById( 'progress' );
    progress.value += 0.1;
  })

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')

  xhr.send()

}, false);
