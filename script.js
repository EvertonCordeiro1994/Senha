const senha = document.querySelector("#input");
const botao = document.querySelector("#button");
const icone = document.querySelector("#icon");
const iconeNumeroCaracteres = document.querySelector("#icone00");  
const iconeMaiuscula = document.querySelector("#icone01");  
const iconeMinuscula = document.querySelector("#icone02");  
const iconeNumero = document.querySelector("#icone03");  
const iconeCaractereEspecial = document.querySelector("#icone04");  



botao.addEventListener("click", function () {
    senha.type = (senha.type == "password") ? "text" : "password";

	if (senha.type == "password") {
        icone.classList.remove(
			'fa-eye-slash');
        icone.classList.add(
			'fa-eye');
    } else {
        icone.classList.remove(
			'fa-eye');
        icone.classList.add(
			'fa-eye-slash');
    }
});

// fa-check


senha.addEventListener("input", function(){
	const senhaAtual = this.value;
(/\d/.test(senhaAtual)) ? iconeNumero.classList.toggle('fa-xmark') :
iconeNumero.classList.toggle('fa-check');

	
	console.log(senhaAtual);	
});