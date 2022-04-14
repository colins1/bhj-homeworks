/*<div class="tabs" id="tabs1">
        <div class="tab__navigation">
            <div class="tab tab_active">
                Главная
            </div>
            <div class="tab">
                Обо мне
            </div>
            <div class="tab">
                Контакты
            </div>
        </div>
        <div class="tab__contents">
            <div class="tab__content tab__content_active">
                <h2>Главная</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem facilis, animi provident sint. Incidunt ea nostrum, nam nulla cupiditate consectetur, alias et labore, porro officia laborum. Velit placeat ipsa atque.</div>
                <div>Alias rerum repellendus minima error, sit facere. Nulla ipsa doloremque quae libero perspiciatis doloribus ducimus ad optio saepe cum magni minus voluptas aut magnam, accusantium eveniet, quo nesciunt sit quam.</div>
                <div>Magni delectus laborum laboriosam dicta quibusdam, culpa autem voluptatem doloribus totam vero nisi expedita beatae blanditiis iure labore voluptas perspiciatis minima officiis nam, necessitatibus molestiae veniam consequuntur! Praesentium, eligendi,
                    nihil!</div>
                <div>Est impedit facilis minima tempore, sed voluptate error quae praesentium rem eum repellat illum unde, quo dolorum atque consectetur libero cum blanditiis odit assumenda! Quidem recusandae, inventore voluptatum! Unde, natus!</div>
                <div>Veritatis assumenda ipsam delectus illum rerum, voluptatem quaerat natus dolorum odio adipisci velit a. Minima voluptate quasi fugit ducimus repellat ipsa, accusantium pariatur nisi neque, dolorum ratione mollitia, sunt voluptatem!</div>
            </div>
            <div class="tab__content">
                Я краб!
            </div>
            <div class="tab__content">
                Содержимое в процессе написания. Поищите в Галактике!
            </div>
        </div>
    </div>*/

const list = document.querySelectorAll('.tab');
list.forEach(function(itemList, i) {
itemList.addEventListener('click', function(click) {
  if (itemList.className != 'tab tab_active') {
    const listContent = document.querySelectorAll('.tab__content');
    itemList.className = 'tab tab_active';
    listContent[i].className = 'tab__content tab__content_active';
    for (let index = 0; index < list.length; index++) {
      if (index != i) {
        itemList.className = 'tab';
        listContent[index].className = 'tab__content';
      }
    }
  }
}, false);
});
