var OrdemCerta = [];
var Numero = 0;
var escolha =0;
let MensagemStatus = document.querySelector(".Mensagem-Status");
/*
    1 = vermelho
    2 = Amarelo
    3 = Azul
    4 = verde
*/
sortearPosição();

function ativar(){
    for(let i=0;i< Numero ; i++)
    {
        brilhar(OrdemCerta[i]);
    }
}

/* 
function brilha(n){
    switch (n) {
        case 1:
            break;
        case 2:
            break
        case 3:
          break;
        default:
      }
}
*/
function pegarAleatorio(){
    let a = Math.ceil(Math.random() * 4)
    if(a == 0){
        return pegarAleatorio()
    }
    else{
        return a;
    }
}

function sortearPosição(){
    OrdemCerta.push(pegarAleatorio())
    Numero ++;
}
function clickVermelho(){ver(1)}
function clickAmarelo(){ver(2)}
function clickAzul(){ver(3)}
function clickVerde(){ver(4)}

function ver(n){
    if(OrdemCerta[escolha] == n){
        MensagemStatus.innerHTML = escolha + ' Foi correta' ;       
        escolha ++;
        if(escolha == Numero){
            sortearPosição()
        }
    }
    else{
        MensagemStatus.innerHTML = 'Perdeu' ;       
        escolha =0;
        Numero =0;
        OrdemCerta = [];
        sortearPosição();
    }
}