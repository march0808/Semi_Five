package net.member.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.member.db.MemberDAO;

public class MemberLoginProcessAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ActionForward forward = new ActionForward();
		String mem_id = request.getParameter("mem_id");
		String mem_password = request.getParameter("mem_password");
		MemberDAO mdao = new MemberDAO();
		int result = mdao.isId(mem_id,mem_password);
		System.out.println("결과는 " + result);
		
		
		if(result ==1) {
			HttpSession session = request.getSession();
			session.setAttribute("mem_id", mem_id);
			
			String IDStore = request.getParameter("remember");
			Cookie cookie = new Cookie("mem_id", mem_id);
			
			
			if (IDStore != null && IDStore.equals("store")) {
				
				cookie.setMaxAge(2 * 60);
				
				response.addCookie(cookie);
				
			}else {
				cookie.setMaxAge(0);
				response.addCookie(cookie);
			}
			
			forward.setRedirect(true);
			forward.setPath("BoardList.freebo");
			return forward;
		}else {
			String message = "비밀번호가 일치하지 않습니다.";
			if(result == -1)
				message = "아이디가 존재하지 않습니다.";
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			out.print("<script>");
			out.print("alert('" + message + "');");
			out.print("location.href='login.net';");
			out.print("</script>");
			out.close();
			return null;
		}
	}
}