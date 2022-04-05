const image = document.getElementById("cookie");
const element = document.getElementById("cookie");
  element.onclick = function() {
    const paragraph = document.getElementById("clicker__counter");
      paragraph.textContent = Number(paragraph.textContent) + 1;
      this.image = document.getElementById("cookie");
      if (this.image.width >= 200) {
        this.image.width = 150;
      } else {
        this.image.width = 200;
      }
};
