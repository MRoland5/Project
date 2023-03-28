let button = document.getElementById("btn")
let list = document.getElementById("navbar")

let showList = function () {
    list.classList.toggle("show")
}



button.addEventListener("click", showList)