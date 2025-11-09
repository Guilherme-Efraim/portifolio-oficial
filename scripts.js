const cabecalho = document.getElementById("cabecalho")

const btnLateral = document.getElementById("btn-lateral")
const menuLateral = document.getElementById("menu-lateral")
const menuLateralAtivo = document.getElementsByClassName("menu-lateral-ativo")

const btnSocial = document.getElementById("btn-social")
const menuRedesSociais = document.getElementById("menu-redes-sociais")
const menuSociaisAtivo = document.getElementsByClassName("menu-social-ativo")
const boxItemsSociais = document.getElementById("box-items-sociais")

function botaoClicado(botao, menu, clase){
    botao.addEventListener("click", () => {
        menu.classList.toggle(clase);
    });
}

botaoClicado(btnLateral, menuLateral, "menu-lateral-ativo")
botaoClicado(btnSocial, menuRedesSociais, "menu-social-ativo")






// btnLateral.addEventListener("click", () => {
//     menuLateral.classList.toggle("menu-lateral-ativo")
// })

// btnSocial.addEventListener("click", () => {
//     menuRedesSociais .classList.toggle("menu-social-ativo")
// })

