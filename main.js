var mensagem = document.getElementById('mensagem');
const mensagemSucesso = `Parabéns , você preencheu corretamente!` ;
const mensagemErro = `O primeiro número é maior que o segundo! Tente novamente.`;
const form = document.getElementById('formulario');
mensagem.style.display = 'none';
const submit = document.getElementById('btn');
submit.disabled = true;

function teste(){
    var a = Number(document.getElementById('um').value);
    var b = Number(document.getElementById('dois').value);
    return b>a;
}
dois.addEventListener('keyup' , function(a,b){
    if(teste()){
        submit.disabled = false;
        mensagem.style.display = 'block';
        mensagem.innerHTML = mensagemSucesso;
    }
    else{  
        submit.disabled = true;
        mensagem.style.display = 'block'
        mensagem.innerHTML = mensagemErro;
    }
})
