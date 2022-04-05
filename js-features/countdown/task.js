const contentTime = document.getElementById("timer");

  countdown = function() {
    contentTime.textContent = Number(contentTime.textContent) - 1;
    if (Number(contentTime.textContent) == 0) {
      clearInterval(timeOut);
      alert("Вы победили в конкурсе!");
    }
  };
  let timeOut = setInterval(countdown, 1000);
