/**
 * 
 */


function calctria(){
	var base = parseFloat(document.getElementById("base").value);
	var altura = parseFloat(document.getElementById("altura").value);
	var resTria= (base*altura)/2;
	document.getElementById("resTria").value =resTria;
}


function calcQua(){
	var lado = parseFloat(document.getElementById("Lado").value);
	var resQuad= lado*lado;
	document.getElementById("resQuad").value = resQuad;
}
function calcCirc(){
	var raio = parseFloat(document.getElementById("raio").value);
	var resCirc= 3.14*(Math.pow(raio,2));
	document.getElementById("resCirc").value = resCirc;
}

function calcTrapezio(){
	var bMaior = parseFloat(document.getElementById("baseMaior").value);
	var bMenor = parseFloat(document.getElementById("baseMenor").value);
	var alturaTrap = parseFloat(document.getElementById("alturaTrap").value);
	
	var resTrapezio= ((bMaior+bMenor)*alturaTrap)/2;
	document.getElementById("resTrapezio").value = resTrapezio;
}


function calcRet(){
	var baseRetangulo = parseFloat(document.getElementById("baseRet").value);
	var alturaRetangulo = parseFloat(document.getElementById("alturaRet").value);
	var resRet= baseRetangulo*alturaRetangulo;
	document.getElementById("resRet").value = resRet;
}