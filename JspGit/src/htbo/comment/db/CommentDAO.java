package htbo.comment.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import htbo.board.db.htBoardBean;

public class CommentDAO {
	private DataSource ds;

	public CommentDAO() {
		try {
			Context init = new InitialContext();
			ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		} catch (Exception ex) {
			System.out.println("DB ���� ���� : " + ex);
			return;
		}
	}

	// ��� ����ϱ�
	public int commentsInsert(Comment c) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;
		try {
			con = ds.getConnection();

			String sql = "insert into comm " + " values(comm_seq.nextval, ?, ?, sysdate, ?, ?, ?, comm_seq.nextval)";

			// ���ο� ���� ����ϴ� �κ��Դϴ�.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, c.getId());
			pstmt.setString(2, c.getContent());
			pstmt.setInt(3, c.getComment_board_num());
			pstmt.setInt(4, c.getComment_re_lev());
			pstmt.setInt(5, c.getComment_re_seq());

			result = pstmt.executeUpdate();
			if (result == 1)
				System.out.println("�����ͻ����� �Ϸ�Ǿ����ϴ�.");
		} catch (Exception e) {
			e.printStackTrace();
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
		return result;
	}

	// �� ��� ����
	public List<htBoardBean> getBoardList(int page, int limit) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		// page : ������
		// limit : ������ �� ����� ��
		// board_re_ref desc, board_re_seq asc�� ���� ������ ����
		// �������� �´� rnum�� ���� ��ŭ �������� �������Դϴ�.

		String board_list_sql = "select * from" + " (select rownum rnum, BOARD_NUM, BOARD_NAME,"
				+ " BOARD_SUBJECT, BOARD_CONTENT, BOARD_FILE," + " BOARD_RE_REF, BOARD_RE_LEV, BOARD_RE_SEQ,"
				+ " BOARD_READCOUNT, BOARD_DATE" + " from (select * from board " + "       order by BOARD_RE_REF desc,"
				+ "       BOARD_RE_SEQ asc) " + "  )" + "where rnum>=? and rnum<=?";
		List<htBoardBean> list = new ArrayList<htBoardBean>();
		// �� �������� 10���� ����� ��� 1������, 2������, 3������, 4������ ...
		int startrow = (page - 1) * limit + 1; // �б� ������ row ��ȣ(1 11 21 31 ....
		int endrow = startrow + limit - 1;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(board_list_sql);
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();

			// DB���� ������ �����͸� VO��ü�� ����ϴ�.
			while (rs.next()) {
				htBoardBean board = new htBoardBean();
				board.setHt_board_idx(rs.getInt("HT_BOARD_IDX"));
				board.setHt_nickname(rs.getString("HT_NICKNAME"));
				board.setHt_board_title(rs.getString("HT_BOARD_TITLE"));
				board.setHt_board_content(rs.getString("HT_BOARD_CONTENT"));
				board.setHt_board_file(rs.getString("HT_BOARD_FILE"));
				board.setHt_re_ref(rs.getInt("HT_RE_REF"));
				board.setHt_re_lev(rs.getInt("HT_RE_LEV"));
				board.setHt_re_seq(rs.getInt("Ht_RE_SEQ"));
				board.setHt_hit(rs.getInt("HT_HIT"));
				board.setHt_reg_dt(rs.getString("HT_REG_DT"));
				list.add(board); // ���� ���� ��ü�� ����Ʈ�� �����մϴ�.
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

	public boolean boardInsert(htBoardBean htbo) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;
		try {
			con = ds.getConnection();

			String max_sql = "(select nvl(max(ht_board_idx),0)+1 from htbo)";

			// �������� BOARD_RE_REF �ʵ�� �ڽ��� �۹�ȣ �Դϴ�.
			String sql = "insert into htbo " + "(HT_BOARD_IDX, HT_NICKNAME,  HT_BOARD_PASS, HT_BOARD_TITLE,"
					+ " HT_BOARD_CONTENT, HT_BOARD_FILE,  HT_RE_REF," + " HT_RE_LEV,  HT_RE_SEQ,HT_HIT)"
					+ " values(" + max_sql + ",?,?,?," + "        ?,?," + max_sql + "," + "        ?,?,?)";

			// ���ο� ���� ����ϴ� �κ��Դϴ�.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, htbo.getHt_nickname());
			pstmt.setString(2, htbo.getHt_board_pass());
			pstmt.setString(3, htbo.getHt_board_title());
			pstmt.setString(4, htbo.getHt_board_content());
			pstmt.setString(5, htbo.getHt_board_file());

			// ������ ��� HT_RE_LEV, HT_RE_SEQ �ʵ� ���� 0�Դϴ�.
			pstmt.setInt(6, 0); // HT_RE_LEV �ʵ�
			pstmt.setInt(7, 0); // HT_RE_SEQ �ʵ�
			pstmt.setInt(8, 0); // HT_HIT �ʵ�

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
		String select_sql = "select HT_RE_REF, HT_RE_LEV, HT_RE_SEQ " + " from htbo" + " where HT_BOARD_IDX=?";

		String board_delete_sql = "delete from htbo" + "			 where  HT_RE_REF = ?"
				+ "			 and    HT_RE_LEV >=?" + "			 and    HT_RE_SEQ >=?"
				+ "			 and    HT_RE_SEQ <=("
				+ "			                      nvl((SELECT min(ht_re_seq)-1"
				+ "			                           FROM   HTBO  "
				+ "			                           WHERE  HT_RE_REF=?"
				+ "			                           AND    HT_RE_LEV=?"
				+ "			                           AND    HT_RE_SEQ>?) , "
				+ "			                           (SELECT max(ht_re_seq) "
				+ "			                            FROM   HTBO  "
				+ "			                            WHERE HT_RE_REF=? ))"
				+ "				                   )";
		boolean result_check = false;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(select_sql);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				pstmt2 = con.prepareStatement(board_delete_sql);
				pstmt2.setInt(1, rs.getInt("HT_RE_REF"));
				pstmt2.setInt(2, rs.getInt("HT_RE_LEV"));
				pstmt2.setInt(3, rs.getInt("HT_RE_SEQ"));
				pstmt2.setInt(4, rs.getInt("HT_RE_REF"));
				pstmt2.setInt(5, rs.getInt("HT_RE_LEV"));
				pstmt2.setInt(6, rs.getInt("HT_RE_SEQ"));
				pstmt2.setInt(7, rs.getInt("HT_RE_REF"));

				int count = pstmt2.executeUpdate();

				if (count >= 1)
					result_check = true; // ������ �ȵ� ��쿡�� false�� ��ȯ�մϴ�.
			}
		} catch (Exception ex) {
			System.out.println("boardDelete() ����: " + ex);
			ex.printStackTrace();
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
					con.setAutoCommit(true);
					con.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return result_check;
	}// boardDelete()�޼��� end

	// ��ȸ�� ������Ʈ - �۹�ȣ�� �ش��ϴ� ��ȸ���� 1 �����մϴ�.
	public void setReadCountUpdate(int num) {
		Connection con = null;
		PreparedStatement pstmt = null;

		String sql = "update board" + " set BOARD_READCOUNT=BOARD_READCOUNT+1 " + "where BOARD_NUM = ? ";
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.executeUpdate();
		} catch (SQLException ex) {
			System.out.println("setReadCountUpdate() ���� : " + ex);
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
		htBoardBean board = null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement("select * from board where BOARD_NUM = ?");
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				board = new htBoardBean();
				board.setHt_board_idx(rs.getInt("HT_BOARD_IDX"));
				board.setHt_nickname(rs.getString("HT_NICKNAME"));
				board.setHt_board_title(rs.getString("HT_BOARD_TITLE"));
				board.setHt_board_content(rs.getString("HT_BOARD_CONTENT"));
				board.setHt_board_file(rs.getString("HT_BOARD_FILE"));
				board.setHt_re_ref(rs.getInt("HT_RE_REF"));
				board.setHt_re_lev(rs.getInt("HT_RE_LEV"));
				board.setHt_re_seq(rs.getInt("HT_RE_SEQ"));
				board.setHt_hit(rs.getInt("HT_HIT"));
				board.setHt_reg_dt(rs.getString("HT_REG_DT"));

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
		return board;
	}// getDetail()�޼��� end

	public int htboardReply(htBoardBean board) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int num = 0;

		// board ���̺��� �۹�ȣ�� ���ϱ� ���� Board_num�� �ʵ��� �ִ밪�� ���ؿɴϴ�.
		String board_max_sql = "select max(ht_board_idx)+1 from htbo";
		/*
		 * �亯�� �� ���� �� �׷� ��ȣ�Դϴ�. �亯�� �ް� �Ǹ� �亯 ���� �� ��ȣ�� ���� ���ñ� ��ȣ�� ����ó���Ǹ鼭 ���� �׷쿡 ���ϰ�
		 * �˴ϴ٤�. �� ��Ͽ��� �����ٶ� �ϳ��� �׷����� ������ ��µ˴ϴ�.
		 */

		int re_ref = board.getHt_re_ref();

		/*
		 * ����� ���̸� �ǹ��մϴ�. ������ ���� ����� ��µ� �� �� �� �鿩���� ó���� �ǰ� ��ۿ� ���� ����� �鿩���Ⱑ �� �� ó���ǰ�
		 * �մϴ�. ������ ��쿡�� �� ���� 0�̰� ������ ����� 1, ����� ����� 2�� �˴ϴ�.
		 */
		int re_lev = board.getHt_re_lev();

		// ���� ���� �� �߿��� �ش� ���� ��µǴ� �����Դϴ�.
		int re_seq = board.getHt_re_seq();

		try {
			con = ds.getConnection();

			// Ʈ������� �̿��ϱ� ���ؼ� setAutoCommit�� false�� �����մϴ�.
			con.setAutoCommit(false);
			pstmt = con.prepareStatement(board_max_sql);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				num = rs.getInt(1);
			}
			pstmt.close();

			// BOARD_RE_REF, BOARE_RE_SEQ ���� Ȯ���Ͽ� ���� �ۿ� �ٸ� �亯�� ������
			// �ٸ� ��۵��� BOARD_RE_SEQ���� 1�� ������ŵ�ϴ�.
			// ���� ���� �ٸ� ��ۺ��� �տ� ��µǰ� �ϱ����ؼ� �Դϴ�.
			String sql = "update htbo" + " set HT_RE_SEQ=HT_RE_SEQ +1 " + " where HT_RE_REF =? "
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

			sql = "insert into htbo" + "(HT_BOARD_IDX, HT_NICKNAME, HT_BOARD_PASS, HT_BOARD_TITLE,"
					+ " HT_BOARD_CONTENT, HT_BOARD_FILE, HT_RE_REF," + " HT_RE_LEV, HT_RE_SEQ, HT_HIT) "
					+ " values(" + num + "," + " ?,?,?," + " ?,?,?," + " ?,?,?)";

			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, board.getHt_nickname());
			pstmt.setString(2, board.getHt_board_pass());
			pstmt.setString(3, board.getHt_board_title());
			pstmt.setString(4, board.getHt_board_content());
			pstmt.setString(5, ""); // �亯���� ������ ���ε����� �ʽ��ϴ�.
			pstmt.setInt(6, re_ref); // ������ �۹�ȣ
			pstmt.setInt(7, re_lev);
			pstmt.setInt(8, re_seq);
			pstmt.setInt(9, 0);// HT_HIT(��ȸ��)�� 0
			if (pstmt.executeUpdate() == 1) {
				con.commit(); // commit�մϴ�.
			} else {
				con.rollback();
			}
		} catch (SQLException ex) {
			ex.printStackTrace();
			System.out.println("htboardReply() ����: " + ex);
			if (con != null) {
				try {
					con.rollback(); // rollback�մϴ�.
				} catch (SQLException e) {
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
			if (pstmt != null)
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
	public boolean ishtBoardWriter(int num, String pass) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		boolean result = false;
		String board_sql = "select HT_BOARD_PASS from htbo where HT_BOARD_IDX=?";
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
			if (pstmt != null)
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
		String sql = "update htbo " + "set HT_BOARD_TITLE=?, HT_BOARD_CONTENT=?, HT_BOARD_FILE=? " + "where HT_BOARD_IDX=? ";
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
			if (pstmt != null)
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
	}// htboardModify()�޼��� end

	//��� ����Ʈ ���ϱ�
		public JsonArray getCommentList(int comment_board_num, int state) {
			Connection con = null;
			PreparedStatement pstmt=null;
			ResultSet rs = null;
			String sort ="asc";
			if(state==2) {
				sort="desc";
			}
			
			String sql="select num, comm.id, content, reg_date, comment_re_lev, "
					+ "	comment_re_seq, "
					+ "	comment_re_ref, member.memberfile "
					+ "	from comm join member "
					+ "	on comm.id=member.id "
					+ "	where comment_board_num = ? "
					+ "	order by comment_re_ref " + sort + ", "
					+ "	comment_re_seq asc";
			
			JsonArray array = new JsonArray();
			try {
				con = ds.getConnection();
				pstmt = con.prepareStatement(sql);
				pstmt.setInt(1, comment_board_num);
				rs = pstmt.executeQuery();
				
				while (rs.next()) {
					JsonObject object = new JsonObject();
					object.addProperty("num", rs.getInt(1));
					object.addProperty("id", rs.getString(2));
					object.addProperty("content", rs.getString(3));
					object.addProperty("reg_date", rs.getString(4));
					object.addProperty("comment_re_lev", rs.getInt(5));
					object.addProperty("comment_re_seq", rs.getInt(6));
					object.addProperty("comment_re_ref", rs.getInt(7));
					object.addProperty("memberfile", rs.getString(8));
					array.add(object);
				}
			} catch (Exception ex) {
				System.out.println("getCommentList()_CommentDAO ����: " + ex);
			} finally {
				if(rs != null)
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
			return array;	
		}
	

	// ���� ���� ���ϱ�
	public int getListCount(int HT_RE_REF) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int x = 0;
		String sql = "select count(*) " 
		           + " from comm where comment_board_num = ? ";
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, HT_RE_REF);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				x = rs.getInt(1);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
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

}
