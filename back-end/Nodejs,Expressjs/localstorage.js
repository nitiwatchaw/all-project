const input = document.querySelector("input");
const h2 = document.querySelector("h2")
const btn = document.querySelector("button")

h2.innerHTML = localStorage.getItem("value")
input.addEventListener("keyup", display)

function display() {
    localStorage.setItem('value', input.value)

}
btn.addEventListener('click', clear)


function clear() {
    localStorage.removeItem('value')
    console.log("clear")
}

