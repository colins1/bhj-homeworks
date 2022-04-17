/*<div class="card">
            <p>
                Я
                <span class="rotator">
                <span class="rotator__case rotator__case_active" data-speed="1000" data-color="red">Бог JS</span>
                <span class="rotator__case" data-speed="2000" data-color="green">Лучший программист на земле</span>
                <span class="rotator__case" data-speed="1000" data-color="#000">покорю этот мир</span>
                <span class="rotator__case" data-speed="1000" data-color="red">учусь в Нетологии</span>
                <span class="rotator__case" data-speed="500" data-color="blue">счастливый как никто</span>
                <span class="rotator__case" data-speed="200" data-color="gray">радуюсь жизни</span>
              </span>
            </p>
        </div>*/



    const text = document.querySelectorAll('.rotator__case');
    let i = 0;
      setInterval(allText = () => {
        if (i != text.length - 1) {
        if (i != 0) {
          text[i].className = 'rotator__case rotator__case_active';
          text[i - 1].className = 'rotator__case';
          i++;
        } else {
          text[text.length - 1].className = 'rotator__case';
          text[i].className = 'rotator__case rotator__case_active';
          i = i + 1;
        }
      } else {
        text[i - 1].className = 'rotator__case';
        text[i].className = 'rotator__case rotator__case_active';
        i = 0;
      }
    }, text[i].getAttribute('data-speed'));

      allText();
