package htbo.board.action;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import htbo.board.action.ActionForward;
import htbo.board.db.htBoardBean;
import htbo.board.db.htBoardDAO;

public class htBoardAddAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		htBoardDAO boarddao = new htBoardDAO();
		  htBoardBean boarddata = new htBoardBean();
		  ActionForward forward = new ActionForward();
		  
		  String realFolder="";
		  
		  //WebContent�Ʒ��� �� ���� �����ϼ��� 
		  String saveFolder="htboardupload";
		  
		  int fileSize=5*1024*1024; //���ε� �� ������ �ִ� �������Դϴ�. 5MB
		  
		  //���� ���� ��θ� �����մϴ�.
		  ServletContext sc = request.getServletContext();
		  realFolder = sc.getRealPath(saveFolder);
		  System.out.println("realFolder= " + realFolder);
		  boolean result = false;
		  try {
			  MultipartRequest multi
			  = new MultipartRequest(request,
					  realFolder,
					  fileSize,
					  "utf-8",
					  new DefaultFileRenamePolicy());
			  
			  //BoardBean ��ü�� �� ��� ������ �Է� ���� �������� �����մϴ�.
			  boarddata.setHt_nickname(multi.getParameter("ht_nickname"));
			  boarddata.setHt_board_detail_type(multi.getParameter("ht_board_detail_type"));
			  boarddata.setHt_board_pass(multi.getParameter("ht_board_pass"));
			  boarddata.setHt_board_title(multi.getParameter("ht_board_title"));
			  boarddata.setHt_board_content(multi.getParameter("ht_board_content"));
			  
			  //�ý��� �� ���ε�� ���� ���ϸ��� ��� �ɴϴ�.
			  String filename=multi.getFilesystemName("ht_board_file");
			  boarddata.setHt_board_file(filename);

			  //�� ��� ó���� ���� DAO�� boardInsert()�޼��带 ȣ���մϴ�.
			  //�� ��� ������ �Է��� ������ ����Ǿ� �ִ� boarddata��ü�� �����մϴ�.
			  result=boarddao.htboardInsert(boarddata);
			  
			  //�� ��Ͽ� ������ ��� false�� ��ȯ�մϴ�.
			  if(result==false) {
				  System.out.println("�Խ��� ��� ����");
				  forward.setPath("error/error.jsp");
				  request.setAttribute("message", "�Խ��� ��� �����Դϴ�.");
				  forward.setRedirect(false);
				  return forward;
			  }
			  System.out.println("�Խ��� ��� �Ϸ�");
			  
			  //�� ����� �Ϸ�Ǹ� �� ����� �����ֱ� ���� "BoardList.bo"�� �̵��մϴ�.
			  //Redirect���θ� true �� �����մϴ�.
			  forward.setRedirect(true);
			  forward.setPath("htBoardList.htbo");//�̵��� ��θ� �����մϴ�.
			return forward;
		}catch(IOException ex) {
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "�Խ��� ���ε� �����Դϴ�.");
			forward.setRedirect(false);
			return forward;
		}//catch end

	}//execute end 
		
	}
