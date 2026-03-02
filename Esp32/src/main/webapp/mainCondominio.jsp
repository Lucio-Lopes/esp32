<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
	session = request.getSession(false);
	if(session == null || session.getAttribute("usuarioLogado") == null) {
		request.getRequestDispatcher("login.html").forward(request, response);
		return;
	}
	boolean admin = (boolean) session.getAttribute("isAdmin");
	
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
<title>Home</title>
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
					<li><a href="usuario"><i class="fa-regular fa-user"></i>Usuários</a></li>
					<li><a><i class="fa-solid fa-door-open"></i>Sair</a></li>
				</ul>
			</nav>
		</div>
		<div class="main">
			<div class="selecao">
				<%if(admin == true){%>
				<div class="btncond-header">
					<a href="addCond">Adicionar</a> <a href="">Editar</a>
				</div>
				<%} %>

				<div>
					<h1 class="titulo">Reboot de condomínios</h1>
				</div>
				<div class="options">
					<select>
						<option value="">condomínio 1</option>
						<option value="">condomínio 2</option>
						<option value="">condomínio 3</option>
						<option value="">condomínio 4</option>
						<option value="">condomínio 5</option>
						<option value="">condomínio 6</option>
						<option value="">condomínio 7</option>
					</select>
					<button>
						<i class="fa-solid fa-arrow-right"></i>
					</button>
				</div>
			</div>
			<div class="condominio">
				<h2>Condomínio 1</h2>
				<div class="equipamentos">
					<div>
						<div class="dispositivo">
							<div>
								<div class="ligado"></div>
								<h3>Guarita</h3>
							</div>
							<div class="botoes">
								<button class="desligar">Desligar</button>
								<button class="ligar">Ligar</button>
							</div>
						</div>
						<div class="dispositivo">
							<div>
								<div class="desligado"></div>
								<h3>Mikrotik</h3>
							</div>
							<div class="botoes">
								<button class="desligar">Desligar</button>
								<button class="ligar">Ligar</button>
							</div>
						</div>
					</div>
					<div>
						<div class="dispositivo">
							<div>
								<div class="ligado"></div>
								<h3>DVR</h3>
							</div>
							<div class="botoes">
								<button class="desligar">Desligar</button>
								<button class="ligar">Ligar</button>
							</div>
						</div>
						<div class="dispositivo">
							<div>
								<div class="ligado"></div>
								<h3>Internet</h3>
							</div>
							<div class="botoes">
								<button class="desligar">Desligar</button>
								<button class="ligar">Ligar</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<script src="script.js"></script>
</body>
</html>