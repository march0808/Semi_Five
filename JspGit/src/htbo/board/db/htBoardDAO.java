// Ʈ����� ��� 
package htbo.board.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class htBoardDAO {
	private DataSource ds;

	// �����ڿ��� JNDI ���ҽ��� �����Ͽ� Connection ��ü�� ���ɴϴ�.
	public htBoardDAO() {
		try {
			Context init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		} catch (Exception ex) {
			System.out.println("DB ���� ���� : " + ex);
			return;
		}
	}

	// �� ��� ����
	public List<htBoardBean> getHtboardList(int page, int limit) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		// page : ������
		// limit : ������ �� ����� ��
		// board_re_ref desc, board_re_seq asc�� ���� ������ ����
		// �������� �´� rnum�� ���� ��ŭ �������� �������Դϴ�.

		String ht_board_list_sql = "select * from" + " (select rownum rnum,HT_NICKNAME,HT_BOARD_IDX, HT_BOARD_TYPE,"
				+ " HT_BOARD_TITLE, HT_BOARD_CONTENT, HT_BOARD_FILE," 
				+ " HT_RE_REF, HT_RE_LEV, HT_RE_SEQ, HT_BOARD_RCMND_COUNT,"
				+ " HT_HIT, HT_REG_DT, HT_MOD_DT" + " from (select * from htbo"
				+ "       order by HT_RE_REF desc,"
				+ "       HT_RE_SEQ asc) " + "  )" + "where rnum>=? and rnum<=?";
		List<htBoardBean> list = new ArrayList<htBoardBean>();
		// �� �������� 10���� ����� ��� 1������, 2������, 3������, 4������ ...
		int startrow = (page - 1) * limit + 1; // �б� ������ row ��ȣ(1 11 21 31 ....
		int endrow = startrow + limit - 1;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(ht_board_list_sql);
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();

			// DB���� ������ �����͸� VO��ü�� ����ϴ�.
			while (rs.next()) {
				htBoardBean htboard = new htBoardBean();
				htboard.setHt_nickname(rs.getString("HT_NICKNAME"));
				htboard.setHt_board_idx(rs.getInt("HT_BOARD_IDX"));
				htboard.setHt_board_type(rs.getString("HT_BOARD_TYPE"));
				htboard.setHt_board_title(rs.getString("HT_BOARD_TITLE"));
				htboard.setHt_board_content(rs.getString("HT_BOARD_CONTENT"));
				htboard.setHt_board_file(rs.getString("HT_BOARD_FILE"));
				htboard.setHt_hit(rs.getInt("HT_HIT"));
				htboard.setHt_board_rcmnd_count(rs.getInt("HT_BOARD_RCMND_COUNT"));
				htboard.setHt_reg_dt(rs.getString("HT_REG_DT"));
				htboard.setHt_mod_dt(rs.getString("HT_MOD_DT"));
				htboard.setHt_re_lev(rs.getInt("HT_RE_LEV"));
				list.add(htboard); // ���� ���� ��ü�� ����Ʈ�� �����մϴ�.
			}

		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("getBoardList() ���� : " + ex);
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return list;
	}// getBoardList()�޼��� end

	public int getListCount() {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int x = 0;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select count(*) from htbo");
			rs = pstmt.executeQuery();

			if (rs.next()) {
				x = rs.getInt(1);
			}
		} catch (Exception ex) {
			System.out.println("getListCount() ����: " + ex);
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (con != null)
				try {
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return x;
	}

	public boolean htboardInsert(htBoardBean htbo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;
		try {
			con = ds.getConnection();

			String max_sql = "(select nvl(max(ht_board_idx),0)+1 from htbo)";

			// �������� BOARD_RE_REF �ʵ�� �ڽ��� �۹�ȣ �Դϴ�.
			String sql = "insert into htbo " 
			+ "(HT_BOARD_IDX, HT_BOARD_DETAIL_TYPE, HT_BOARD_PASS,  HT_BOARD_TITLE,"
					+ " HT_BOARD_CONTENT, HT_BOARD_FILE, HT_RE_REF," 
					+ " HT_RE_LEV,  HT_RE_SEQ, HT_BOARD_RCMND_COUNT,HT_NICKNAME)"
					+ " values(" + max_sql + ",?,?,?," 
					+ "        ?,?," + max_sql 
					+ "," + "        ?,?,?,?)";

			// ���ο� ���� ����ϴ� �κ��Դϴ�.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, htbo.getHt_board_detail_type());
			pstmt.setString(2, htbo.getHt_board_pass());
			pstmt.setString(3, htbo.getHt_board_title());
			pstmt.setString(4, htbo.getHt_board_content());
			pstmt.setString(5, htbo.getHt_board_file());

			// ������ ��� HT_RE_LEV, HT_RE_SEQ �ʵ� ���� 0�Դϴ�.
			pstmt.setInt(6, 0); // HT_RE_LEV �ʵ�
			pstmt.setInt(7, 0); // HT_RE_SEQ �ʵ�
			pstmt.setInt(8, 0); // HT_BOARD_RCMND_COUNT �ʵ�
			pstmt.setString(9,htbo.getHt_nickname());

			result = pstmt.executeUpdate();
			if (result == 1) {
				System.out.println("������ ������ ��� �Ϸ�Ǿ����ϴ�.");
				return true;
			}
		} catch (Exception ex) {
			System.out.println("htboardInsert()����: " + ex);
			ex.printStackTrace();
		} finally {
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (con != null)
				try {
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return false;
	}// htboardInsert()�޼��� end
	
	
	// �� ���� 
	public boolean htboardDelete(int num) {
		Connection con = null;
		PreparedStatement pstmt = null, pstmt2 = null;
		ResultSet rs = null;
		String select_sql = "select HT_RE_REF, HT_RE_LEV, HT_RE_SEQ "
		         + " from htbo" 
                + " where HT_BOARD_IDX=?";

         String board_delete_sql = "delete from htbo" 
       + "			 where  HT_RE_REF = ?"
		+ "			 and    HT_RE_LEV >=?" 
       + "			 and    HT_RE_SEQ >=?"
		+ "			 and    HT_RE_SEQ <=("
		+ "			                      nvl((SELECT min(ht_re_seq)-1"
		+ "			                           FROM   htbo"
		+ "			                           WHERE  HT_RE_REF=?"
		+ "			                           AND    HT_RE_LEV=?"
		+ "			                           AND    HT_RE_SEQ>?) , "
		+ "			                           (SELECT max(ht_re_seq) "
		+ "			                            FROM   htbo"
		+ "			                            WHERE  HT_RE_REF=? ))"
		+ "				                   )";
	   boolean result_check = false;
	   try {
		   con = ds.getConnection();
		   pstmt = con.prepareStatement(select_sql);
		   pstmt.setInt(1, num);
		   rs = pstmt.executeQuery();
		   if (rs.next()) {
			   pstmt2 =con.prepareStatement(board_delete_sql);
			   pstmt2.setInt(1, rs.getInt("HT_RE_REF"));
			   pstmt2.setInt(2, rs.getInt("HT_RE_LEV"));
			   pstmt2.setInt(3, rs.getInt("HT_RE_SEQ"));
			   pstmt2.setInt(4, rs.getInt("HT_RE_REF"));
			   pstmt2.setInt(5, rs.getInt("HT_RE_LEV"));
			   pstmt2.setInt(6, rs.getInt("HT_RE_SEQ"));
			   pstmt2.setInt(7, rs.getInt("HT_RE_REF"));
			   
			   int count=pstmt2.executeUpdate();
			   
			   if(count>=1)
				   result_check = true; // ������ �ȵ� ��쿡�� false�� ��ȯ�մϴ�.
		   }
	   } catch (Exception ex) {
		   System.out.println("htboardDelete() ����: " + ex);
		   ex.printStackTrace();
	   } finally {
             if (rs != null)
            	 try {
						rs.close();
					} catch (SQLException ex) {
						ex.printStackTrace();
					}
				if(pstmt != null)
					try {
						pstmt.close();
					} catch (SQLException ex) {
						ex.printStackTrace();
					}
				if (con != null)
					try {
						con.setAutoCommit(true);
						con.close();
					} catch (SQLException ex) {
						ex.printStackTrace();
					}
			}
	   return result_check;
       }// htboardDelete()�޼��� end

	// ��ȸ�� ������Ʈ - �۹�ȣ�� �ش��ϴ� ��ȸ���� 1 �����մϴ�. 
	public void setHitUpdate(int num) {
		Connection con = null;
		PreparedStatement pstmt = null;

		String sql = "update htbo" + " set HT_HIT=HT_HIT+1 " + "where HT_BOARD_IDX = ? ";
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate();
		} catch (SQLException ex) {
			System.out.println("setHitUpdate() ���� : " + ex);
		} finally {
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}

	}

	// �� ���� ����
	public htBoardBean getDetail(int num) {
		htBoardBean htbo = null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select * from htbo where HT_BOARD_IDX = ?");
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				htbo = new htBoardBean();
				htbo.setHt_board_idx(rs.getInt("HT_BOARD_IDX"));
				htbo.setHt_nickname(rs.getString("HT_NICKNAME"));
				htbo.setHt_board_type(rs.getString("HT_BOARD_TYPE"));
				htbo.setHt_board_detail_type(rs.getString("HT_BOARD_DETAIL_TYPE"));
				htbo.setHt_board_pass(rs.getString("HT_BOARD_PASS"));
				htbo.setHt_board_title(rs.getString("HT_BOARD_TITLE"));
				htbo.setHt_board_content(rs.getString("HT_BOARD_CONTENT"));
				htbo.setHt_board_file(rs.getString("HT_BOARD_FILE"));
				htbo.setHt_re_ref(rs.getInt("HT_RE_REF"));
				htbo.setHt_re_lev(rs.getInt("HT_RE_LEV"));
				htbo.setHt_re_seq(rs.getInt("HT_RE_SEQ"));
				htbo.setHt_hit(rs.getInt("HT_HIT"));
				htbo.setHt_board_rcmnd_count(rs.getInt("HT_BOARD_RCMND_COUNT"));
				htbo.setHt_reg_dt(rs.getString("HT_REG_DT"));
				htbo.setHt_mod_dt(rs.getString("HT_MOD_DT"));

			}
		} catch (Exception ex) {
			System.out.println("getDetail() ����: " + ex);
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (con != null)
				try {
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return htbo;
	}// getDetail()�޼��� end

	public int htboardReply(htBoardBean htbo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		int num=0;

		// board ���̺��� �۹�ȣ�� ���ϱ� ���� Board_num�� �ʵ��� �ִ밪�� ���ؿɴϴ�.
		String htbo_max_sql = "select max(ht_board_idx)+1 from htbo";
		/*
		 * �亯�� �� ���� �� �׷� ��ȣ�Դϴ�.
		 * �亯�� �ް� �Ǹ� �亯 ���� �� ��ȣ�� ���� ���ñ� ��ȣ�� ����ó���Ǹ鼭 ���� �׷쿡 ���ϰ� �˴ϴ٤�.
		 * �� ��Ͽ��� �����ٶ� �ϳ��� �׷����� ������ ��µ˴ϴ�.
		 */
		
		int re_ref = htbo.getHt_re_ref();
		
		/*
		 * ����� ���̸� �ǹ��մϴ�.
		 * ������ ���� ����� ��µ� �� �� �� �鿩���� ó���� �ǰ� ��ۿ� ���� ����� �鿩���Ⱑ �� �� ó���ǰ� �մϴ�.
		 * ������ ��쿡�� �� ���� 0�̰� ������ ����� 1, ����� ����� 2�� �˴ϴ�.
		 */
		int re_lev = htbo.getHt_re_lev();
		
		//���� ���� �� �߿��� �ش� ���� ��µǴ� �����Դϴ�.
		int re_seq = htbo.getHt_re_seq();
		
		try {
			con = ds.getConnection();
			
			// Ʈ������� �̿��ϱ� ���ؼ� setAutoCommit�� false�� �����մϴ�.
	        con.setAutoCommit(false);
            pstmt=con.prepareStatement(htbo_max_sql);
            rs=pstmt.executeQuery();
            if(rs.next()) {
            	num=rs.getInt(1);
            }
            pstmt.close();
            
            
            // BOARD_RE_REF, BOARE_RE_SEQ ���� Ȯ���Ͽ� ���� �ۿ� �ٸ� �亯�� ������
            // �ٸ� ��۵��� BOARD_RE_SEQ���� 1�� ������ŵ�ϴ�.
            // ���� ���� �ٸ� ��ۺ��� �տ� ��µǰ� �ϱ����ؼ� �Դϴ�.
            String sql = "update htbo"
            		   + " set HT_RE_SEQ=HT_RE_SEQ +1 "
            		   + " where HT_RE_REF =? "
            		   + " and HT_RE_SEQ > ? ";
            
            pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, re_ref);
			pstmt.setInt(2, re_seq);
			pstmt.executeUpdate();
			pstmt.close();

            // ����� �亯 ���� HT_RE_LEV, HT_RE_SEQ ���� ���� �ۺ��� 1��
			// ������ŵ�ϴ�. 
			re_seq = re_seq + 1;
			re_lev = re_lev + 1;
			
			sql = "insert into htbo "
			    + "(Ht_board_idx, Ht_board_type, Ht_board_pass, Ht_board_title,"
				+ " Ht_board_content, Ht_board_file, Ht_re_ref,"
			    + " Ht_re_lev, Ht_re_seq, Ht_hit, Ht_nickname) "
				+ " values(" + num + ","
				+ " ?,?,?,"
				+ " ?,?,?,"
				+ " ?,?,?,?)";
			System.out.println(sql);
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, htbo.getHt_board_type());
			pstmt.setString(2, htbo.getHt_board_pass());
			pstmt.setString(3, htbo.getHt_board_title());
			pstmt.setString(4, htbo.getHt_board_content());
			pstmt.setString(5, ""); // �亯���� ������ ���ε����� �ʽ��ϴ�.
			pstmt.setInt(6, re_ref); //������ �۹�ȣ 
			pstmt.setInt(7, re_lev);
			pstmt.setInt(8, re_seq);
			pstmt.setInt(9, 0);//BOARD_READCOUNT(��ȸ��)�� 0
			pstmt.setString(10, htbo.getHt_nickname());
			if (pstmt.executeUpdate() == 1) {
				con.commit(); //commit�մϴ�.
			} else {
				con.rollback();
			}
		} catch (SQLException ex) {
			ex.printStackTrace();
			System.out.println("htboardReply() ����: " + ex);
			if(con != null) {
				try {
					con.rollback(); //rollback�մϴ�. 
				}catch (SQLException e) {
					e.printStackTrace();
				}
			}
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if(pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (con != null)
				try {
					con.setAutoCommit(true);
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return num;
	}// htboardReply()�޼��� end

	// �۾������� Ȯ�� - ��й�ȣ�� Ȯ���մϴ�. 
	public boolean isBoardWriter(int num, String pass) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs=null;
		boolean result = false;
		String board_sql = "selectHT_BOARD_PASS from htbo where HT_BOARD_IDX=?";
		try {
			 con = ds.getConnection();
			 pstmt = con.prepareStatement(board_sql);
			 pstmt.setInt(1, num);
			 rs = pstmt.executeQuery();
			 if (rs.next()) {
				 if (pass.equals(rs.getString("HT_BOARD_PASS"))) {
					 result = true;
					 }
				 }
			 } catch (SQLException ex) {
				 System.out.println("ishtBoardWriter() ����: " + ex);
			 } finally {
					if (rs != null)
						try {
							rs.close();
						} catch (SQLException ex) {
							ex.printStackTrace();
						}
					if(pstmt != null)
						try {
							pstmt.close();
						} catch (SQLException ex) {
							ex.printStackTrace();
						}
					if (con != null)
						try {
							con.setAutoCommit(true);
							con.close();
						} catch (SQLException ex) {
							ex.printStackTrace();
						}
				}
		return result;
	}
 
	// �� ���� 
	public boolean htboardModify(htBoardBean modifyboard) {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "update htbo "
				   + "set HT_BOARD_TITLE=?, HT_BOARD_CONTENT=?, HT_BOARD_FILE=? "
				   + "where HT_BOARD_IDX=? ";
		try {
			 con = ds.getConnection();
			 pstmt = con.prepareStatement(sql);
			 pstmt.setString(1, modifyboard.getHt_board_title());
			 pstmt.setString(2, modifyboard.getHt_board_content());
			 pstmt.setString(3, modifyboard.getHt_board_file());
			 pstmt.setInt(4, modifyboard.getHt_board_idx());
			 int result = pstmt.executeUpdate();
			 if (result == 1) {
				 System.out.println("���� ������Ʈ");
				 return true;
			 }
		} catch (Exception ex) {
			System.out.println("htboardModify() ����: " + ex);
		} finally {
			if(pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
			if (con != null)
				try {
					con.setAutoCommit(true);
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		 }
         return false;
      }// boardModify()�޼��� end 

	
	
}
