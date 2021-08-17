package net.member.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.JsonArray;

import net.member.db.MemberDAO;

public class MemeberIdCheckAction implements Action{
	
	
	@Override
	public ActionForward execute(HttpServletRequest request, 
			HttpServletResponse response)
					throws ServletException, IOException{
	MemberDAO dao=new MemberDAO();
	int result=dao.isId(request.getParameter("mem_id"));
	response.getWriter().append(Integer.toString(result));
	System.out.println(result);
	return null;

   }
}