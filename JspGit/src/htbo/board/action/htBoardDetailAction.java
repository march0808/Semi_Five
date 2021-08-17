package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import htbo.board.action.ActionForward;
import htbo.board.db.htBoardBean;
import htbo.board.db.htBoardDAO;

public class htBoardDetailAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
    htBoardDAO boarddao = new htBoardDAO();
	htBoardBean boarddata = new htBoardBean();

	// BoardDetailAction.bo?num=5
	// �۹�ȣ �Ķ���� ���� num������ �����մϴ�.
	int num = Integer.parseInt(request.getParameter("num"));

	// ������ Ȯ���� ���� ��ȸ���� ������ŵ�ϴ�.
	boarddao.setHitUpdate(num);

	// ���� ������ DAO���� ���� �� ���� ����� boarddata ��ü�� �����մϴ�.
	boarddata = boarddao.getDetail(num);

	// boarddata=null;//error�׽�Ʈ�� ���� �� ����
	// DAO���� ���� ������ ���� ������ ��� null�� ��ȯ�մϴ�.
	if (boarddata == null) {
		System.out.println("�󼼺��� ����");
		ActionForward forward = new ActionForward();
		forward.setRedirect(false);
		request.setAttribute("message", "�����͸� ���� ���߽��ϴ�.");
		forward.setPath("error/error.jsp");
		return forward;
	}
	System.out.println("�󼼺��� ����");

	// boarddata ��ü�� request ��ü�� �����մϴ�.
			request.setAttribute("boarddata", boarddata);

			ActionForward forward = new ActionForward();
			forward.setRedirect(false);

			// �� ���� ���� �������� �̵��ϱ� ���� ��θ� �����մϴ�.
			forward.setPath("htboard/htboardView.jsp");
			return forward;
		}

	}
