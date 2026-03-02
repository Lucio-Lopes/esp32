package controller;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import model.DAO;
import model.Usuario;

@WebServlet(urlPatterns = {"/login","/condominio","/usuario","/addCond"})
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
					response.sendRedirect("login.html");
				}else if(email.equals(user.getEmail()) && senha.equals(user.getPassword()) && user.isAtivo() == true) {
					HttpSession session = request.getSession(true);
					session.setAttribute("usuarioLogado", user.getEmail());
					session.setAttribute("isAdmin", user.isAdmin());
					response.sendRedirect("index.jsp");
				}else {
					response.sendRedirect("login.html");
				}
			break;
			case "/condominio":
				request.getRequestDispatcher("mainCondominio.jsp").forward(request, response);
			break;
			case "/usuario":
				request.getRequestDispatcher("mainUsuario.jsp").forward(request, response);
			break;
			case "/addCond":
				request.getRequestDispatcher("mainAddCond.jsp").forward(request, response);
			break;
			default:
				response.sendRedirect("index.html");
			break;
		}
		
	}

}
