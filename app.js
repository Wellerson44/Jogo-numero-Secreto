let lista_Numeros_Sorteados = [];
let numero_Limite = 10;
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativa = 1;

function Mensagem_tela(tag,texto){
    let tela = document.querySelector(tag);
    tela.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
}
function ExibirMensagemInicial(){
    Mensagem_tela('h1', 'Bem vindo, Jogador');
    Mensagem_tela('p', 'Escolha um número de 1 a 10: ');   
    
}
ExibirMensagemInicial();

function gerarNumero(){
    let numero_Escolhido =  parseInt(Math.random() * numero_Limite + 1);
    let quantidade_Elementos_lista = lista_Numeros_Sorteados.length;
    if(quantidade_Elementos_lista == numero_Limite ){
        lista_Numeros_Sorteados = [];
    }
    if(lista_Numeros_Sorteados.includes(numero_Escolhido)){
        return gerarNumero();
    } else {
        lista_Numeros_Sorteados.push(numero_Escolhido);
        console.log(lista_Numeros_Sorteados);
        return numero_Escolhido;
    }
}

function VerificarChute(){
    chute =  document.querySelector('input').value;
    let palavra_Tentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagem_Acerto = `Você acertou o numero secreto com ${tentativa} ${palavra_Tentativa}.`;
    if(chute == numeroSecreto){
        Mensagem_tela('h1', 'Você venceu');
        Mensagem_tela('p', mensagem_Acerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            Mensagem_tela('h1', 'Tente Novamente');
            Mensagem_tela('p', 'O número Secreto e MENOR que o chute.');
        } else {
            Mensagem_tela('h1', 'Tente Novamente');
            Mensagem_tela('p', 'O número Secreto e Maior que o chute.');
        } tentativa++
          limparCampo();  
            
        }
    }
    
    function limparCampo(){
            chute = document.querySelector('input');
            chute.value = '';
        }

    function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativa = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
        }
