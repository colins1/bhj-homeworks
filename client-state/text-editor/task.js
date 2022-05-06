   const messages = document.querySelector( '#editor' );

   if (localStorage.getItem('key')) {
     messages.textContent = localStorage.getItem('key')
   }
    messages.addEventListener('keydown', (event) => {
      localStorage.setItem('key', messages.value)
   }, false);
