function validaFormulario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;

    var escreveNome = document.getElementById("mensagemNome");
    var escreveEmail = document.getElementById("mensagemEmail");
    var escreveNumero = document.getElementById("mensagemNumero");



    if (nome.length <= 0){
        escreveNome.style.display="block";
        return false;
    }

    if (!email.includes("@")){
        escreveEmail.style.display="block";
        return false;
    }

    if (numero.length < 10){
        escreveNumero.style.display="block";
        return false;
    }

    return true;
}

anime({
    targets: '#imgPersonagens',
    translateX: -550
});