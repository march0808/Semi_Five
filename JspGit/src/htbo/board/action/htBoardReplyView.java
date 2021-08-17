package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import htbo.board.db.htBoardBean;
import htbo.board.db.htBoardDAO;
import htbo.board.action.ActionForward;

public class htBoardReplyView implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ActionForward forward = new ActionForward();
		htBoardDAO boarddao = new htBoardDAO();
		htBoardBean boarddata = new htBoardBean();

		// 파라미터로 전달받은 답변할 글 번호를 num변수에 저장합니다.
		int num = Integer.parseInt(request.getParameter("num"));

		// 글 번호 num에 해당하는 내용을 가져와서 boarddata 객체에 저장합니다.
		boarddata = boarddao.getDetail(num);

		// 글 내용이 없는 경우
		if (boarddata == null) {
			System.out.println("글이 존재하지 않습니다.");
			forward.setRedirect(false);
			request.setAttribute("message", "글이 존재하지 않습니다.");
			forward.setPath("error/error.jsp");
			return forward;
		}

		System.out.println("답변 페이지 이동 완료");
		// 답변 폼 페이지로 이도할 때 원본 글 내용을 보여주기 위해
		// boarddata 객체를 Request 객체에 저장합니다.
		request.setAttribute("boarddata", boarddata);

		forward.setRedirect(false);
		// 글 답변 페이지 경로 지정합니다.
		forward.setPath("htboard/htboardReplyWrite.jsp");
		return forward;
	}

}//class end 
