package net.member.action;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import net.member.action.ActionForward;
import net.member.db.Member;
import net.member.db.MemberDAO;

public class MemberUpdateProcessAction implements Action {
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String realFolder="";
		
		
		String saveFolder="memberupload";
		
		int fileSize=5*1024*1024; 
		
	
		ServletContext sc = request.getServletContext();
		realFolder = sc.getRealPath(saveFolder);
		System.out.println("realFolder= " + realFolder);
		try {
			MultipartRequest multi=null;
			multi=new MultipartRequest(request, realFolder, fileSize, "utf-8",
					new DefaultFileRenamePolicy());
			String mem_id = multi.getParameter("mem_id");
			
			String mem_name = multi.getParameter("mem_name");
			String mem_nickname = multi.getParameter("mem_nickname");
			String mem_gender = multi.getParameter("mem_gender");
			int mem_tel = Integer.parseInt(multi.getParameter("mem_tel"));
			String mem_email = multi.getParameter("mem_email");
			int mem_birth = Integer.parseInt(multi.getParameter("mem_birth"));
			String mem_address = multi.getParameter("mem_address");
			int mem_type = Integer.parseInt(multi.getParameter("mem_type"));
			String mem_expt = multi.getParameter("mem_expt");
			
			Member m = new Member();
			m.setMem_id(mem_id);
			m.setMem_name(mem_name);
			m.setMem_nickname(mem_nickname);
			m.setMem_gender(mem_gender);
			m.setMem_tel(mem_tel);
			m.setMem_email(mem_email);
			m.setMem_birth(mem_birth);
			m.setMem_address(mem_address);
			m.setMem_type(mem_type);
			m.setMem_expt(mem_expt);
		
			
			String check = multi.getParameter("check");
			System.out.println("check=" + check);
			if(check != null) {
				m.setMemberfile(check);
			}else {
				String memberfile = multi.getFilesystemName("memberfile");
				m.setMemberfile(memberfile);
			}
			
			response.setContentType("text/html;charset=utf-8");
			PrintWriter out = response.getWriter();
			
			MemberDAO mdao = new MemberDAO();
			
			int result = mdao.update(m);
			out.println("<script>");
			if (result == 1) {
				out.println("alert('수정되었습니다.');");
				out.println("location.href='BoardList.bo';");	
			}else{
				out.println("alert('회원정보 수정에 실패했습니다.');");
				out.println("history.back()");
			}
			out.println("</script>");
			out.close();
			return null;
		}catch(IOException ex) {
			ActionForward forward =new ActionForward();
			forward.setPath("error/error.jsp");
			request.setAttribute("message", "게시판 업로드 실패입니다.");
			forward.setRedirect(false);
			return forward;
		}
		
	}
	
}