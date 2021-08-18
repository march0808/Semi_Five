package net.member.db;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class MemberDAO {

	private DataSource ds;
	
	public MemberDAO() {
		try {
			Context init=new InitialContext();
			ds=(DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
			
		}catch(Exception ex) {
			System.out.println("DB 연결 실패:"+ex);
			return;
		}
	}

public int insert(Member m) {
	Connection con=null;
	PreparedStatement pstmt=null;
	int result=0;
	try {
		con=ds.getConnection();
		System.out.println("getConnection:insert()");
		
		pstmt=con.prepareStatement(
				"INSERT INTO MEMBER_INFO VALUES(?,?,?,?,?,?,?,?,?,?,?)");
		
		pstmt.setString(1, m.getMem_id());
		pstmt.setString(2, m.getMem_password());
		pstmt.setString(3, m.getMem_name());
		pstmt.setString(4, m.getMem_nickname());
		pstmt.setString(5, m.getMem_gender());
		pstmt.setInt(6, m.getMem_tel());
		pstmt.setString(7, m.getMem_email());
		pstmt.setInt(8, m.getMem_birth());
		pstmt.setString(9, m.getMem_address());
		pstmt.setInt(10, m.getMem_type());
		pstmt.setString(11, m.getMem_expt());
		result=pstmt.executeUpdate();
		
	}catch(java.sql.SQLIntegrityConstraintViolationException e) {
		result=-1;
		System.out.println("멤버 아이디 중복 에러입니다.");
	}catch(Exception e) {
		e.printStackTrace();
	}finally {
		if(pstmt!=null)
			try {
				pstmt.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
		if(con!=null)
			try {
				con.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
	}
  return result;
}
public int isId(String mem_id) {
	Connection con=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	int result=-1;
	try {
		con=ds.getConnection();
		
		String sql="select id from MEMBER_INFO where id = ?";
		pstmt=con.prepareStatement(sql);
		pstmt.setString(1, mem_id);
		rs=pstmt.executeQuery();
		
		if(rs.next()) {
		
			result=0;
		}
	}catch(Exception e) {
		e.printStackTrace();
	}finally {
		if(rs!=null)
			try {
				rs.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
		if(con!=null)
			try {
				con.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
	}
  return result;
}

		


public int isId(String mem_id,String mem_password) {
	Connection con=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	int result=-1;
	try {
		con=ds.getConnection();
		
		String sql = "select mem_id, mem_password from MEMBER_INFO where mem_id = ? ";
		pstmt=con.prepareStatement(sql);
		pstmt.setString(1, mem_id);
		rs=pstmt.executeQuery();
		
		if(rs.next()) {
			if(rs.getString(2).equals(mem_password)) {
				result=1;
			}else {
				result=0;
			}
		}
	}catch(Exception e) {
		e.printStackTrace();
	}finally {
		if(rs!=null)
			try {
				rs.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
		if(con!=null)
			try {
				con.close();
			}catch(SQLException ex) {
				ex.printStackTrace();
			}
	}
  return result;
}

}