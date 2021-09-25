var MensagemStatus = document.querySelector(".Mensagem-Status");
var Nivel = document.querySelector(".Nivel");
var Contador = document.querySelector(".Temporizador");
var Vermelho = document.querySelector(".Cor-Vermelho");
var Amarelo = document.querySelector(".Cor-Amarelo");
var Azul = document.querySelector(".Cor-Azul");
var Verde = document.querySelector(".Cor-Verde");
var Numero = 0;
var escolha =0;
var OrdemCerta = [];


function Iniciar(){
    Reiniciar(); 
    setTimeout(aparecer, 0);

}
function SinalizarDerrota(){
    setTimeout(brilha, 0,5);
    setTimeout(retorna, 500,5);
    setTimeout(mudarHtml, 500,1);
    setTimeout(mudarHtml,1000,0);
}
function mudarHtml(n){
    if(n ==1){
        Nivel.innerHTML = "Perdeu";
    }else{
        Nivel.innerHTML = "Nivel";
    }
}
function Reiniciar(){
    Numero = 0;
    escolha =0;
    OrdemCerta = [];
    Contador.innerHTML = Numero;
    sortearPosição();
}

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
        case 4:       
            document.getElementById('Verde').style.backgroundColor = 'white';                    
            break
        default:
            document.getElementById('Todo').style.backgroundColor = 'red';                             
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
        case 4:
            document.getElementById('Verde').style.backgroundColor = 'rgb(8, 250, 8)';                    
        break;
        default:
            document.getElementById('Todo').style.backgroundColor = 'black';                             
        
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
        Contador.innerHTML = Numero;       
        escolha ++;
        if(escolha == Numero){
            sortearPosição()
            setTimeout(aparecer, 2000,);
            escolha = 0;
        }
        mudar(n);
            
    }
    else{       
        SinalizarDerrota();
        Reiniciar();
    }
}