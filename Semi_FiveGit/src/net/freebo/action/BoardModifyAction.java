package net.freebo.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import net.freebo.action.ActionForward;
import net.freebo.db.FreeBoardBean;
import net.freebo.db.FreeBoardDAO;

public class BoardModifyAction implements Action {

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
			
			int num =Integer.parseInt(multi.getParameter("free_board_idx"));
			
			
			//��й�ȣ�� ��ġ�ϴ� ��� ���� ������ �����մϴ�.
			//BoardBean ��ü�� �� ��� ������ �Է� ���� �������� �����մϴ�.
			boarddata.setFree_board_idx(num);
			boarddata.setFree_board_title(multi.getParameter("free_board_title"));
			boarddata.setFree_board_content(multi.getParameter("free_board_content"));
			
			String check = multi.getParameter("check");
			System.out.println("check=" + check);
			if(check != null) { // �������� �״�� ����ϴ� ��쳪 ���� ������ ����Դϴ�.
				boarddata.setFree_board_file(check);
			}else {//���� ÷�η� ���� ������ ���
				//�ý��� �� ���ε�� ���� ���ϸ��� ��� �ɴϴ�.
				String filename = multi.getFilesystemName("free_board_file");
				boarddata.setFree_board_file(filename);
			}
			
			//DAO���� ���� �޼��� ȣ���Ͽ� �����մϴ�.
			result=boarddao.boardModify(boarddata);
			
			//������ ������ ���
			if(result==false) {
				System.out.println("�Խ��� ���� ����");
				forward.setRedirect(false);
				request.setAttribute("message", "�Խ��� ������ ���� �ʾҽ��ϴ�.");
				forward.setPath("error/error.jsp");
				return forward;
			}
			//���� ����
			System.out.println("�Խ��� ���� �Ϸ�");
			
			forward.setRedirect(true);
			// ������ �� ������ �����ֱ� ���� �� ���� ���� �������� �̵��ϱ� ���� ��θ� �����մϴ�.
			forward.setPath("BoardDetailAction.freebo?num=" + boarddata.getFree_board_idx());//�̵��� ��θ� �����մϴ�.
			return forward;
		}catch(IOException ex) {
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "�Խ��� ���ε� �� �����Դϴ�.");
			forward.setRedirect(false);
			return forward;
		}//catch end
	}//execute end
}
