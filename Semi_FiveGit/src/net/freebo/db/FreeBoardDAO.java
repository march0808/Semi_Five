package net.freebo.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import net.freebo.db.FreeBoardBean;


public class FreeBoardDAO {
	private DataSource ds;
	
	// 생성자에서 JNDI 리소스를 참조하여 Connection 객체를 얻어옵니다.
	public FreeBoardDAO() {
		try {
			Context init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		}catch(Exception ex) {
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
	}
	public int getListCount() {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		int x =0;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select count(*) from free_board");
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				x = rs.getInt(1);
			}
		} catch (Exception ex) {
			System.out.println("getListCount() 에러:" +ex);
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
	public int getListCount(int type) {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		int x =0;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select count(*) from free_board where free_board_type =?");
			pstmt.setInt(1, type);
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				x = rs.getInt(1);
			}
		} catch (Exception ex) {
			System.out.println("getListCount() 에러:" +ex);
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

	public List<FreeBoardBean> getBoardList(int page, int limit) {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		
		
		String board_list_sql ="select * from "
							+ " (select rownum rnum,FREE_BOARD_IDX, MEM_NICKNAME,"
							+ "	 FREE_BOARD_TITLE, FREE_BOARD_CONTENT, FREE_HIT,"
							+ "  FREE_REG_DT, FREE_MOD_DT, FREE_RCMND_COUNT,"
							+ "  FREE_BOARD_FILE, FREE_BOARD_TYPE"
							+ "  from (select * from free_board "
							+ "        order by FREE_BOARD_IDX desc) "
							+ "		) "
							+ " where rnum>=? and rnum<=?";
		List<FreeBoardBean> list = new ArrayList<FreeBoardBean>();
		// 한 페이지당 10개씩 목록인 경우                                            1페이지, 2페이지, 3페이지
		int startrow = (page - 1) * limit + 1; 	// 읽기 시작할 row 번호(1 11 21 31 ...
		int endrow = startrow + limit - 1; 		// 읽을 마지막 row 번호(10 20 30 40 ...
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(board_list_sql);
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();
			
			// DB에서 가져온 데이터를 VO객체에 담습니다.
			while (rs.next()) {
				FreeBoardBean board = new FreeBoardBean();
				board.setFree_board_idx(rs.getInt("FREE_BOARD_IDX"));
				board.setMem_nickname(rs.getString("MEM_NICKNAME"));
				board.setFree_board_title(rs.getString("FREE_BOARD_TITLE"));
				board.setFree_board_content(rs.getString("FREE_BOARD_CONTENT"));
				board.setFree_hit(rs.getInt("FREE_HIT"));
				board.setFree_reg_dt(rs.getString("FREE_REG_DT"));
				board.setFree_rcmnd_count(rs.getInt("FREE_RCMND_COUNT"));
				board.setFree_board_file(rs.getString("FREE_BOARD_FILE"));
				board.setFree_board_type(rs.getInt("FREE_BOARD_TYPE"));
				list.add(board); //값을 담은 객체를 리스트에 저장합니다.
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			System.out.println("getBoardList() 에러 : " + ex);
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
	public List<FreeBoardBean> getBoardList2(int page, int limit, int type) {
		Connection con=null;
		PreparedStatement pstmt=null;
		ResultSet rs = null;
		
		
		String board_list_sql ="select * from "
							+ " (select rownum rnum,FREE_BOARD_IDX, MEM_NICKNAME,"
							+ "	 FREE_BOARD_TITLE, FREE_BOARD_CONTENT, FREE_HIT,"
							+ "  FREE_REG_DT, FREE_MOD_DT, FREE_RCMND_COUNT,"
							+ "  FREE_BOARD_FILE, FREE_BOARD_TYPE"
							+ "  from (select * from free_board "
							+ "        order by FREE_BOARD_IDX desc) "
							+ "		) "
							+ " where rnum>=? and rnum<=? "
							+ " and FREE_BOARD_TYPE=? ";
		
		List<FreeBoardBean> list = new ArrayList<FreeBoardBean>();
		// 한 페이지당 10개씩 목록인 경우                                            1페이지, 2페이지, 3페이지
		int startrow = (page - 1) * limit + 1; 	// 읽기 시작할 row 번호(1 11 21 31 ...
		int endrow = startrow + limit - 1; 		// 읽을 마지막 row 번호(10 20 30 40 ...
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(board_list_sql);
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			pstmt.setInt(3, type);
			rs = pstmt.executeQuery();
			
			// DB에서 가져온 데이터를 VO객체에 담습니다.
			while (rs.next()) {
				FreeBoardBean board = new FreeBoardBean();
				board.setFree_board_idx(rs.getInt("FREE_BOARD_IDX"));
				board.setMem_nickname(rs.getString("MEM_NICKNAME"));
				board.setFree_board_title(rs.getString("FREE_BOARD_TITLE"));
				board.setFree_board_content(rs.getString("FREE_BOARD_CONTENT"));
				board.setFree_hit(rs.getInt("FREE_HIT"));
				board.setFree_reg_dt(rs.getString("FREE_REG_DT"));
				board.setFree_rcmnd_count(rs.getInt("FREE_RCMND_COUNT"));
				board.setFree_board_file(rs.getString("FREE_BOARD_FILE"));
				board.setFree_board_type(rs.getInt("FREE_BOARD_TYPE"));
				list.add(board); //값을 담은 객체를 리스트에 저장합니다.
			}
		}catch(Exception ex) {
			ex.printStackTrace();
			System.out.println("getBoardList() 에러 : " + ex);
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
	public boolean boardInsert(FreeBoardBean board) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result=0;
		try {
			con = ds.getConnection();
			
			String max_sql = "(select nvl(max(free_board_idx),0)+1 from free_board)";
			
			// 원문글의 BOARD_RE_REF 필드는 자신의 글번호 입니다.
			String sql = "insert into free_board "
					   + "(free_board_idx, mem_nickname, free_board_title, free_board_content,"
					   + " free_board_file, free_board_type,free_hit)"
					   + " values(" + max_sql + ",?,?,?,"
					   + " ?,?,?)";
			
			//새로운 글을 등록하는 부분입니다.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getMem_nickname());
			pstmt.setString(2, board.getFree_board_title());
			pstmt.setString(3, board.getFree_board_content());
			pstmt.setString(4, board.getFree_board_file());
			pstmt.setInt(5, board.getFree_board_type());
			pstmt.setInt(6, 0); // BOARD_READCOUNT 필드
			

			
			result = pstmt.executeUpdate();
			if(result == 1 ) {
				System.out.println("데이터 삽입이 모두 완료되었습니다.");
				return true;
			}
		}catch(Exception ex) {
			System.out.println("boardInsert() 에러: " +ex);
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
		return false;
	}
	public void setReadCountUpdate(int num) {
		Connection con = null;
		PreparedStatement pstmt = null;
		
		String sql = "update free_board "
				   + "set FREE_HIT=FREE_HIT+1 "
				   + "where FREE_BOARD_IDX = ?";
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate();
		} catch(SQLException ex) {
			System.out.println("setReadCountUpdate() 에러 : " + ex);
		} finally {
			
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
		
		
	}
	public FreeBoardBean getDetail(int num) {
		FreeBoardBean board =null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select * from free_board where Free_board_idx = ?");
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				board = new FreeBoardBean();
				board.setFree_board_idx(rs.getInt("FREE_BOARD_IDX"));
				board.setMem_nickname(rs.getString("MEM_NICKNAME"));
				board.setFree_board_title(rs.getString("FREE_BOARD_TITLE"));
				board.setFree_board_content(rs.getString("FREE_BOARD_CONTENT"));
				board.setFree_board_file(rs.getString("FREE_BOARD_FILE"));
				board.setFree_hit(rs.getInt("FREE_HIT"));
				board.setFree_reg_dt(rs.getString("FREE_REG_DT"));
				board.setFree_mod_dt(rs.getString("FREE_MOD_DT"));
			}
		}catch(Exception ex) {
			System.out.println("getDetail() 에러: " + ex );
		} finally {
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
		return board;
	}
	public int boardDelete(int num) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result=0;
		
		String board_delete_sql = 
					"delete from free_board "
				   +"where FREE_BOARD_IDX=? ";
		try {
			con =ds.getConnection();
			pstmt = con.prepareStatement(board_delete_sql);
			pstmt.setInt(1,num);
			result=pstmt.executeUpdate();
			if(result==1) {
			System.out.println("글 삭제 완료");
			}
		}catch (Exception ex) {
			System.out.println("boardDelete() 에러 : " + ex);
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
	public boolean boardModify(FreeBoardBean boarddata) {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "update free_board "
						 + "set free_board_title=?, free_board_content=?, free_board_file=? "
						 + "where free_board_idx=? ";
		try {
			con =ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1,  boarddata.getFree_board_title());
			pstmt.setString(2,  boarddata.getFree_board_content());
			pstmt.setString(3,  boarddata.getFree_board_file());
			pstmt.setInt(4,  boarddata.getFree_board_idx());
			int result = pstmt.executeUpdate();
			if(result == 1) {
				System.out.println("업데이트 성공");
				return true;
			}
		}catch (Exception ex) {
			System.out.println("boardModify() 에러 : " + ex);
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
		return false;
	}

	
	
}
