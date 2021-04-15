var i = 0;

function toggleMenu(){
	var x = document.getElementById("link_menu");
	var y = document.getElementById("mobile_menu_itens");
	if(i === 0){
		x.style.backgroundImage = "url('img/close.png')";
		y.style.display = "block";
		y.style.visibility = "visible";
		i = 1;
		
	}
	else if(i === 1){
		x.style.backgroundImage = "url('img/menu.png')";
		y.style.display = "none";
		y.style.visibility = "hidden";
		i = 0;
	}
	
}