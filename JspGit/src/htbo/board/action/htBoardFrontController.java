package htbo.board.action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("*.htbo")
public class htBoardFrontController extends javax.servlet.http.HttpServlet {
	private static final long serialVersionUID = 1L;
       

    protected void doProcess(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
    	/*
    	  ��û�� ��ü URL�߿��� ��Ʈ ��ȣ ���� ���� ������ ���ڿ����� ��ȯ�˴ϴ�.
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
        
        //�ʱ�ȭ
        ActionForward forward = null;
        Action action = null;
          
        switch (command) {
        case "/htBoardList.htbo":
        	 action = new htBoardListAction();
        	 break;
        case "/htBoardWrite.htbo":
       	 action = new htBoardWriteAction();
       	 break;
        case "/htBoardAddAction.htbo":
          	 action = new htBoardAddAction();
          	 break;
        case "/htBoardDetailAction.htbo":
         	 action = new htBoardDetailAction();
         	 break;
        case "/htCommentAdd.htbo":
       	 action = new htCommentAdd();
       	 break;
        case "/htCommentList.htbo":
          	 action = new htCommentList();
          	 break;
        case "/htCommentDelete.htbo":
          	 action = new htCommentDelete();
          	 break;
        case "/htCommentUpdate.htbo":
          	 action = new htCommentUpdate();
          	 break;
        case "/htCommentReply.htbo":
          	 action = new htCommentReply();
          	 break;
        case "/htBoardReplyView.htbo":
        	 action = new htBoardReplyView();
        	 break;
        case "/htBoardReplyAction.htbo":
			action = new htBoardReplyAction();
			break;
        case "/htBoardModifyView.htbo":
       	 action = new htBoardModifyView();
       	 break;
       case "/htBoardModifyAction.htbo":
			action = new htBoardModifyAction();
			break;
       case "/htBoardDeleteAction.htbo":
			action = new htBoardDeleteAction();
			break;
       case "/htBoardFileDown.htbo":
			action = new htBoardFileDownAction();
			break;
        }//switch end
        
        forward = action.execute(request, response);
        
        if (forward != null) {
        	if(forward.isRedirect()) { //�����̷�Ʈ �˴ϴ�.
        	   response.sendRedirect(forward.getPath());
        	} else { //�������˴ϴ�.
        		RequestDispatcher dispatcher =
        				request.getRequestDispatcher(forward.getPath());
        		dispatcher.forward(request, response);
        	}//else
        }//forward
        
    }//doProcess
    
    
	//doProcess(request, response)�޼��带 �����Ͽ� ��û�� GET����̵�
    //POST������� ���۵Ǿ� ���� ���� �޼��忡�� ��û�� ó���� �� �ֵ��� �Ͽ����ϴ�. 
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
