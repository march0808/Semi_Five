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
		
		//WebContent아래에 꼭 폴더 생성하세요
		String saveFolder="boardupload";
		
		int fileSize=5*1024*1024; //업로드할 파일의 최대 사이즈 입니다.5MB
		
		//실제 저장 경로를 지정합니다.
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
			
			
			//비밀번호가 일치하는 경우 수정 내용을 설정합니다.
			//BoardBean 객체에 글 등록 폼에서 입력 받은 정보들을 저장합니다.
			boarddata.setFree_board_idx(num);
			boarddata.setFree_board_title(multi.getParameter("free_board_title"));
			boarddata.setFree_board_content(multi.getParameter("free_board_content"));
			
			String check = multi.getParameter("check");
			System.out.println("check=" + check);
			if(check != null) { // 기존파일 그대로 사용하는 경우나 파일 제거한 경우입니다.
				boarddata.setFree_board_file(check);
			}else {//파일 첨부로 파일 선택한 경우
				//시스템 상에 업로드된 실제 파일명을 얻어 옵니다.
				String filename = multi.getFilesystemName("free_board_file");
				boarddata.setFree_board_file(filename);
			}
			
			//DAO에서 수정 메서드 호출하여 수정합니다.
			result=boarddao.boardModify(boarddata);
			
			//수정에 실패할 경우
			if(result==false) {
				System.out.println("게시판 수정 실패");
				forward.setRedirect(false);
				request.setAttribute("message", "게시판 수정이 되지 않았습니다.");
				forward.setPath("error/error.jsp");
				return forward;
			}
			//수정 성공
			System.out.println("게시판 수정 완료");
			
			forward.setRedirect(true);
			// 수정한 글 내용을 보여주기 위해 글 내용 보기 페이지로 이동하기 위해 경로를 설정합니다.
			forward.setPath("BoardDetailAction.freebo?num=" + boarddata.getFree_board_idx());//이동할 경로를 지정합니다.
			return forward;
		}catch(IOException ex) {
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "게시판 업로드 중 실패입니다.");
			forward.setRedirect(false);
			return forward;
		}//catch end
	}//execute end
}
