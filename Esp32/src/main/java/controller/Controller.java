package controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.DAO;
import model.Usuario;

@WebServlet(urlPatterns = {"/login","/condominio","/usuario","/addCond","/addUser","/sair","/insertUser","/pesquisarUser","/editUser","/updateUser","/deleteUser"})
public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
	DAO dao = new DAO();
	Usuario usuario = new Usuario();
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
				String ip = request.getRemoteAddr();
				System.out.println(ip);
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
				listaUsuarios(request,response);
			break;
			case "/addCond":
				request.getRequestDispatcher("mainAddCond.jsp").forward(request, response);
			break;
			case "/addUser":
				request.getRequestDispatcher("addUser.jsp").forward(request, response);
			break;
			case "/sair":
				HttpSession session = request.getSession(false);
				if(session != null) {
					session.invalidate();
				}
				response.sendRedirect("login.html");
			break;
			case "/insertUser":
				insertUser(request, response);
			break;
			case "/pesquisarUser":
				pesquisarUser(request,response);
			break;
			case "/editUser":
				editUser(request,response);
			break;
			case "/updateUser":
				updateUser(request,response);
			break;
			case "/deleteUser":
				deleteUser(request,response);
			break;
			default:
				response.sendRedirect("index.jsp");
			break;
		}
		
	}
	
	protected void insertUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		Usuario usuario = new Usuario();
		usuario.setEmail(request.getParameter("email"));
		usuario.setName(request.getParameter("nome"));
		usuario.setPassword(request.getParameter("senha1"));
		if(request.getParameter("isAdmin") != null) {
			usuario.setAdmin(true);
		}
		dao.insertUsuario(usuario);
		response.sendRedirect("usuario");
	}
	
	protected void listaUsuarios(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		ArrayList<Usuario> lista = dao.listarUser();
		request.setAttribute("usuarios", lista);
		RequestDispatcher rd = request.getRequestDispatcher("mainUsuario.jsp");
		rd.forward(request, response);
	}
	
	protected void pesquisarUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String nome = request.getParameter("search");
		ArrayList<Usuario> lista = dao.pesquisarUser(nome);
		request.setAttribute("usuarios", lista);
		RequestDispatcher rd = request.getRequestDispatcher("mainUsuario.jsp");
		rd.forward(request, response);
	}
	protected void editUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String email = request.getParameter("email");
		Usuario usuario = dao.pegarUserEdit(email);
		request.setAttribute("id", usuario.getId());
		request.setAttribute("email", usuario.getEmail());
		request.setAttribute("nome", usuario.getName());
		request.setAttribute("admin", usuario.isAdmin());
		request.getRequestDispatcher("editUser.jsp").forward(request, response);
	}
	protected void updateUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		Usuario usuario = new Usuario();
		usuario.setId(Long.parseLong(request.getParameter("id")));
		usuario.setEmail(request.getParameter("email"));
		usuario.setName(request.getParameter("nome"));
		usuario.setPassword(request.getParameter("senha1"));
		if(request.getParameter("isAdmin") != null) {
			usuario.setAdmin(true);
		}
		System.out.println(usuario.isAdmin());
		dao.alterarUsuario(usuario);
		request.getRequestDispatcher("usuario").forward(request, response);
	}
	
	protected void deleteUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		dao.deleteUser(Long.parseLong(request.getParameter("id")));
		response.sendRedirect("usuario");
	}
	
}
