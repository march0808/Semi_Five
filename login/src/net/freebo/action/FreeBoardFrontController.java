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
	
		String RequestURI = request.getRequestURI();
		System.out.println("RequestURI = " + RequestURI);

	
		String contextPath = request.getContextPath();
		System.out.println("contextPath = " + contextPath);

		
		String command = RequestURI.substring(contextPath.length());
		System.out.println("command = " + command);

		
		ActionForward forward = null;
		Action action = null;

		switch (command) {		
			case "/BoardList.freebo":
				action = new BoardListAction();
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
			case "/BoardReplyView.freebo":
				action = new BoardReplyView();
				break;
			case "/BoardReplyAction.freebo":
				action = new BoardReplyAction();
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
			if (forward.isRedirect()) { // 리다이렉트 됩니다.
				response.sendRedirect(forward.getPath());
			} else {// 포워딩됩니다.
				RequestDispatcher dispatcher = 
						request.getRequestDispatcher(forward.getPath());
				dispatcher.forward(request, response);
			}//else
		}//if (forward != null)

	}//doProcess end

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
