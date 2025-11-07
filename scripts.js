const cabecalho = document.getElementById("cabecalho")
const btnLateral = document.getElementById("btn-lateral")
const btnSocial = document.getElementById("btn-social")

const boxItemsSociais = document.getElementById("box-items-sociais")
// const meusIcons = [...document.getElementsByClassName("meus-icons")]

// cabecalho.addEventListener("click", (evt) => {
//     const btnClicado = evt.target

//     if (btnClicado == btnLateral) {
//         btnClicado.classList.add("onClick")
//     } else if (btnClicado == btnSocial) {
//         btnClicado.classList.add("onClick")
//     }
// })

const redesSociais = ["Instagram", "GitHub", "Linkedin", "Facebook"]
const iconsSociais = ["fa-brands fa-instagram", "fa-brands fa-facebook", "fa-brands fa-square-linkedin","fa-brands fa-github"]

function adicionarItem(arr, addTo) {

    arr.map((ele, posi) => {

        const item = document.createElement("a")
        item.setAttribute("href", "#")
        item.setAttribute("id", "iconSocial" + posi)
        item.setAttribute("class", "icones")

        const icons = document.createElement("i")
        icons.setAttribute("class", ele + "icon")

        item.appendChild(icons)
        addTo.appendChild(item)
    })
}
console.log(boxItemsSociais)
adicionarItem(iconsSociais, boxItemsSociais)
