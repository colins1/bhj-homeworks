const formAuth = document.getElementById("signin__form");
const xhr = new XMLHttpRequest();

if (localStorage.user_id) {
 user();
} else {
 formAuth.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formAuth);
    xhr.open("POST", formAuth.action);
    xhr.send(formData);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
       if (xhr.response.user_id) {
          localStorage.setItem(`user_id`, xhr.response.user_id);
          user();
       }
       else {
          alert("«Неверный логин/пароль»");
          formAuth.reset();
       }
    })
 })
}

function user() {
 document.getElementById("signin").classList.remove("signin_active");
 document.getElementsByClassName("welcome")[0].classList.add("welcome_active");
 document.getElementById("user_id").textContent = localStorage.getItem(`user_id`);
}
