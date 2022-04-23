const chatActiv = document.querySelector('.chat-widget');
chatActiv.addEventListener('click', function(click) {
  click.preventDefault();
  chatActiv.classList.add('chat-widget_active');
}, false);
const inputChat = document.querySelector('.chat-widget__input');
  inputChat.addEventListener('input', function() {
   const messages = document.querySelector( '.chat-widget__messages' );
   function getCurrentFormattedTime () {
      return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    document.addEventListener('keydown', (event) => {
        console.log(event.code);
    if (event.code == 'Enter') {
      if (this.value != '') {
        const myArray = ['Вам кофе с сахаром?', 'Эспрессо с сахаром!', 'Стоимость без скидки?', 'Как ваши дела?', 'У нас нет того что вы ищете!' ,'У меня приобретена Forza Horizon 3'];
        const rand = Math.floor(Math.random()*myArray.length);
        const rValue = myArray[rand];
        console.log(rValue)

     messages.innerHTML += `
       <div class="message message_client">
         <div class="message__time">${getCurrentFormattedTime ()}</div>
         <div class="message__text">
           ${this.value}
         </div>
       </div>
       <div class="message">
         <div class="message__time">${getCurrentFormattedTime ()}</div>
         <div class="message__text">
           ${rValue}
         </div>
       </div>
     `;
   }
     this.value = '';
   }
   }, false);
}, false);
