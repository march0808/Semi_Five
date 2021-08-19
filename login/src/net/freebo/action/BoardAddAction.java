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
		
		
		String saveFolder="boardupload";
		
		int fileSize=5*1024*1024; 
		
		
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
			
			
			boarddata.setMem_nickname(multi.getParameter("mem_nickname"));
			boarddata.setFree_board_title(multi.getParameter("Free_board_title"));
			boarddata.setFree_board_content(multi.getParameter("Free_board_content"));
			boarddata.setFree_board_type(Integer.parseInt(multi.getParameter("free_board_type")));
			
			
			String filename=multi.getFilesystemName("board_file");
			boarddata.setFree_board_file(filename);
			
			
			result=boarddao.boardInsert(boarddata);
			
			
			if(result==false) {
				System.out.println("게시판 등록 실패");
				forward.setPath("error/error.jsp");
				request.setAttribute("message", "게시판 등록 실패입니다.");
				forward.setRedirect(false);
				return forward;
			}
			System.out.println("게시판 등록 완료");
			
			
			forward.setRedirect(true);
			forward.setPath("BoardList.freebo");
			return forward;
		}catch(IOException ex) {
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "게시판 업로드 실패입니다.");
			forward.setRedirect(false);
			return forward;
		}
	}

}
