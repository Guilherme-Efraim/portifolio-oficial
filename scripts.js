const cabecalho = document.getElementById("cabecalho")
const btnLateral = document.getElementById("btn-lateral")
const btnSocial = document.getElementById("btn-social")
const onClick = document.getElementsByClassName(".onClick")

cabecalho.addEventListener("click", (evt) => {
    const btnClicado = evt.target

    if (btnClicado == btnLateral) {
        btnClicado.classList.add("onClick")
    } else if (btnClicado == btnSocial) {
        btnClicado.classList.add("onClick")
    }
})