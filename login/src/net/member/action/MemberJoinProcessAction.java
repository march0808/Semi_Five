package net.member.action;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.member.db.Member;
import net.member.db.MemberDAO;


public class MemberJoinProcessAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String mem_id=request.getParameter("mem_id");
		String mem_password=request.getParameter("mem_password");
		String mem_name=request.getParameter("mem_name");
		String mem_nickname=request.getParameter("mem_nickname");
		String mem_gender=request.getParameter("mem_gender");
		int mem_tel=Integer.parseInt(request.getParameter("mem_tel"));
		String mem_email=request.getParameter("mem_email");
		int mem_birth=Integer.parseInt(request.getParameter("mem_birth"));
		String mem_address=request.getParameter("mem_address");
		int mem_type=Integer.parseInt(request.getParameter("mem_type"));
		String mem_expt=request.getParameter("mem_expt");
		
		Member m = new Member();
		m.setMem_id(mem_id);
		m.setMem_password(mem_password);
		m.setMem_name(mem_name);
		m.setMem_nickname(mem_nickname);
		m.setMem_gender(mem_gender);
		m.setMem_tel(mem_tel);
		m.setMem_email(mem_email);
		m.setMem_birth(mem_birth);
		m.setMem_address(mem_address);
		m.setMem_type(mem_type);
		m.setMem_expt(mem_expt);
		
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		MemberDAO mdao = new MemberDAO();
		
		int result = mdao.insert(m);
		out.println("<script>");
		if (result == 1) {
			out.println("alert('회원 가입을 축하합니다.');");
			out.println("location.href='login.net';");	
		}else if(result == -1) {
			out.println("alert('아이디가 중복되었습니다. 다시 입력하세요.');");
			
			out.println("history.back()");
		}
		out.println("</script>");
		out.close();
		return null;
	}

}