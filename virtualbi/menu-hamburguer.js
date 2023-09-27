const hamburguer = document.querySelector("#id-b-hamburguer")

const nav = document.querySelector('#id-nav-header')

hamburguer.addEventListener("click", () => (nav.classList.toggle("active")));