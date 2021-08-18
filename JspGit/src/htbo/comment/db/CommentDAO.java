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
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
	}

	// 댓글 등록하기
	public int commentsInsert(Comment c) {
		Connection con = null;
		PreparedStatement pstmt = null;
		int result = 0;
		try {
			con = ds.getConnection();

			String sql = "insert into comm " + " values(comm_seq.nextval, ?, ?, sysdate, ?, ?, ?, comm_seq.nextval)";

			// 새로운 글을 등록하는 부분입니다.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, c.getId());
			pstmt.setString(2, c.getContent());
			pstmt.setInt(3, c.getComment_board_num());
			pstmt.setInt(4, c.getComment_re_lev());
			pstmt.setInt(5, c.getComment_re_seq());

			result = pstmt.executeUpdate();
			if (result == 1)
				System.out.println("데이터삽입이 완료되었습니다.");
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

	// 글 목록 보기
	public List<htBoardBean> getBoardList(int page, int limit) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		// page : 페이지
		// limit : 페이지 당 목록의 수
		// board_re_ref desc, board_re_seq asc에 의해 정렬한 것을
		// 조건절에 맞는 rnum의 범위 만큼 가져오는 쿼리문입니다.

		String board_list_sql = "select * from" + " (select rownum rnum, BOARD_NUM, BOARD_NAME,"
				+ " BOARD_SUBJECT, BOARD_CONTENT, BOARD_FILE," + " BOARD_RE_REF, BOARD_RE_LEV, BOARD_RE_SEQ,"
				+ " BOARD_READCOUNT, BOARD_DATE" + " from (select * from board " + "       order by BOARD_RE_REF desc,"
				+ "       BOARD_RE_SEQ asc) " + "  )" + "where rnum>=? and rnum<=?";
		List<htBoardBean> list = new ArrayList<htBoardBean>();
		// 한 페이지당 10개씩 목록인 경우 1페이지, 2페이지, 3페이지, 4페이지 ...
		int startrow = (page - 1) * limit + 1; // 읽기 시작할 row 번호(1 11 21 31 ....
		int endrow = startrow + limit - 1;
		try {
			con = ds.getConnection();
			pstmt = con.prepareStatement(board_list_sql);
			pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);
			rs = pstmt.executeQuery();

			// DB에서 가져온 데이터를 VO객체에 담습니다.
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
				list.add(board); // 값을 담은 객체를 리스트에 저장합니다.
			}

		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("getBoardList() 에러 : " + ex);
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}
		return list;
	}// getBoardList()메서드 end

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
			System.out.println("getListCount() 에러: " + ex);
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

			// 원문글의 BOARD_RE_REF 필드는 자신의 글번호 입니다.
			String sql = "insert into htbo " + "(HT_BOARD_IDX, HT_NICKNAME,  HT_BOARD_PASS, HT_BOARD_TITLE,"
					+ " HT_BOARD_CONTENT, HT_BOARD_FILE,  HT_RE_REF," + " HT_RE_LEV,  HT_RE_SEQ,HT_HIT)"
					+ " values(" + max_sql + ",?,?,?," + "        ?,?," + max_sql + "," + "        ?,?,?)";

			// 새로운 글을 등록하는 부분입니다.
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, htbo.getHt_nickname());
			pstmt.setString(2, htbo.getHt_board_pass());
			pstmt.setString(3, htbo.getHt_board_title());
			pstmt.setString(4, htbo.getHt_board_content());
			pstmt.setString(5, htbo.getHt_board_file());

			// 원문의 경우 HT_RE_LEV, HT_RE_SEQ 필드 값은 0입니다.
			pstmt.setInt(6, 0); // HT_RE_LEV 필드
			pstmt.setInt(7, 0); // HT_RE_SEQ 필드
			pstmt.setInt(8, 0); // HT_HIT 필드

			result = pstmt.executeUpdate();
			if (result == 1) {
				System.out.println("데이터 삽입이 모두 완료되었습니다.");
				return true;
			}
		} catch (Exception ex) {
			System.out.println("htboardInsert()에러: " + ex);
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
	}// htboardInsert()메서드 end

	// 글 삭제
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
					result_check = true; // 삭제가 안될 경우에는 false를 반환합니다.
			}
		} catch (Exception ex) {
			System.out.println("boardDelete() 에러: " + ex);
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
	}// boardDelete()메서드 end

	// 조회수 업데이트 - 글번호에 해당하는 조회수를 1 증가합니다.
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
			System.out.println("setReadCountUpdate() 에러 : " + ex);
		} finally {
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (SQLException ex) {
					ex.printStackTrace();
				}
		}

	}

	// 글 내용 보기
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
			System.out.println("getDetail() 에러: " + ex);
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
	}// getDetail()메서드 end

	public int htboardReply(htBoardBean board) {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int num = 0;

		// board 테이블의 글번호를 구하기 위해 Board_num을 필드의 최대값을 구해옵니다.
		String board_max_sql = "select max(ht_board_idx)+1 from htbo";
		/*
		 * 답변을 달 원문 글 그룹 번호입니다. 답변을 달게 되면 답변 글은 이 번호와 같은 관련글 번호를 갖게처리되면서 같은 그룹에 속하게
		 * 됩니다ㅣ. 글 목록에서 보여줄때 하나의 그룹으로 묶여서 출력됩니다.
		 */

		int re_ref = board.getHt_re_ref();

		/*
		 * 답글의 깊이를 의미합니다. 원문에 대한 답글이 출력될 때 한 번 들여쓰기 처리가 되고 답글에 대한 답글은 들여쓰기가 두 번 처리되게
		 * 합니다. 원문인 경우에는 이 값이 0이고 원문의 답글은 1, 답글의 답글은 2가 됩니다.
		 */
		int re_lev = board.getHt_re_lev();

		// 같은 관련 글 중에서 해당 글이 출력되는 순서입니다.
		int re_seq = board.getHt_re_seq();

		try {
			con = ds.getConnection();

			// 트랜잭션을 이용하기 위해서 setAutoCommit을 false로 설정합니다.
			con.setAutoCommit(false);
			pstmt = con.prepareStatement(board_max_sql);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				num = rs.getInt(1);
			}
			pstmt.close();

			// BOARD_RE_REF, BOARE_RE_SEQ 값을 확인하여 원문 글에 다른 답변이 있으면
			// 다른 답글들의 BOARD_RE_SEQ값을 1씩 증가시킵니다.
			// 현재 글을 다른 답글보다 앞에 출력되게 하기위해서 입니다.
			String sql = "update htbo" + " set HT_RE_SEQ=HT_RE_SEQ +1 " + " where HT_RE_REF =? "
					+ " and HT_RE_SEQ > ? ";

			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, re_ref);
			pstmt.setInt(2, re_seq);
			pstmt.executeUpdate();
			pstmt.close();

			// 등록할 답변 글의 HT_RE_LEV, HT_RE_SEQ 값을 원문 글보다 1씩
			// 증가시킵니다.
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
			pstmt.setString(5, ""); // 답변에는 파일을 업로드하지 않습니다.
			pstmt.setInt(6, re_ref); // 원문의 글번호
			pstmt.setInt(7, re_lev);
			pstmt.setInt(8, re_seq);
			pstmt.setInt(9, 0);// HT_HIT(조회수)는 0
			if (pstmt.executeUpdate() == 1) {
				con.commit(); // commit합니다.
			} else {
				con.rollback();
			}
		} catch (SQLException ex) {
			ex.printStackTrace();
			System.out.println("htboardReply() 에러: " + ex);
			if (con != null) {
				try {
					con.rollback(); // rollback합니다.
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
	}// htboardReply()메서드 end

	// 글쓴이인지 확인 - 비밀번호로 확인합니다.
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
			System.out.println("ishtBoardWriter() 에러: " + ex);
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

	// 글 수정
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
				System.out.println("성공 업데이트");
				return true;
			}
		} catch (Exception ex) {
			System.out.println("htboardModify() 에러: " + ex);
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
	}// htboardModify()메서드 end

	//댓글 리스트 구하기
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
				System.out.println("getCommentList()_CommentDAO 에러: " + ex);
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
	

	// 글의 갯수 구하기
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
			System.out.println("getListCount() 에러: " + ex);
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
