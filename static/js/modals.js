$('#cadastrar').on('click', function(){
	// alert("Novo cadastrar");
	$("#boxmodal").append(`

	<div class="back" id="modalCadastro">
		<div class="modal-cadastrar">
			<h1 class="menu-title">Novo cadastro</h1>
			<form class="form">
				<input class="form-input" type="text" name="" placeholder="nome">
				<input class="form-input" type="text" name="" placeholder="email">
				<input class="form-input" type="text" name="" placeholder="telefone">
				<button class="input-submit">Cadastrar</button> 
			</form>
			<button onclick="fecharModalCadastrar()" class="bnt-fechar-form">Fechar formulário</button>
		</div>
	</div>

		`);
});

$(".editar-btn").on('click', function(){
    // alert($(this).attr('id'));
     $("#boxmodal").append(`

	<div class="back" id="modalCadastro">
		<div class="modal-cadastrar">
			<h1 class="menu-title">Editar cadastro</h1>
			<form id="formCadastro" class="form">
				<input class="form-input" id="usuario" value="teste" type="text" name="" placeholder="nome">
				<input class="form-input" id="email" value="email@teste.com"  type="text" name="" placeholder="email">
				<input class="form-input" id="telefone" value="(11) 9 4002-8922" type="text" name="" placeholder="telefone">
				<button type="submit" class="input-submit">Editar</button> 
			</form>
			<button onclick="fecharModalCadastrar()" class="bnt-fechar-form">Fechar formulário</button>
		</div>
	</div>

		`);
});

$(".excluir-btn").on('click', function(){
    // alert($(this).attr('id'));
    // let id = $(this).attr('id');
     $("#boxmodal").append(`

	<div class="back" id="modalCadastro">
		<div class="modal-cadastrar">
			<h1 class="menu-title">Deseja realmente excluir esse usuário?</h1>
			<p class="p-desc">Id: 1</p>
			<p class="p-desc">Nome: teste</p>
			<button type="submit" class="input-excluir">Excluir</button> 
			
			<button onclick="fecharModalCadastrar()" class="bnt-fechar-form">Fechar formulário</button>
		</div>
	</div>

		`);
});