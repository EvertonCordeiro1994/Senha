const senha = document.querySelector("#input");
const botao = document.querySelector("#button");
const icone = document.querySelector("#icon");
const iconeNumeroCaracteres = document.querySelector("#icone00");  
const iconeMaiuscula = document.querySelector("#icone01");  
const iconeMinuscula = document.querySelector("#icone02");  
const iconeNumero = document.querySelector("#icone03");  
const iconeCaractereEspecial = document.querySelector("#icone04");  
const fraseNivel = document.querySelector('#fraseNivel');
const barraNivel = document.querySelector('#barra');



botao.addEventListener("click", function () {
    senha.type = (senha.type == "password") ? "text" : "password";

	(senha.type == "password") ? icone.classList.replace('fa-eye-slash', 'fa-eye') : icone.classList.replace('fa-eye','fa-eye-slash')

});

senha.addEventListener("input", function(){
	const senhaAtual = this.value;
	
	if (senhaAtual.length >= 8){
		iconeNumeroCaracteres.classList.replace('fa-xmark', 'fa-check')
 		iconeNumeroCaracteres.style.color ="#63E6BE";
	}else{
		iconeNumeroCaracteres.classList.replace('fa-check','fa-xmark')
		iconeNumeroCaracteres.style.color ="#EF4444";
	}; 
	
	if (/[A-Z]/.test(senhaAtual) == true){	 	iconeMaiuscula.classList.replace('fa-xmark', 'fa-check') 
		iconeMaiuscula.style.color ="#63E6BE";
	}else{
		iconeMaiuscula.classList.replace( 'fa-check','fa-xmark')
		iconeMaiuscula.style.color ="#EF4444";
	} 
	
	if (/[a-b]/.test(senhaAtual) == true){	 	iconeMinuscula.classList.replace('fa-xmark', 'fa-check') 
		iconeMinuscula.style.color ="#63E6BE";
	}else{
		iconeMinuscula.classList.replace( 'fa-check','fa-xmark')
		iconeMinuscula.style.color ="#EF4444";
	} 

	if (/\d/.test(senhaAtual) == true) 	{	 
		iconeNumero.classList.replace('fa-xmark', 'fa-check') 
		iconeNumero.style.color ="#63E6BE";
	}else{
		iconeNumero.classList.replace( 'fa-check','fa-xmark')
		iconeNumero.style.color ="#EF4444";
	} 
		 
	
	if (/[!@#$%^&*(),.?":{}|<>]/.test(senhaAtual) == true){		iconeCaractereEspecial.classList.replace('fa-xmark', 'fa-check') 
		iconeCaractereEspecial.style.color ="#63E6BE";
	}else{
		iconeCaractereEspecial.classList.replace( 'fa-check','fa-xmark')
		iconeCaractereEspecial.style.color ="#EF4444";
	}

	const nivelSenha = {
		0: "Muito fraca",
		1: "Fraca",
		2: "Moderada",
		3: "Forte",
		4: "Muito forte"
	}

	let nivel = 0

	if(senhaAtual.length >= 8) nivel++
	if (/[A-Z]/.test(senhaAtual)) nivel++
	if (/[a-b]/.test(senhaAtual)) nivel++
	if (/\d/.test(senhaAtual)) nivel++
	if (/[!@#$%^&*(),.?":{}|<>]/.test(senhaAtual)) nivel++	
		
	
	
	fraseNivel.innerText = nivelSenha[nivel-1]; 
	
	if( nivel <= 0){ 
		barra.style.width = 0 +  '%';
		barra.style.background = 'white'; 
	}

	if( nivel === 1){ 
		barra.style.width = 5 +  '%';
		barra.style.background = '#EF4444'; 
	}

	if( nivel === 2){
		barra.style.width = 20 + '%';
		barra.style.background = '#EF4444';
	}

	if( nivel === 3){ 
		barra.style.width = 40 + '%';
		barra.style.background = '#FFD43B';
	}

	if( nivel === 4){
 		barra.style.width = 60 + '%';
		barra.style.background = '#63E6BE';
	}

	if( nivel === 5){ 
		barra.style.width = 80 + '%';
		barra.style.background = '#63E6BE';
	}




	if (nivel <= 0) fraseNivel.innerText = " ";
	
	console.log(nivel, senhaAtual);	
});