package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.DAO;
import model.Usuario;

/**
 * Servlet implementation class Controller
 */
@WebServlet(urlPatterns = {"/login"})
public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	DAO dao = new DAO();
    public Controller() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getServletPath();
		System.out.println(action);
		switch(action) {
			case "/login":
				String email = request.getParameter("email");
				String senha = request.getParameter("senha");
				Usuario user = dao.validarUsuario(email, senha);
				if(user == null) {
					response.sendRedirect("index.html");
				}else if(email.equals(user.getEmail()) && senha.equals(user.getPassword()) && user.isAtivo() == true) {
					HttpSession session = request.getSession(true);
					session.setAttribute("usuarioLogado", email);
					response.sendRedirect("main.jsp");
				}else {
					response.sendRedirect("index.html");
				}
			break;
			default:
				response.sendRedirect("index.html");
			break;
		}
		
	}

}
