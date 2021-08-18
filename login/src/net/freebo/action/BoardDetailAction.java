package net.freebo.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.freebo.action.ActionForward;
import net.freebo.db.FreeBoardBean;
import net.freebo.db.FreeBoardDAO;

public class BoardDetailAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		FreeBoardDAO boarddao = new FreeBoardDAO();
		FreeBoardBean boarddata=new FreeBoardBean();
		
		
		int num=Integer.parseInt(request.getParameter("num"));
		
		
		boarddao.setReadCountUpdate(num);
		
		
		boarddata=boarddao.getDetail(num);
		
		
		if(boarddata==null) {
			System.out.println("상세보기 실패");
			ActionForward forward = new ActionForward();
			forward.setRedirect(false);
			request.setAttribute("message", "데이터를 읽지 못했습니다.");
			forward.setPath("error/error.jsp");
			return forward;
		}
		System.out.println("상세보기 성공");
		
		
		request.setAttribute("boarddata", boarddata);
		
		ActionForward forward = new ActionForward();
		forward.setRedirect(false);
		
		
		forward.setPath("freeboard/boardView.jsp");
		return forward;
	}
}
