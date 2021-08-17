package net.freebo.action;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import net.freebo.db.FreeBoardBean;
import net.freebo.db.FreeBoardDAO;



public class BoardAddAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		FreeBoardDAO boarddao	  =new FreeBoardDAO();
		FreeBoardBean boarddata   =new FreeBoardBean();
		ActionForward forward =new ActionForward();
		
		String realFolder="";
		
		//WebContent�Ʒ��� �� ���� �����ϼ���
		String saveFolder="boardupload";
		
		int fileSize=5*1024*1024; //���ε��� ������ �ִ� ������ �Դϴ�.5MB
		
		//���� ���� ��θ� �����մϴ�.
		ServletContext sc = request.getServletContext();
		realFolder = sc.getRealPath(saveFolder);
		System.out.println("realFolder= " + realFolder);
		boolean result=false;
		try {
			MultipartRequest multi=null;
			multi=new MultipartRequest(request,
					realFolder,
					fileSize,
					"utf-8",
					new DefaultFileRenamePolicy());
			
			//BoardBean ��ü�� �� ��� ������ �Է� ���� �������� �����մϴ�.
			boarddata.setMem_nickname(multi.getParameter("Mem_nickname"));
			boarddata.setFree_board_title(multi.getParameter("Free_board_title"));
			boarddata.setFree_board_content(multi.getParameter("Free_board_content"));
			boarddata.setFree_board_type(Integer.parseInt(multi.getParameter("free_board_type")));
			
			//�ý��� �� ���ε�� ���� ���ϸ��� ��� �ɴϴ�.
			String filename=multi.getFilesystemName("board_file");
			boarddata.setFree_board_file(filename);
			
			//�� ��� ó���� ���� DAO�� boardInset()�޼��带 ȣ���մϴ�.
			//�� ��� ������ �Է��� ������ ����Ǿ� �ִ� boarddata��ü�� �����մϴ�.
			result=boarddao.boardInsert(boarddata);
			
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
			//Redirect���θ� true�� �����մϴ�.
			forward.setRedirect(true);
			forward.setPath("BoardList.freebo");//�̵��� ��θ� �����մϴ�.
			return forward;
		}catch(IOException ex) {
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "�Խ��� ���ε� �����Դϴ�.");
			forward.setRedirect(false);
			return forward;
		}//catch end
	}

}
