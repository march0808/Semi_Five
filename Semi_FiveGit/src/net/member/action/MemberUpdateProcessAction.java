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
		
		//WebContent아래에 꼭 폴더 생성하세요
		String saveFolder="memberupload";
		
		int fileSize=5*1024*1024; //업로드할 파일의 최대 사이즈 입니다.5MB
		
		//실제 저장 경로를 지정합니다.
		ServletContext sc = request.getServletContext();
		realFolder = sc.getRealPath(saveFolder);
		System.out.println("realFolder= " + realFolder);
		try {
			MultipartRequest multi=null;
			multi=new MultipartRequest(request, realFolder, fileSize, "utf-8",
					new DefaultFileRenamePolicy());
			String id = multi.getParameter("id");
			// String password = request.getParameter("password"); readOnly해놔서 필요없음
			String name = multi.getParameter("name");
			int age = Integer.parseInt(multi.getParameter("age"));
			String gender = multi.getParameter("gender");
			String email = multi.getParameter("email");
			
			Member m = new Member();
			m.setAge(age);		m.setEmail(email);		m.setGender(gender);
			m.setId(id);		m.setName(name);		//m.setPassword(password);
			
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
			if (result == 1) {// 삽입이 된 경우
				out.println("alert('수정되었습니다.');");
				out.println("location.href='BoardList.bo';");	
			}else{
				out.println("alert('회원정보 수정에 실패했습니다.');");
				out.println("history.back()");//비밀번호를 제외한 다른 데이터는 유지 되어 있습니다.
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
		}//catch
		
	}//execute
	
}//Action
