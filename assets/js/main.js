$(document).ready(function() {


	var mostrarPoke = function(data){
		data.pokemon_entries.forEach(function(element){
			var nombre = element.pokemon_species.name;
			var id = element.entry_number;
			var linkImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
			var detalles = 'http://pokeapi.co/api/v2/pokemon-species/'	
			var pokemones = detalles + id;


			$("#los-poke").append(cajaPokemon(id,nombre,linkImg)).append(pokemonDetalle(id,nombre,linkImg));			
			$('.modal').modal();
		})


		function cajaPokemon(id,nombre,linkImg){
			var texto = `
  			<div class='col l2 center caja-poke'>
				<a href='#modal-`+id +`' id='`+ id +`' class='btn-poke-modal' ><img class='fondo-img caja' src='`+ linkImg + id + `.png'></img></a>
				<div class='pie-fondo'>
					<div class='pie-foto'>
						<div class='iconos'>
							<div class='colection-iconos'>
								<img src='assets/img/icon/pokeball_gray.png'></img>
								<img src='assets/img/icon/valentines-heart.png'></img>
								<img src='assets/img/icon/data.png'></img>
							</div>
						</div>
					</div>
					<p class='name'>` + nombre + `</p>
				</div>
			</div>`;
			return texto;
		}

		function pokemonDetalle(id,nombre,linkImg){
			var elModal = `<div id='modal-`+id +`' class="modal">
			<div id="info-modal" class="modal-content">
				<div class="row">
					<div class="col l6">
						<img class='fondo-img caja' src='`+ linkImg + id + `.png'>
					</div>
					<div class="col l6">
						<h1 id="nombre-pokemon-m">` + nombre + `</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, qui excepturi nisi, veniam laborum tempore, odio sequi minus accusamus a at modi delectus repellendus, soluta numquam alias perspiciatis quibusdam.</p>
					</div>				
				</div>
			</div>
		</div>`;
		return elModal
		}
	};



	var ajaxPoke = function(name){

		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokedex/1/',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			mostrarPoke(response);
		})
		.fail(function(){
			console.log("error");
		})
	}	


	var ajaxPokeModal = function(name){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon-species/',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			pokemonDetalle(response);
		})		
	}


	$(window).load(function() {
		$("#los-poke").empty();
		ajaxPoke(name);
	});

	/*
	Buscador
	$('body').keyup(function(e) {
		//Al apretar enter se crea la tarea
	    if(e.keyCode == 13) {
	    	var tarea = $("#buscar").val(); //Id desde html

	        if(tarea == ""){
				alert("Debes escribir una tarea"); //input vacia da alert
			}else{
				$("#los-poke").find(tarea);
			}	                
	}
	*/

});



