let foco1 = document.getElementById('foco1');
let foco2 = document.getElementById('foco2');	
let apagador = document.getElementById('apagador');
let on = "ON";
let off = "OFF";
let proceso;


function serie() {
	if (foco1.alt == off || foco2.alt == on) {
		foco1.src = "img/ON.gif";
		foco1.alt = on;
		foco2.src = "img/OFF.gif";
		foco2.alt = off;						
	} else if(foco1.alt == on || foco2.alt == off){
		foco1.src = "img/OFF.gif";
		foco1.alt = off;
		foco2.src = "img/ON.gif";
		foco2.alt = on;						
	}

}	

function encender() {		
	apagador.setAttribute("onclick","apagar();");				
	proceso=setInterval(serie,2000);				
}

function apagar(){		
	apagador.setAttribute("onclick","encender();");	
	foco1.src = foco2.src = "img/OFF.gif";
	foco1.alt = foco2.alt = off;		
	clearInterval(proceso);
}

