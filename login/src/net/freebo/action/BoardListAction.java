package net.freebo.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import net.freebo.db.FreeBoardBean;
import net.freebo.db.FreeBoardDAO;


public class BoardListAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		FreeBoardDAO boarddao = new FreeBoardDAO();
		List<FreeBoardBean> boardlist = new ArrayList<FreeBoardBean>();
		
		
		int page = 1; 
		int limit = 10; 
		if( request.getParameter("page") != null) {
			page = Integer.parseInt(request.getParameter("page"));
		}
		System.out.println("�Ѿ�� ������ = " + page);
		
		if (request.getParameter("limit") != null) {
			limit = Integer.parseInt(request.getParameter("limit"));
		}
		
		System.out.println("�Ѿ�� limit = " + limit);
		
		
		int listcount = boarddao.getListCount();
		
		
		boardlist = boarddao.getBoardList(page, limit);
		
	
		int maxpage = (listcount + limit - 1) / limit;
		System.out.println("�� �������� = " + maxpage);
		

		int startpage = ((page-1)/10) * 10 + 1;
		System.out.println("���� �������� ������ ���� ������ �� = " + startpage);
		
		
		int endpage = startpage + 10 - 1;
		System.out.println("���� �������� ������ ������ ������ �� = " + endpage);
		
	
		if(endpage > maxpage)
			endpage = maxpage;
			
		String state = request.getParameter("state");
		
		if (state == null) {
			
			System.out.println("state==null");
			request.setAttribute("page", page); 
			request.setAttribute("maxpage", maxpage); 
			
			
			request.setAttribute("startpage", startpage);
			
			
			request.setAttribute("endpage", endpage);
			
			request.setAttribute("listcount", listcount); 
			
			
			request.setAttribute("boardlist", boardlist);
			request.setAttribute("limit", limit);
			ActionForward forward = new ActionForward();
			forward.setRedirect(false);
			
			
			forward.setPath("freeboard/boardList.jsp");
			return forward;
		}else {
			System.out.println("state=ajax");
			
			
			JsonObject object = new JsonObject();
			object.addProperty("page", page);
			object.addProperty("maxpage", maxpage);
			object.addProperty("startpage", startpage);
			object.addProperty("endpage", endpage);
			object.addProperty("listcount", listcount);
			object.addProperty("limit", limit);
			
		
			JsonElement je = new Gson().toJsonTree(boardlist);
			System.out.println("boardlist="+je.toString());
			object.add("boardlist", je);
			
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().append(object.toString());
			System.out.println(object.toString());
			return null;
		}//if end
	}//execute end
}//class end