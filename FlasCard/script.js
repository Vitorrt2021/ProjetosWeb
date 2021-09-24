let resposta = document.querySelector(".Botão-Mostrar");
let pergunta = document.querySelector(".Pergunta");
let ativo = true;
let chave;
let valor;
var id,atual=0;
var deletea;
var Resposta='',Pergunta='';



function mostrar(){

    if(ativo){
        id = parseInt(localStorage.getItem('id'))
        atual = escolher(atual+1,id);
        deletea = atual;    
        pegarDados(atual)
        ativo = false;
        document.getElementById('Pergunta').style.backgroundColor = ' rgb(194, 227, 240)';
        pergunta.innerHTML = Pergunta;
    }
    else{
        document.getElementById('Pergunta').style.backgroundColor = 'white';
        pergunta.innerHTML = Resposta;  
        ativo = true;
    }
}


function deletar()
{
    localStorage.removeItem(deletea);
    reorganizar();

}

function confirmar()
{
    id = 1+parseInt(localStorage.getItem('id'));
    valor = document.getElementById("valor").value;
    chave = document.getElementById("chave").value;
    valor = chave +'Ç'+ valor;
    localStorage.setItem(id,valor);
    localStorage.setItem('id',id);
}

function escolher(atual,id){
    if(atual > id || atual < 0){
        return 0; 
    }
    else{
        return atual;
    }
}

function pegarDados(atual){
    let a = localStorage.getItem(atual);
    let asss = false;
    Resposta = Pergunta = '';
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==='Ç'){
            asss= true;
        }
        else if(asss){
            Resposta += a[i];
        }
        else{
            Pergunta += a[i];
        }
    }

}

function reorganizar(){
    for(let i=atual;i!=id;i++){
        localStorage.setItem(i,localStorage.getItem(i+1));
    }
    localStorage.removeItem(id);
    id--;
    localStorage.setItem('id',id);
    
}