package net.member.action;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MemberLoginAction implements Action{
@Override
public ActionForward execute(HttpServletRequest request, HttpServletResponse response)

		throws ServletException, IOException{
	System.out.println("����� login");
	String mem_id="";
	Cookie[] cookies=request.getCookies();
	if(cookies!=null ) {
		for(int i=0;i<cookies.length;i++) {
			if(cookies[i].getName().equals("mem_id")) {
				mem_id=cookies[i].getValue();
			}
		}
    }

request.setAttribute("mem_id", mem_id);
ActionForward forward=new ActionForward();
forward.setRedirect(false);
forward.setPath("member/loginForm.jsp");
return forward;



}

}
