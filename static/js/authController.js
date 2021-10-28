
$("#form").on("submit", function(e) {
	e.preventDefault();
	
	let data = {
		usuario : $("#usuario").val(),
		senha : $("#senha").val()
	}

	if (data.usuario == "" || data.senha == "") {
		alert("Preencha todos os campos!");
		
		const elemento = document.getElementById('sub');
		elemento.classList.add("invisible");

		return;
	}

	// FAZER REQUISIÇÃO AJAX PARA API DE LOGIN

	// $.ajax({
	// 	method: "POST",
	// 	url: "",
	// 	data: data,
	// 	dataType: "JSON"
	// }).done((response) => {
	// 	console.log(response);
	// }).fail((error) => {
	// 	console.log(error);
	// }).always(() => {
	// 	console.log("REQUISIÇÃO FINALIZADA");
	//	const elemento = document.getElementById('sub');
	//	elemento.classList.add("invisible");
	// });

	// REMOVER ANIMAÇÃO CARREGANDO DA PAGINA LOGIN
	setTimeout(() => {
		const elemento = document.getElementById('sub');
		elemento.classList.add("invisible");
	}, 9000);

});
