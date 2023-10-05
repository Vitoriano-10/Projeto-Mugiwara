/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/







//  OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//  passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao')

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll('.personagem')

// 👇  
// querySelectorAll = retorna uma NodeList, que também funciona como um array.



// OBJETIVO 2 - add o 'indice' no forEach para saber a div que esta o personagem pelo botão

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Primeiro precisa tirar a classe selecionada para depos add ela por isso o passo 3 esta por cima
        // OBJETIVO 1 PASSO 3 verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 
        desselecionarBotao()
        // OBJETIVO 1 passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add('selecionado')
        // OBJETIVO 2 passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
        desselecionarPersonagem()
        // OBJETIVO 2 passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add('selecionado')
    })
})
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove('selecionado')
}
// 👇
// forEach = executa uma função para cada elemento, seja de arrays simples ou arrays de objetos.
// addEventListener = permite que você configure funções a serem chamadas quando um evento específico acontece
// classList = mostra quantas classes tem cada elemento






