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
		System.out.println("BoardDeleteAction 접속");
		int count=0;
		
		int num=Integer.parseInt(request.getParameter("num"));
		
		FreeBoardDAO boarddao=new FreeBoardDAO();
		
		
		count=boarddao.boardDelete(num);
		
		
		if(count>=1) {
			//삭제 처리 성공한 경우 - 글 목록 보기 요청을 전송하는 부분입니다.
			System.out.println("게시판 삭제 성공");
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out=response.getWriter();
			out.println("<script>");
			out.println("alert('삭제 되었습니다.');");
			out.println("location.href='BoardList.freebo';");
			out.println("</script>");
			out.close();
			return null;
		}else{	
			//삭제 처리 실패한 경우
			System.out.println("게시판 삭제 실패");
			ActionForward forward = new ActionForward();
			forward.setRedirect(false);
			request.setAttribute("message", "데이터를 삭제하지 못했습니다.");
			forward.setPath("error/error.jsp");
			return forward;
		}
		
	
		
	}//execute end
}
