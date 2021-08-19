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
			Context init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		}catch(Exception ex) {
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
	}
	
	
	
	
	public int insert(Member m) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		try {
			con = ds.getConnection();
			System.out.println("getConnection : insert()");
			
			pstmt = con.prepareStatement(
					"INSERT INTO MEMBER_INFO (mem_id, mem_password, mem_name, mem_nickname, mem_gender, mem_tel, mem_email, mem_birth, mem_address, mem_type, mem_expt)"
					+ "VALUES (?,?,?,?,?,?,?,?,?,?,?)");
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
			result = pstmt.executeUpdate();
			
		
		}catch(java.sql.SQLIntegrityConstraintViolationException e) {
			result = -1;
			System.out.println("멤버 아이디 중복 에러입니다.");
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
		}
		return result;
	}




	public int isId(String mem_id, String mem_password) {
		Connection con =null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int result=-1; 
		try {
			con = ds.getConnection();
			
			String sql = "select mem_id, mem_password from MEMBER_INFO where mem_id =? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, mem_id);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				if(rs.getString(2).equals(mem_password)) {
					result = 1; 
				}else {
					result = 0; 
				}
			}
		}catch (Exception e) {
			
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
		}
		return result;
	}




	public Member member_info(String mem_id) {
		Member m = null;
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		try {
			con = ds.getConnection();
			
			String sql = "select * from MEMBER_INFO where mem_id = ? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, mem_id);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				m = new Member();
				m.setMem_id(rs.getString(1));
				m.setMem_password(rs.getString(2));
				m.setMem_name(rs.getString(3));
				m.setMem_nickname(rs.getString(4));
				m.setMem_gender(rs.getString(5));
				m.setMem_tel(rs.getInt(6));
				m.setMem_email(rs.getString(7));
				m.setMem_birth(rs.getInt(8));
				m.setMem_address(rs.getString(9));
				m.setMem_type(rs.getInt(10));
				m.setMem_expt(rs.getString(11));
			    m.setMemberfile(rs.getString(12));
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
		}
		return m;
	}




	public int update(Member m) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		try {
			con = ds.getConnection();
			System.out.println("getConnection : update()");
			
			String sql = 
					"update MEMBER_INFO set mem_name=?,mem_birth=?,mem_gender=?,mem_email=?,memberfile=? where mem_id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, m.getMem_name());
			pstmt.setInt(2, m.getMem_birth());
			pstmt.setString(3, m.getMem_gender());
			pstmt.setString(4, m.getMem_email());
			pstmt.setString(5, m.getMemberfile());
			pstmt.setString(6, m.getMem_id());
			result = pstmt.executeUpdate();
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
		}
		return result;
	}




	public int getListCount() {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		int x = 0;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select count(*) from MEMBER_INFO where mem_id != 'admin'");
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				x= rs.getInt(1);
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			System.out.println("getListCount() 에러 : " + ex);
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			
		}
		return x;
	}




	public List<Member> getList(int page, int limit) {
		List<Member> list = new ArrayList<Member>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		try {
			con = ds.getConnection();
			
			String sql =   "select * "
					+ " 	from (select b.*, rownum rnum"
					+ " 		  from(select * from MEMBER_INFO "
					+ " 			   where mem_id != 'admin'"
					+ " 			   order by mem_id) b"
					+ 			")"
					+ " where rnum>=? and rnum<=?";
			pstmt = con.prepareStatement(sql);
			
			int startrow = (page - 1 ) * limit + 1;
							
			int endrow = startrow + limit - 1;
							
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Member m = new Member();
				m.setMem_id(rs.getString("mem_id"));
				m.setMem_password(rs.getString(2));
				m.setMem_name(rs.getString(3));
				m.setMem_nickname(rs.getString(4));
				m.setMem_gender(rs.getString(5));
				m.setMem_tel(rs.getInt(6));
				m.setMem_email(rs.getString(7));
				m.setMem_birth(rs.getInt(8));
				m.setMem_address(rs.getString(9));
				m.setMem_type(rs.getInt(10));
				m.setMem_expt(rs.getString(11));
			    
				list.add(m);
			}
		}catch(SQLException ex) {
			ex.printStackTrace();
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			
		}
		return list;
	}




	public int getListCount(String field, String value) {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		int x = 0;
		try {
			con = ds.getConnection();
			String sql = "select count(*) from MEMBER_INFO "
						+"where mem_id != 'admin' "
						+ "and " + field + " like ?";
			System.out.println(sql);
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%"+value+"%");
			rs = pstmt.executeQuery();
			if(rs.next()) {
				x= rs.getInt(1);
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			System.out.println("getListCount() 에러 : " + ex);
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			
		}
		return x;
	}




	public List<Member> getList(String filed, String value, int page, int limit) {
		List<Member> list = new ArrayList<Member>();
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		try {
			con = ds.getConnection();
			
			String sql =   "select * "
					+ " 	from (select b.*, rownum rnum"
					+ " 		  from(select * from MEMBER_INFO "
					+ " 			   where mem_id != 'admin' "
					+ " 			   and "+filed+" like ? "
					+ " 			   order by mem_id) b"
					+ 			")"
					+ " where rnum between ? and ?";
			System.out.println(sql);
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%"+value+"%");
			
			int startrow = (page - 1 ) * limit + 1;
						
			int endrow = startrow + limit - 1;
							
			pstmt.setInt(2, startrow);
			pstmt.setInt(3, endrow);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Member m = new Member();
				m.setMem_id(rs.getString("mem_id"));
				m.setMem_password(rs.getString(2));
				m.setMem_name(rs.getString(3));
				m.setMem_nickname(rs.getString(4));
				m.setMem_gender(rs.getString(5));
				m.setMem_tel(rs.getInt(6));
				m.setMem_email(rs.getString(7));
				m.setMem_birth(rs.getInt(8));
				m.setMem_address(rs.getString(9));
				m.setMem_type(rs.getInt(10));
				m.setMem_expt(rs.getString(11));
				list.add(m);
			}
		}catch(SQLException ex) {
			ex.printStackTrace();
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			
		}
		return list;
	}




	public int delete(String mem_id) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		try {
			con = ds.getConnection();
			String delete_sql = "delete from MEMBER_INFO where mem_id=?";
			pstmt = con.prepareStatement(delete_sql);
			pstmt.setString(1, mem_id);		
			result=pstmt.executeUpdate();
		}catch(Exception ex) {
			ex.printStackTrace();
		}finally {
			
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
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
			con = ds.getConnection();
			String sql = "select mem_id from MEMBER_INFO where mem_id = ? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, mem_id);		
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				result = 0; 
			}
		}catch(Exception ex) {
			ex.printStackTrace();
		}finally {
			if(rs != null)
				try {
					rs.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			if(con != null)
				try {
					con.close();
				}catch(SQLException ex) {
					ex.printStackTrace();
				}
			
		}
		return result;
	}





}