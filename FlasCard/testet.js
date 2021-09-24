console.log()
function testar(atual,id){
    if(atual > id || atual < 0){
        atual = Math.floor(Math.random() * (id + 1));   
        console.log("Dentro:   "+atual);
        console.log("Dentro Id:   "+id);
        return testar(atual,id)
    }
    else{
        return atual;   
    }
}

console.log(testar(1,2))


console.log(testar(3,2))