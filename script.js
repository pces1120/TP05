
//TP05
/*	Crear un array de peliculas 
	Crear una funcion que agrege una pelicula al array de peliculas 
	La pelicula debera tener un ID y un Titulo 
	Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente  
	Crear una funcion que ordene las peliculas por Titulo y por ID 
	Crear una funcion que elimine una pelicula por su ID. 

*/




function Pelicula (id, titulo) {

	this.id = id;
	this.titulo = titulo;

}

var pelicula = new Pelicula(0, 'Strange Encounters Of The Third Kind');

var Library = function (){

	//Array de peliculas

	var peliculas = []


	//Metodos

	//Funcion para validar que la pelicula no fue ingresada previamente

	this.peliculaNoIngresada = function (pelicula){

		var pos = -1;
		var peliculaActual;

		for (i = 0; i < peliculas.length && pos === -1; i++) {

			peliculaActual = peliculas[i];

			if (peliculaActual.id === pelicula.id){

				pos = i;

			}
		}

		return pos;
	}


	//Funcion para agregar la pelicula

	this.agregarPelicula = function (pelicula){

		var pos = peliculaNoIngresada(pelicula);

		if (pos === -1){

			peliculas.push(pelicula);

			alert ('la pelicula ha sido agregada');

		} else {

			alert('Lo sentimos, su pelicula ya esta en nuestros archivos');

		}
	}


	//Funcion para eliminar una pelicula por ID

	this.obtenerId = function (){

		return pelicula.id;
	}


	this.eliminarPelicula = function (idPelicula){

		
		for(i = 0; i < peliculas.length ; i++){

			if (peliculas[i].id === idPelicula){

				peliculas.splice(i, 1);

				alert ('la pelicula de id ' + idPelicula + ' ha sido eliminada');

			} else {

				alert ('la pelicula de id ' + idPelicula + ' no figura en nuestros archivos')
			}

		}

	}


	//Funcion para ordenar peliculas por ID


	this.compararId = function (peliculaA,peliculaB) {

		var resultado;

		if(peliculaA.id < peliculaB.id){

			resultado = -1;

		}

		if(peliculaB.id === peliculaB.id){

			resultado = 0;
			
		}

		if(peliculaA.id > peliculaB.id){

			resultado = 1;
			
		}

		return resultado;

		}


	this.ordenarId = function() {

		peliculas.sort(this.compararId);

	}


	//Funcion para ordenar peliculas por Titulo

	this.obtenerTitulo = function (){

		return pelicula.titulo;
	}

	this.compararTitulo = function (tituloA,tituloB) {

		var resultado;

		if(tituloA < tituloB){

			resultado = -1;

		}

		if(tituloB === tituloB){

			resultado = 0;
			
		}

		if(tituloA > tituloB){

			resultado = 1;
			
		}

		return resultado;

		}


	this.ordenarTitulo = function() {

		peliculas.sort(this.compararTitulo);

	}

}