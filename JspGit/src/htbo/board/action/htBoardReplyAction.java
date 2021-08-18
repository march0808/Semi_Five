package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import htbo.board.db.htBoardBean;
import htbo.board.db.htBoardDAO;
import htbo.board.action.Action;
import htbo.board.action.ActionForward;

public class htBoardReplyAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ActionForward forward = new ActionForward();
		htBoardDAO boarddao = new htBoardDAO();
		htBoardBean boarddata = new htBoardBean();
		int result=0;
		
		//파라미터로 넘어온 값들을 boarddata 객체에 저장합니다.
		//boarddata.setHt_board_detail_type(request.getParameter("ht_board_detail_type"));
		boarddata.setHt_nickname(request.getParameter("ht_nickname"));
        boarddata.setHt_board_pass(request.getParameter("ht_board_pass"));
        boarddata.setHt_board_title(request.getParameter("ht_board_title"));
        boarddata.setHt_board_content(request.getParameter("ht_board_content"));
        boarddata.setHt_re_ref(Integer.parseInt(request.getParameter("ht_re_ref")));
        boarddata.setHt_re_lev(Integer.parseInt(request.getParameter("ht_re_lev")));
        boarddata.setHt_re_seq(Integer.parseInt(request.getParameter("ht_re_seq")));
        
        //답변을 DB에 저장하기 위해 boarddata 객체를 파라미터로 전달하고
        //DAO의 메서드 boardReply를 호출합니다.
        result=boarddao.htboardReply(boarddata);
        		
		//답변 저장에 실패한 경우
		if(result==0) {
			System.out.println("답장 저장 실패");
		    forward = new ActionForward();
		    forward.setRedirect(false);
		    request.setAttribute("message", "답장 저장 실패입니다.");
		    forward.setPath("error/error.jsp");
		    return forward;
		}
		
	    //답변 저장이 제대로 된 경우
		System.out.println("답장 완료");
		forward.setRedirect(true);
		//답변 글 내용을 확인하기 위해 글 내용 보기 페이지를 경로로 설정합니다.
		forward.setPath("htBoardDetailAction.htbo?num=" + result);

		return forward;
	}

}//class end 