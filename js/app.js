const button = document.querySelector(".burger-button")
const header = document.querySelector("header")

button.addEventListener('click',function() {
    header.classList.toggle("open")
})