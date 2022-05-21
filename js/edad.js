function edad(Fecha){
	fecha = new Date(Fecha)
	hoy = new Date()
	ed = parseInt((hoy -fecha)/365/24/60/60/1000)
	document.getElementById('pepe').value = "Tu edad es de " + ed + " años."
	}