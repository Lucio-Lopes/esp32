<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	session = request.getSession(false);
	if(session == null || session.getAttribute("usuarioLogado") == null) {
		request.getRequestDispatcher("login.html").forward(request, response);
		return;
	}
	boolean admin = (boolean) session.getAttribute("isAdmin");
	if(admin != true){
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
					<%if(admin == true){%>
						<li><a href="usuario"><i class="fa-regular fa-user"></i>Usuários</a></li>
					<%} %>
					<li><a href="sair"><i class="fa-solid fa-door-open"></i>Sair</a></li>
				</ul>
			</nav>
		</div>
		<div class="main">
			<div class="add-form">
				<h2>Adicione um novo condomínio</h2>
				<form>
					<div class="input-group">
						<label for="email">Nome</label> <input type="email" id="email"
							placeholder="Nome do condomínio" required>
					</div>
					<div class="input-group">
						<label for="senha">Endereço IP</label> <input type="text"
							id="senha" placeholder="IP do dispositivo" required>
					</div>
					<button type="submit" class="login-btn">Cadastrar</button>
				</form>
			</div>
			<script src="script.js"></script>
</body>
</html>