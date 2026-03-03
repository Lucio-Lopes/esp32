<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
session = request.getSession(false);
if (session == null || session.getAttribute("usuarioLogado") == null) {
	request.getRequestDispatcher("login.html").forward(request, response);
	return;
}
boolean admin = (boolean) session.getAttribute("isAdmin");
if (admin != true) {
	request.getRequestDispatcher("index.jsp").forward(request, response);
}
%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
	integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="style2.css">
<title>Reboot de condomínios</title>
</head>
	<body>
		<div class="wrap-div">
			<div class="menu">
				<div class="logo">
					<h1>Locktec</h1>
				</div>
				<nav>
					<ul>
						<li><a href="condominio"><i class="fa-regular fa-building"></i>Condomínios</a></li>
						<%
						if (admin == true) {
						%>
						<li><a href="usuario"><i class="fa-regular fa-user"></i>Usuários</a></li>
						<%
						}
						%>
						<li><a href="sair"><i class="fa-solid fa-door-open"></i>Sair</a></li>
					</ul>
				</nav>
			</div>
			<div class="main">
				<div class="selecao">
					<%
					if (admin == true) {
					%>
					<div class="btncond-header">
						<a href="addUser">Adicionar</a>
					</div>
					<%
					}
					%>
					<div class="add-form">
						<h2>Novo usuário</h2>
						<form name="formUser" action="insertUser">
							<div class="input-group">
								<label for="email">Email</label> <input type="email" id="email"
									name="email" placeholder="Digite seu email" required>
							</div>
							<div class="input-group">
								<label for="email">Nome</label> <input type="text" id="nome"
									name="nome" placeholder="Digite seu nome" required>
							</div>
							<div class="input-group">
								<label for="senha">Senha</label> <input type="password" name="senha1" id="senha" placeholder="Digite sua senha" required>
							</div>
							<div class="input-group">
								<input type="password" id="senha" name="senha2"
									placeholder="Confirme sua senha" required>
							</div>
							<div class="input-admin">
								<input type="checkbox" id="admin" name="isAdmin"><span>admin</span>
							</div>
							<input type="button" class="login-btn" value="Cadastrar" onclick="validarUsuario()">
						</form>
	
					</div>
					<script src="script.js"></script>
	</body>
</html>