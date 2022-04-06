/*
<ul class="menu menu_main">
       <li class="menu__item">
           <a href="https://netology.ru/" class="menu__link">Главная</a>
       </li>
       <li class="menu__item">
           <a href="" class="menu__link">О компании</a>
           <ul class="menu menu_sub">
               <li class="menu__item">
                   <a href="https://netology.ru/clients" class="menu__link">Клиенты</a>
               </li>
               <li class="menu__item">
                   <a href="https://netology.ru/service" class="menu__link">Обслуживание</a>
               </li>
               <li class="menu__item">
                   <a href="https://netology.ru/wearecool" class="menu__link">Награды</a>
               </li>
           </ul>
       </li>
       <li class="menu__item">
           <a href="" class="menu__link">Услуги</a>
           <ul class="menu menu_sub">
               <li class="menu__item">
                   <a href="https://netology.ru/learn" class="menu__link">Обучение</a>
               </li>
               <li class="menu__item">
                   <a href="https://netology.ru/consult" class="menu__link">Консультации</a>
               </li>
           </ul>
       </li>
       <li class="menu__item">
           <a href="https://netology.ru/contacts" class="menu__link">Контакты</a>
       </li>
   </ul>
*/
   const liveModal = document.getElementsByClassName('menu__item');
   const a = liveModal[1].getElementsByClassName('menu_sub'));
   liveModal.onclick = function() {
     a.className = 'menu menu_sub menu_active';
   }
