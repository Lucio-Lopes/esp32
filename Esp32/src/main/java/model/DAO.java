package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DAO {
	private String driver = "com.mysql.cj.jdbc.Driver";
	private String url = "jdbc:mysql://localhost:3306/esp32?useTimezone=true&serverTimezone=UTC";
	private String user = "root";
	private String password = "Ornq933@";
	
	private Connection conectar() {
		Connection con = null;
		try {
			Class.forName(driver);
			con = DriverManager.getConnection(url,user,password);
			return con;
		} catch (Exception e) {
			
			return null;
			
		}
	}
	public void teste() {
		
		try {
			Connection con = conectar();
			System.out.println(con);
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		
	}
	
	public Usuario validarUsuario(String email, String senha) {
		
		String read = "select * from usuario where email=? and senha=?";
		try {
			
			Connection con = conectar();
			PreparedStatement pst = con.prepareStatement(read);
			pst.setString(1, email);
			pst.setString(2, senha);
			ResultSet rs = pst.executeQuery();
			while(rs.next()) {
				
				Long id = rs.getLong(1);
				String nome = rs.getString(2);
				String email1 = rs.getString(3);
				String senha1 = rs.getString(4);
				boolean ativo = rs.getBoolean(5);
				return new Usuario(id,nome,email1,senha1,ativo);
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
		
	}
}
