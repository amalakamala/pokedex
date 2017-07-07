$(document).ready(function() {


	var mostrarPoke = function(data){
		data.pokemon_entries.forEach(function(element){
			var nombre = element.pokemon_species.name;
			var id = element.entry_number;
			var linkImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

			$("#los-poke").append(`
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
			</div>`).append(pokemonDetalle(id,nombre));

			
			$('.modal').modal();


		})

		/*
			$(".btn-poke-modal").click(function(){
				console.log("hola");	
				var apiPo = "http://pokeapi.co/api/v2/pokemon-species/1/";

				$.ajax({
					url: apiPo + "pokemon/" 
				})
				.done(function(response){
					$("#nombre-pokemon-m").html(response.name);
				})
			});
		*/
	};



	function pokemonDetalle(id,nombre){
		var elModal = `<div id='modal-`+id +`' class="modal">
		<div id="info-modal" class="modal-content">
			<div class="row">
				<div class="col l6">
					
				</div>
				<div class="col l6">
					<h1 id="nombre-pokemon-m">` + nombre + `</h1>
				</div>				
			</div>
		</div>
	</div>`;
	return elModal
	}


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

	$(window).load(function() {
		$("#los-poke").empty();
		ajaxPoke(name);
	});

});



