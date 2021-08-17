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

		// �Ķ���ͷ� ���޹��� �亯�� �� ��ȣ�� num������ �����մϴ�.
		int num = Integer.parseInt(request.getParameter("num"));

		// �� ��ȣ num�� �ش��ϴ� ������ �����ͼ� boarddata ��ü�� �����մϴ�.
		boarddata = boarddao.getDetail(num);

		// �� ������ ���� ���
		if (boarddata == null) {
			System.out.println("���� �������� �ʽ��ϴ�.");
			forward.setRedirect(false);
			request.setAttribute("message", "���� �������� �ʽ��ϴ�.");
			forward.setPath("error/error.jsp");
			return forward;
		}

		System.out.println("�亯 ������ �̵� �Ϸ�");
		// �亯 �� �������� �̵��� �� ���� �� ������ �����ֱ� ����
		// boarddata ��ü�� Request ��ü�� �����մϴ�.
		request.setAttribute("boarddata", boarddata);

		forward.setRedirect(false);
		// �� �亯 ������ ��� �����մϴ�.
		forward.setPath("htboard/htboardReplyWrite.jsp");
		return forward;
	}

}//class end 
