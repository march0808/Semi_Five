package net.freebo.action;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("*.freebo")
public class FreeBoardFrontController extends javax.servlet.http.HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doProcess(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		 * ��û�� ��ü URL�߿��� ��Ʈ ��ȣ ���� ���� ������ ���ڿ����� ��ȯ�˴ϴ�. 
		  ��) http://localhost:8088/JspProject/login.net�� ��� 
		    "/JspProject/login.net" ��ȯ�˴ϴ�.
		 */
		String RequestURI = request.getRequestURI();
		System.out.println("RequestURI = " + RequestURI);

		// getContextPath() : ���ؽ�Ʈ ��ΰ� ��ȯ�˴ϴ�.
		// contextPath�� "/JspProject"�� ��ȯ�˴ϴ�.
		String contextPath = request.getContextPath();
		System.out.println("contextPath = " + contextPath);

		// RequestURI���� ���ؽ�Ʈ ��� ���� ���� �ε��� ��ġ�� ���ں���
		// ������ ��ġ ���ڱ��� �����մϴ�.
		// command�� "/login.net" ��ȯ�˴ϴ�.
		String command = RequestURI.substring(contextPath.length());
		System.out.println("command = " + command);

		// �ʱ�ȭ
		ActionForward forward = null;
		Action action = null;

		switch (command) {		
			case "/BoardList.freebo":
				action = new BoardListAction();
				break;
			case "/BoardList2.freebo":
				action = new BoardListAction2();
				break;	
			case "/BoardWrite.freebo":
				action = new BoardWriteAction();
				break;
			case "/BoardAddAction.freebo":
				action = new BoardAddAction();
				break;
			case "/BoardDetailAction.freebo":
				action = new BoardDetailAction();
				break;
			case "/BoardModifyView.freebo":
				action = new BoardModifyView();
				break;
			case "/BoardModifyAction.freebo":
				action = new BoardModifyAction();
				break;
			case "/BoardDeleteAction.freebo":
				action = new BoardDeleteAction();
				break;
			case "/BoardFileDown.freebo":
				action = new BoardFileDownAction();
				break;
		
		}// switch end
		
		forward = action.execute(request, response);

		if (forward != null) {
			if (forward.isRedirect()) { // �����̷�Ʈ �˴ϴ�.
				response.sendRedirect(forward.getPath());
			} else {// �������˴ϴ�.
				RequestDispatcher dispatcher = 
						request.getRequestDispatcher(forward.getPath());
				dispatcher.forward(request, response);
			}//else
		}//if (forward != null)

	}//doProcess end

	// doProcess(request,response)�޼��带 �����Ͽ� ��û�� GET����̵�
	// POST������� ���۵Ǿ� ���� ���� �޼��忡�� ��û�� ó���� �� �ֵ��� �Ͽ����ϴ�.
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doProcess(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		doProcess(request, response);
	}
}
