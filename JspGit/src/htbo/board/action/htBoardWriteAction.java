package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import htbo.board.action.ActionForward;

public class htBoardWriteAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ActionForward forward = new ActionForward();
		forward.setRedirect(false); //������ ������� �ּҰ� �ٲ��� �ʾƿ�
		forward.setPath("htboard/htboardWrite.jsp");
		return forward;
	}

}//class end 