// CAMPO BUSCA
const botaoBusca = document.querySelector(".icone__busca");
const campoBusca = document.querySelector(".campoBusca__mobile");
const fechaBotao = document.querySelector(".icone__fechar")

botaoBusca.addEventListener('click', () => {
  campoBusca.classList.toggle('campoBusca__mobile--ativo')
})

fechaBotao.addEventListener('click', () => {
  campoBusca.classList.remove('campoBusca__mobile--ativo')
})

//MENU LATERAL
const botaoMenu = document.querySelector(".icone__menu");
const menuLateral = document.querySelector(".menuLateral");

botaoMenu.addEventListener('click', () => {
  console.log("oi")
  menuLateral.classList.toggle('menuLateral--ativo')
})

//CLIQUE FORA DO MENU LATERAL FECHA AMBAS



