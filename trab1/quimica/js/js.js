//listeners
document.querySelector("#botao-1").addEventListener("click", verifica_1);
document.querySelector("#botao-2").addEventListener("click", verifica_2);
document.querySelector("#botao-3").addEventListener("click", verifica_3);



//funcoes
function verifica_1() {
    if (document.querySelector("#opcao-1").checked) {
        document.querySelector("#erro-q1").style.display="none";
        document.querySelector("#resposta-1").style.display="block";
        document.querySelector("#questao-2").style.display="block";
        document.querySelector("#botao-1").style.display="none";
        document.querySelector("#curiosidades-1").style.display="block";
    }
    else{
        document.querySelector("#erro-q1").style.display="block";
    }
}
function verifica_2() {
    if (document.querySelector("#opcao-4").checked) {
        document.querySelector("#erro-q2").style.display="none";
        document.querySelector("#resposta-2").style.display="block";
        document.querySelector("#questao-3").style.display="block";
        document.querySelector("#botao-2").style.display="none";
        document.querySelector("#curiosidades-2").style.display="block";
    }
    else{
        document.querySelector("#erro-q2").style.display="block";
    }
}
function verifica_3() {
    if (document.querySelector("#opcao-7").checked) {
        document.querySelector("#erro-q3").style.display="none";
        document.querySelector("#resposta-3").style.display="block";
        document.querySelector("#botao-3").style.display="none";
        document.querySelector("#curiosidades-3").style.display="block";
    }
    else{
        document.querySelector("#erro-q3").style.display="block";
    }
}

