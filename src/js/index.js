/*
O que precisamos fazer? - quando clicarmos no botaõ de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro.

Objetivo 1: Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modeo escuro sejam aplicados e mudar a imagem para lua.

- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema;
- passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body;
- passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema;
- passo 4 - adicionar a classe modo-escura no body;
- passo 5 - trocar a imagem do botão de alterar tema para lua;

Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar para o modo claro e mudar a imagem para o sol.

- passo 6 - remover a classe do modo-escuro do body;
- passo 7 - trocar a imagem do botão de alterar tema pro o sol;
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click",()=>{

    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(modoEscuroAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

    

    
});