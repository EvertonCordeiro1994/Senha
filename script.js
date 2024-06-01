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

	(senha.type == "password") ? icone.classList.replace('fa-eye-slash', 'fa-eye') : icone.classList.replace('fa-eye','fa-eye-slash')

});

senha.addEventListener("input", function(){
	const senhaAtual = this.value;
	
	(senhaAtual.length >= 8) ? iconeNumeroCaracteres.classList.replace('fa-xmark', 'fa-check') : iconeNumeroCaracteres.classList.replace('fa-check','fa-xmark'); 
	
	(/[A-Z]/.test(senhaAtual) == true) ? iconeMaiuscula.classList.replace('fa-xmark', 'fa-check') : iconeMaiuscula.classList.replace('fa-check','fa-xmark'); 
	
	(/[a-b]/.test(senhaAtual) == true) ? iconeMinuscula.classList.replace('fa-xmark', 'fa-check') : iconeMinuscula.classList.replace('fa-check','fa-xmark');

	(/\d/.test(senhaAtual) == true) ? iconeNumero.classList.replace('fa-xmark', 'fa-check') : iconeNumero.classList.replace('fa-check','fa-xmark'); 
		 
	
	(/[!@#$%^&*(),.?":{}|<>]/.test(senhaAtual) == true) ? iconeCaractereEspecial.classList.replace('fa-xmark', 'fa-check') : iconeCaractereEspecial.classList.replace('fa-check','fa-xmark');
	
	console.log(senhaAtual);	
});