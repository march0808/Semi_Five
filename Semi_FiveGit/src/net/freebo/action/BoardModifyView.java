package net.freebo.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.freebo.action.ActionForward;
import net.freebo.db.FreeBoardBean;
import net.freebo.db.FreeBoardDAO;

public class BoardModifyView implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ActionForward forward = new ActionForward();
		FreeBoardDAO boarddao=new FreeBoardDAO();
		FreeBoardBean boarddata=new FreeBoardBean();
		
		//�Ķ���ͷ� ���޹��� �亯�� �� ��ȣ�� num������ �����մϴ�.
		int num=Integer.parseInt(request.getParameter("num"));
		
		//�� ��ȣ num�� �ش��ϴ� ������ �����ͼ� boarddata ��ü�� �����մϴ�.
		boarddata=boarddao.getDetail(num);
		
		//�� ������ ���� ���
		if(boarddata==null) {
			System.out.println("���� �󼼺��� ����.");
			forward.setRedirect(false);
			request.setAttribute("message", "���� �󼼺��� ����.");
			forward.setPath("error/error.jsp");
			return forward;
		}
		System.out.println("���� �󼼺��� �̵� �Ϸ�");
		//�亯 �� �������� �̵��� �� ���� �� ������ �����ֱ� ����
		//boarddata��ü�� Request ��ü�� �����մϴ�.
		request.setAttribute("boarddata", boarddata);
		
		forward.setRedirect(false);
		//�� �亯 ������ ��� �����մϴ�.
		forward.setPath("freeboard/boardModify.jsp");
		return forward;
	}//execute end

}
