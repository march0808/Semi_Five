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
	
	// �����ڿ��� JNDI ���ҽ��� �����Ͽ� Connection ��ü�� ���ɴϴ�.
	public MemberDAO() {
		try {
			Context init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		}catch(Exception ex) {
			System.out.println("DB ���� ���� : " + ex);
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
					"INSERT INTO member (id, password, name, age, gender, email)"
					+ "VALUES (?,?,?,?,?,?)");
			pstmt.setString(1, m.getId());
			pstmt.setString(2, m.getPassword());
			pstmt.setString(3, m.getName());
			pstmt.setInt(4, m.getAge());
			pstmt.setString(5, m.getGender());
			pstmt.setString(6, m.getEmail());
			result = pstmt.executeUpdate();//���� ������ result�� 1
			
		//primary key �������� �������� ��� �߻��ϴ� ����
		}catch(java.sql.SQLIntegrityConstraintViolationException e) {
			result = -1;
			System.out.println("��� ���̵� �ߺ� �����Դϴ�.");
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
	}//insert end




	public int isId(String id, String pass) {
		Connection con =null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int result=-1; //���̵� �������� �ʽ��ϴ�.
		try {
			con = ds.getConnection();
			
			String sql = "select id, password from member where id =? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				if(rs.getString(2).equals(pass)) {
					result = 1; // ���̵�� ��й�ȣ ��ġ�ϴ� ���
				}else {
					result = 0; //��й�ȣ�� ��ġ���� �ʴ� ���
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




	public Member member_info(String id) {
		Member m = null;
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		try {
			con = ds.getConnection();
			
			String sql = "select * from member where id = ? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				m = new Member();
				m.setId(rs.getString(1));
				m.setPassword(rs.getString(2));
				m.setName(rs.getString(3));
				m.setAge(rs.getInt(4));
				m.setGender(rs.getString(5));
				m.setEmail(rs.getString(6));
				m.setMemberfile(rs.getString(7));
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
					"update member set name=?,age=?,gender=?,email=?,memberfile=? where id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, m.getName());
			pstmt.setInt(2, m.getAge());
			pstmt.setString(3, m.getGender());
			pstmt.setString(4, m.getEmail());
			pstmt.setString(5, m.getMemberfile());
			pstmt.setString(6, m.getId());
			result = pstmt.executeUpdate();//���� ������ result�� 1
			
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
			pstmt = con.prepareStatement("select count(*) from member where id != 'admin'");
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				x= rs.getInt(1);
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			System.out.println("getListCount() ���� : " + ex);
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
					+ " 		  from(select * from member "
					+ " 			   where id != 'admin'"
					+ " 			   order by id) b"
					+ 			")"
					+ " where rnum>=? and rnum<=?";
			pstmt = con.prepareStatement(sql);
			// �� �������� 10���� ����� ��� 1������, 2������, 3������, 4������ ...
			int startrow = (page - 1 ) * limit + 1;
							// �б� ������ row ��ȣ (1 11 21 31 ...
			int endrow = startrow + limit - 1;
							// ���� ������ row ��ȣ(10 20 30 40 ...
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Member m = new Member();
				m.setId(rs.getString("id"));
				m.setPassword(rs.getString(2));
				m.setName(rs.getString(3));
				m.setAge(rs.getInt(4));
				m.setGender(rs.getString(5));
				m.setEmail(rs.getString(6));
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
			String sql = "select count(*) from member "
						+"where id != 'admin' "
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
			System.out.println("getListCount() ���� : " + ex);
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
					+ " 		  from(select * from member "
					+ " 			   where id != 'admin' "
					+ " 			   and "+filed+" like ? "
					+ " 			   order by id) b"
					+ 			")"
					+ " where rnum between ? and ?";
			System.out.println(sql);
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, "%"+value+"%");
			// �� �������� 10���� ����� ��� 1������, 2������, 3������, 4������ ...
			int startrow = (page - 1 ) * limit + 1;
							// �б� ������ row ��ȣ (1 11 21 31 ...
			int endrow = startrow + limit - 1;
							// ���� ������ row ��ȣ(10 20 30 40 ...
			pstmt.setInt(2, startrow);
			pstmt.setInt(3, endrow);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				Member m = new Member();
				m.setId(rs.getString("id"));
				m.setPassword(rs.getString(2));
				m.setName(rs.getString(3));
				m.setAge(rs.getInt(4));
				m.setGender(rs.getString(5));
				m.setEmail(rs.getString(6));
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




	public int delete(String id) {
		Connection con=null;
		PreparedStatement pstmt=null;
		int result=0;
		try {
			con = ds.getConnection();
			String delete_sql = "delete from member where id=?";
			pstmt = con.prepareStatement(delete_sql);
			pstmt.setString(1, id);		
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




	public int isId(String id) {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int result=-1;//DB�� �ش� id�� �����ϴ�.
		try {
			con = ds.getConnection();
			String sql = "select id from member where id = ? ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);		
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				result = 0; // DB�� �ش� id�� �ֽ��ϴ�.
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
