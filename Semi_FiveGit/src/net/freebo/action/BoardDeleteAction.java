package net.freebo.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.freebo.action.ActionForward;
import net.freebo.db.FreeBoardDAO;

public class BoardDeleteAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("BoardDeleteAction ����");
		int count=0;
		
		int num=Integer.parseInt(request.getParameter("num"));
		
		FreeBoardDAO boarddao=new FreeBoardDAO();
		
		
		count=boarddao.boardDelete(num);
		
		
		if(count>=1) {
			//���� ó�� ������ ��� - �� ��� ���� ��û�� �����ϴ� �κ��Դϴ�.
			System.out.println("�Խ��� ���� ����");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out=response.getWriter();
			out.println("<script>");
			out.println("alert('���� �Ǿ����ϴ�.');");
			out.println("location.href='BoardList.freebo';");
			out.println("</script>");
			out.close();
			return null;
		}else{	
			//���� ó�� ������ ���
			System.out.println("�Խ��� ���� ����");
			ActionForward forward = new ActionForward();
			forward.setRedirect(false);
			request.setAttribute("message", "�����͸� �������� ���߽��ϴ�.");
			forward.setPath("error/error.jsp");
			return forward;
		}
		
	
		
	}//execute end
}
