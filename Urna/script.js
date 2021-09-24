let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descrição = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1rigth');
let numeros= document.querySelector('.d-1-3')

let etapaAtual = 0;
let numero='';


function começarEtapa()
{
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';
    for(let i=0;i<etapa.numeros;i++){
        if(i===0){
            numeroHtml += '<div class="numero pisca"></div>'
        }
        else{
            numeroHtml += '<div class="numero"></div>';
        }
    }
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descrição.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function autalizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }
        else{
            return false;
        }
    });
    if(candidato.length >0){
        candidato = cadidato[0];
        seuVotoPara.style.display = 'block';
        descrição.innerHTML = 'Nome: ${candidato.nome}</br>Partido ${cadidato.partido}';

        let fotosHtml = '';
        for(let i in candidato.length.fotos){
            fotosHtml +='<div class="d-1-image"><img class="d-1-image" src="images/${candidato.fotos[i].url}" alt=" /">${candidato.fotos[i].legenda}</div>'
        }
        lateral.innerHTML = fotosHtml;
    }

}

function clicou(n){
    let el = document.querySelector('.numero pisca');
    if(el !== null){
        el.innerHTML = n;
        numero = '$(numero)$(n)';

        el.classList.remove('pisca');
        if(el.nextElementSibling !== null){
            el.nextElementSibling.classList.add(' pisca');
        }
        else{
            autalizaInterface();
        }
    }
}
function branco(){
    alert("Clicou em Branco")
}
function corrige(){
    alert("Clicou em Corrige")
}
function confirma(){
    alert("Clicou em confirma")
}

começarEtapa();