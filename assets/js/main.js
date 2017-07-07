$(document).ready(function() {

	/*
	$(window).load(function() {
	    
	});	
*/

	var mostrarPoke = function(data){
		var nombre = "";
		data.forEach(function(element){
			nombre = element.pokemon_species.name;
			//$("#los-poke").append(imprimirImg(exports.getSprite(name)));
			$("#los-poke").append(imprimir(nombre));			
		});
	}


	var imprimir = function(name){
		var t = "<div clas='col l3 name'>" + name + "</div>";
		return t ;
	}

	/*
	var imprimirImg = function(name){
		var t = "<div class='elemento'><img src='" + name + "'/></div>";
		return t ;
	}
	*/

	var ajaxPoke = function(name){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokedex/1/',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			console.log(response.pokemon_entries);
			mostrarPoke(response.pokemon_entries);
		})
		.fail(function(){
			console.log("error");
		})
	}	

	$(window).load(function() {
		$("#los-poke").empty();
		ajaxPoke(name);
	});



/*
	var poke = "http://pokeapi.co/api/v2/pokemon-species/1";
	poke.forEach(function(el){console.log(el);})


	$("#btn-buscar").click(function(e){
		$("#los-poke").empty();

		var buscar = $("#buscar").val();
		var apiPokemon = "http://pokeapi.co/api/v2/pokemon-species/1" + buscar;


	})

*/	
});