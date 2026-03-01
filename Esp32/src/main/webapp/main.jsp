<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    %>

<%
	session = request.getSession(false);
	if(session == null || session.getAttribute("usuarioLogado") == null) {
		response.sendRedirect("index.html");
		return;
	}
%>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                        <li><i class="fa-regular fa-building"></i>Condomínios</li>
                        <li><i class="fa-regular fa-user"></i>Usuários</li>
                        <li><i class="fa-solid fa-door-open"></i>Sair</li>
                    </ul>
                </nav>
            </div>
            <div class="main">
					
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>