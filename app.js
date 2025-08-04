let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute > 10 || chute < 0) {
        alert('Insira apenas números de 1 a 10!');
    } 

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);

        //habilitar botao de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio (){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if(quantidadeNumerosSorteados == numeroLimite) { // se a lista ja tiver todos os numeros
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)) { //caso o número já esteja na lista
        return gerarNumeroAleatorio(); //sortear outro número
    } else {
        listaNumerosSorteados.push(numeroEscolhido); //adiciona na lista
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}