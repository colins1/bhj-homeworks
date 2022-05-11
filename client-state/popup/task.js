let activPopup = Array.from(document.getElementsByClassName("modal"));
let closePopup = Array.from(document.getElementsByClassName("modal__close"));
if (!document.cookie.includes('popup=closed')) {
   activPopup[0].classList.add("modal_active");
   closePopup[0].addEventListener("click", () => {
      activPopup[0].classList.remove("modal_active");
      document.cookie = 'popup=closed';
   })
}
