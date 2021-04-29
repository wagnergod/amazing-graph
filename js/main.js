// Script main.js por | by Wagner Godinho Atualizado em | Update: 29/04/2021 

let i = 0; // Declara a variável 'i' e lhe atribui um valor | Declare the variable 'i' and assign a value 

/* A função chamada toggleMenu, ao ser chamada, dependendo do valor da variável 'i'
	exibirá ou esconderá os itens do mobile menu. Funcionará como um interruptor. */

/* The function toggleMenu, when called, depending the value of variable 'i', it will show
	or hide the items of mobile menu. It will work as a switch */ 

function toggleMenu(){
	
	// Declara a variável 'x' e 'y' atribuindo lhes valores para manipular os elementos pela id no HTML.
	
	// Declare the variable 'x' and 'y' assigning the values to manipulate the elements by id on HTML.
	
	var x = document.getElementById("link_menu"); 
	var y = document.getElementById("mobile_menu_itens");

	//Se o valor da varíavel 'i' for estritamente igual a '0', executa o bloco de código abaixo.
	
	// if the value of variable 'i' is strict equal to '0', execute the code block below.
	
	if(i === 0){

		//Altera as propriedades do CSS background_image, display e visibility
		
		// Changes the CSS properties from background_image, display e visibility
		
		x.style.backgroundImage = "url('img/close.png')";
		y.style.display = "block";
		y.style.visibility = "visible";
		i = 1; // Altera valor da variavel 'i' para '1' | Changes variable 'i' to '1'
		
	}
	//Então se o valor da varíavel 'i' for estritamente igual a '1', executa o bloco de código abaixo.
	
	// Else if the value of variable 'i' is strict equal to '1', execute the code block below.
	
	else if(i === 1){

		//Altera as propriedades do CSS background_image, display e visibility
		
		// Changes the CSS properties from background_image, display e visibility

		x.style.backgroundImage = "url('img/menu.png')";
		y.style.display = "none";
		y.style.visibility = "hidden";
		i = 0; // Altera valor da variavel 'i' para '0' | Changes variable 'i' to '0'
	}
	
}

/* Função resize, que ao ser chamada, oculta o menu mobile em telas com maiores resolução.
   The function resize, when called, it hides the menu mobile on screens with higher resolution. */    

function resize(){
	if(screen.width >=768){
		var x = document.getElementById("link_menu"); 
		var y = document.getElementById("mobile_menu_itens");
		x.style.backgroundImage = "url('img/menu.png')";
		y.style.display = "none";
		y.style.visibility = "hidden";
		i = 0;

	}
}
