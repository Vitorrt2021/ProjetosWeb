var OrdemCerta = [];
var Numero = 0;
var escolha =0;
var MensagemStatus = document.querySelector(".Mensagem-Status");
var Vermelho = document.querySelector(".Cor-Vermelho");
var Amarelo = document.querySelector(".Cor-Amarelo");
var Azul = document.querySelector(".Cor-Azul");
var Verde = document.querySelector(".Cor-Verde");
/*
    1 = vermelho
    2 = Amarelo
    3 = Azul
    4 = verde
*/
sortearPosição();
setTimeout(aparecer, 2000,);

function aparecer(){
    for(let i=0;i< Numero ; i++)
    {
        let a = OrdemCerta[i];
        setTimeout(brilha, 100+(600*i),a);
        setTimeout(retorna, 600*(i+1),a);
    }
}


function mudar(n){
    setTimeout(brilha, 0,n);
    setTimeout(retorna, 500,n);

}
function brilha(n){
    switch (n) {
        case 1:
            document.getElementById('Vermelho').style.backgroundColor = 'white';                    
            break;
        case 2:
            document.getElementById('Amarelo').style.backgroundColor = 'white';                    
            break
        case 3:
            document.getElementById('Azul').style.backgroundColor = 'white';                    
          break;
        default:
            document.getElementById('Verde').style.backgroundColor = 'white';                    
      }
      
      
}

function retorna(n){
    switch (n) {
        case 1:
            document.getElementById('Vermelho').style.backgroundColor = 'red';                    
            break;
        case 2:
            document.getElementById('Amarelo').style.backgroundColor = 'yellow';                    
            break
        case 3:
            document.getElementById('Azul').style.backgroundColor = 'blue';                    
          break;
        default:
            document.getElementById('Verde').style.backgroundColor = 'rgb(8, 250, 8)';                    
      }    
}

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
function ver(n){
    if(OrdemCerta[escolha] == n){
        MensagemStatus.innerHTML = Numero + ' Foi correta' ;       
        escolha ++;
        if(escolha == Numero){
            sortearPosição()
            setTimeout(aparecer, 2000,);
            escolha = 0;
        }
        mudar(n);
            
    }
    else{
        MensagemStatus.innerHTML = 'Perdeu' ;       
        escolha =0;
        Numero =0;
        OrdemCerta = [];
        sortearPosição();
        setTimeout(aparecer, 3000,);
    }
}